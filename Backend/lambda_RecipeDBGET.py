import boto3
import json
from boto3.dynamodb.conditions import Key
from decimal import Decimal

dynamo = boto3.resource('dynamodb')
table = dynamo.Table('EverestHackRecipes')


def default(obj):  # required when json.dumping dynamodb objects into string
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)


def lambda_handler(event, context):  # returns a query from the dynamodb user data database based on parameters passed in query string
    if event["multiValueQueryStringParameters"] is None:  # if there are no parameters, return the whole table
        response = table.scan()["Items"]
    else:
        if "id" in event["multiValueQueryStringParameters"]:  # if id (which is primary key) is passed, just do a get_item for that particular item
            response = [table.get_item(Key={"id": event["multiValueQueryStringParameters"]["id"][0]})["Item"]]
        else:
            first = True
            filter = None
            for attr in event["multiValueQueryStringParameters"]:  # iterates through each passed parameter to use as a filter
                if first:
                    filter = Key(attr).eq(event["multiValueQueryStringParameters"][attr][0])  # starts filter expression
                    first = False
                else:
                    filter = filter & Key(attr).eq(event["multiValueQueryStringParameters"][attr][0])  # appends to the filter expression
            response = table.scan(
                FilterExpression=filter
            )["Items"]  # scans with filter created from parameters. e.g. halal=true&vegan=false will return all recipes with halal as true and vegan as false
    return {
        'statusCode': '200',
        'body': json.dumps(response, default=default),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }
