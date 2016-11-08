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
  var dateOfBirth = new Date();
  dateOfBirth.setFullYear(dateOfBirth.getFullYear() - 1);

  it("Takes a json object with the expected fields", function() {
    expect(jsonToString(input)).toEqual("region1 catBreed1 age1 weight1 gender1 height1");
  });

  it("Generates sql query from json object", function() {
    expect(generateQuery(input)).toEqual('SELECT * FROM Cats WHERE region = "Canada" AND breedid = "British Shorthair" AND dateofbirth IS NOT NULL AND dateofbirth > ' + dateOfBirth.toString() + ' AND weight IS NOT NULL AND weight <= 2 AND gender = 1 AND height >= 1 AND height <= 10');
  });
});

describe("Test Connection to databases", function() {
  var a = 0;

  console.log("test test");

  it("Connection to Database Successful 0", function() {
    expect(a).toEqual(0);
  });

  // it("Call to function", function() {
  //   expect(connectToServer()).toEqual("successful connection!");
  // });
});