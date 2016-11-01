describe("Backend Interaction Subsystem", function() {
  it("Called function in Backend Javascript File. Returned successfully", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
});

describe("Generate sql query", function() {
  var inputString = '{' +
                       '"interface":[{' +
                         '"region": "region1",' +
                         '"catBreed": "catBreed1",' +
                         '"age": "age1",' +
                         '"weight": "weight1",' +
                         '"gender": "gender1",' +
                         '"height": "height1"' +
                       '}]' +
                    '}';
  var input = JSON.parse(inputString);

  it("Takes a json object with the expected fields", function() {
    expect(jsonToString(input)).toEqual("region1 catBreed1 age1 weight1 gender1 height1");
  });

  it("Generates sql query from json object", function() {
    expect(generateQuery(input)).toEqual('SELECT * FROM Cats WHERE region = "Canada" AND catBreed = "British Shorthair" AND age IS NOT NULL AND age < 1' +
                      ' AND weight IS NOT NULL AND weight <= 2 AND gender = "Male" AND height >= 1 AND height <= 10');
  });
});
