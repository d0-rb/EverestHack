import boto3
import json
from decimal import Decimal

dynamo = boto3.resource('dynamodb')
table = dynamo.Table('EverestHackUsers')


def default(obj):  # required when json.dumping dynamodb objects into string
    if isinstance(obj, Decimal):
        return str(obj)
    elif isinstance(obj, set):
        return list(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)


def lambda_handler(event, context):  # method to make it easy to add a recipe to a user in user data database
    account = table.get_item(Key={"username": event["pathParameters"]["username"]})

    returnBody = {
        'statusCode': '200',
        'body': json.dumps({
            "Success": False,
            "Error": "Username does not exist"
        }),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    if "Item" not in account:  # if user info does not exist
        return returnBody

    response = table.update_item(  # adds list from request body to username's recipe string set
        Key={"username": event["pathParameters"]["username"]},
        UpdateExpression="add recipes :r",
        ExpressionAttributeValues={":r": set(json.loads(event["body"]))},
        ReturnValues="UPDATED_NEW"
    )

    returnBody["body"] = json.dumps({
        "Success": True,
        "Item": response,
        "Error": ""
    }, default=default)

    return returnBody
