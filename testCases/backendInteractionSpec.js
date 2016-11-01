describe("Test Connection to databases", function() {
  var host = 'welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com';
  var user = 'wellcatreaders2';
  var pass = 'thatbackendtho';
  var dbname = 'WelcatWorking';
  var a = true;

  var connection = new ActiveXObject("ADODB.Connection") ;
  var connectionstring="Data Source=welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com;Initial Catalog=WelcatWorking;
     User ID=wellcatreaders2;Password=thatbackendtho;Provider=SQLOLEDB";  


  it("Connection to Database Successful", function() {
    expect(a).toBe(true);
  });
});