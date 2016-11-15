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
print "Connecting to database\n ->%s" % (conn_string)
 
try:
    # get a connection, if a connect cannot be made an exception will be raised here
    conn = psycopg2.connect(conn_string)
    # conn.cursor will return a cursor object, you can use this cursor to perform queries
    cursor = conn.cursor()
    print "Connected!\n"

    cursor.execute("SELECT * FROM COUNTRY;")

    rows = cursor.fetchall()
    print "\nRows:"
    for row in rows:
        print "   ", row[1]


except:
    # Get the most recent exception
    exceptionType, exceptionValue, exceptionTraceback = sys.exc_info()
    # Exit the script and print an error telling what happened.
    sys.exit("Database connection failed!\n ->%s" % (exceptionValue))



#psql --host=welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com --port=5432 --username=wellcatreaders2 --password --dbname=WelcatWorking