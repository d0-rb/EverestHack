import boto3
import json
from decimal import Decimal

dynamo = boto3.resource('dynamodb')
table = dynamo.Table('EverestHackUsers')


def default(obj):  # required when json.dumping dynamodb objects into string
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)


def lambda_handler(event, context):  # creates user data entry into dynamodb database, to be called when user first signs in (with authentication token)
    body = json.loads(event["body"])
    account = table.get_item(Key={"username": body["username"]})  # checks to see if account already exists

    returnBody = {
        'statusCode': '200',
        'body': json.dumps({
            "Success": False,
            "Error": "Username exists already"
        }),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    if "Item" in account:  # if account already exists
        return returnBody

    account = {"Item": body}
    account["Item"]["recipes"] = set(["-1"])  # dummy recipe because dynamodb storage requires each string set to have at least one item in it

    response = table.put_item(**account)

    body["statusCode"] = str(response["ResponseMetadata"]["HTTPStatusCode"])

    if response["ResponseMetadata"]["HTTPStatusCode"] == 200:
        returnBody["body"] = json.dumps({
            "Success": True,
            "Error": ""
        })

    return returnBody
