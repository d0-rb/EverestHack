import boto3
import json
from boto3.dynamodb.conditions import Key
from decimal import Decimal

dynamo = boto3.resource('dynamodb')
table = dynamo.Table('EverestHackUsers')


def default(obj):  # required when json.dumping dynamodb objects into string
    if isinstance(obj, Decimal):
        return str(obj)
    elif isinstance(obj, set):
        return list(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)


def lambda_handler(event, context):  # returns a supplied username's entry from the dynamodb user data database
    body = {
        'statusCode': '200',
        'body': '{\"Error\": \"No username specified\"}',
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }
    if event["multiValueQueryStringParameters"] is None or "username" not in event["multiValueQueryStringParameters"]:
        return body
    else:
        response = table.get_item(Key={"username": event["multiValueQueryStringParameters"]["username"][0]})
        if "Item" in response:
            response["Item"]["recipes"].remove("-1")  # removes dummy variable from recipes list so frontend doesn't have to worry about anything
            body["body"] = json.dumps(response, default=default)
        else:
            body["body"] = '{\"Error\": \"Username does not exist\"}'
    return body
