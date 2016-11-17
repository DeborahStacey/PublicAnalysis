#!/usr/bin/python
import psycopg2
import sys
import json

jsonInfo = json.load(sys.stdin).iteritems()

print jsonInfo[]

for row in jsonInfo:
	print row[0]

#print jsonInfo
#'{"interface":[{"region": "region1", "catBreed": "catBreed1", "age": "age1", "weight": "weight1", "gender": "gender1", "height": "height1"}] }'