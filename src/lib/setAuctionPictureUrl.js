import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function setAuctionPictureURL(id , pictureURL) {
  const params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    Key: { id },
    UpdateExpression: 'set pictureURL = :pictureURL',
    ExpressionAttributeValues: {
      ':pictureURL': pictureURL,
    },
    ReturnValues: 'ALL_NEW'
  }

  const result = await dynamodb.update(params).promise();
  return result.Attributes;
}