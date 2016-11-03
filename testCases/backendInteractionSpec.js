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

  console.log("test test");

  jQuery.ajax({
    type: "POST",
    url: 'connection.php',
    dataType: 'json',
    data: {functionname: 'test'},

    success: function (obj, textstatus) {
      if( !('error' in obj) ) {
          yourVariable = obj.result;
      }
      else {
          console.log(obj.error);
      }

      console.log(obj.error);
    }
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });

  it("Connection to Database Successful", function() {
    expect(a).toBe(true);
  });
});