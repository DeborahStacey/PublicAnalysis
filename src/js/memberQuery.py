#!/usr/bin/python
import psycopg2
import sys
import json

jsonInfo = json.load(sys.stdin)

for row in jsonInfo.iteritems():
        print row

print jsonInfo