# Backend
Backend functionality was achieved using AWS serverless architecture. The API was created with AWS API gateway and the request handlers are AWS Lambda functions. We use AWS S3 for storage and DynamoDB for NoSQL database functionality. We integrated AWS Cognito through AWS Amplify in our app to handle authorization, so all we have to do is pass a token in request headers to the API to authorize. This is the code for the AWS Lambda functions which take requests from the API gateway and communicate with the DynamoDB database to provide easy database read and write functionality to the frontend.