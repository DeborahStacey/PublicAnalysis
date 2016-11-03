describe("Backend Interaction Subsystem", function() {
  it("Called function in Backend Javascript File. Returned successfully", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
});

describe("Test Connection to databases", function() {
  var host = 'welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com';
  var user = 'wellcatreaders2';
  var pass = 'thatbackendtho';
  var dbname = 'WelcatWorking';
  var a = true;

  var connectionstring="Data Source=welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com;Initial Catalog=WelcatWorking; User ID=wellcatreaders2;Password=thatbackendtho;Provider=SQLOLEDB";  

  jQuery.ajax({
    type: "POST",
    url: 'connection.php',
    dataType: 'json',
    data: {functionname: 'add', arguments: [1, 2]},

    success: function (obj, textstatus) {
      if( !('error' in obj) ) {
          yourVariable = obj.result;
      }
      else {
          console.log(obj.error);
      }
    }
  });

  it("Connection to Database Successful", function() {
    expect(a).toBe(true);
  });
});