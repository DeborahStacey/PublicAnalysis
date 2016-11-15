#!/usr/bin/python
import psycopg2
import sys
 
host = 'welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com'
dbname = 'WelcatWorking'
user = 'wellcatreaders2'
password = 'thatbackendtho'
port = 5432
 
conn_string = "host='%s' dbname='%s' user='%s' password='%s' port='%i'"\
                % (host, dbname, user, password, port)
 
# print the connection string we will use to connect
print "Connecting to database...\n"
 
try:
    # get a connection, if a connect cannot be made an exception will be raised here
    conn = psycopg2.connect(conn_string)
    # conn.cursor will return a cursor object, you can use this cursor to perform queries
    cursor = conn.cursor()
    print "Connected! running Test query\n"

    cursor.execute("SELECT location.locationname as location, country.countryname, pet.ownerid, pet.name, breed.name as breed, gender.name as gender, pet.microchip, pet.fitcat, pet.dateofbirth, pet.weight, pet.height, pet.length, pet.dateofdeath, pet.reasonfordeath FROM pet left join account on pet.ownerid = account.userid left join address on account.addressid = address.addressid left join location on address.locationid = location.locationid left join country on location.countryid = country.countryid left join breed on pet.breed = breed.breedid left join gender on pet.gender = gender.genderid WHERE country.countryid = 1 AND pet.breed = 1 AND pet.dateofbirth < '2016-12-10' AND pet.dateofbirth > '2014-12-10' AND pet.weight > 1 AND pet.weight < 20 AND pet.gender = 1 AND pet.height > 2 AND pet.height < 10;")

    rows = cursor.fetchall()
    print "\nlocation | countryname | ownerid | name | breed | gender | microchip | fitcat | dateofbirth | weight | height | length | dateofdeath | reasonfordeath"
    print "\nRows:"
    for row in rows:
        print "   ", row


except:
    # Get the most recent exception
    exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
    # Exit the script and print an error telling what happened.
    sys.exit("Database connection failed!\n ->%s" % (exceptionValue))



#psql --host=welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com --port=5432 --username=wellcatreaders2 --password --dbname=WelcatWorking