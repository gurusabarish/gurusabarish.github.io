---
title: 'AWS amplify admin queries CreateUser'
date: 2021-08-13T09:55:33.668Z
image: '/images/uploads/aws.png'
description: Here, We are explained about aws amplify AdminCreateUser and how to
  implement cognito admin create user in react.
author: 'Gurusabarish'
tags: ['AWS', 'Amplify']
categories: ['Web development']
draft: false
slug: /amplify-admin-queries-create-user
---

Amplify does not generate `AdminCreateUser` by default. If you want enable AdminCreateUser query, You should do the following steps.

- Create adminQueries API using amplify. [Follow this docs](https://docs.amplify.aws/cli/auth/admin)
- After successful creation, You can find a folder `amplify\backend\function\AdminQueriesxxxx\src`. We are going to edit some files inside src folder.
- Create a function called CreateUser inside your cognitoActions.js and don't forget to export that function. _Note: Don't delete other functions_

```js
async function CreateUser(username, password, email) {
  var params = {
    UserPoolId: userPoolId /* required */,
    Username: username /* required */,

    DesiredDeliveryMediums: ['EMAIL'],
    // (optional) ForceAliasCreation: true || false,
    MessageAction: 'SUPPRESS',
    TemporaryPassword: password,
    UserAttributes: [
      {
        Name: 'email',
        Value: email,
      },
    ],
  };

  console.log(`Attempting to create user ${username}`);
  try {
    const result = await cognitoIdentityServiceProvider.adminCreateUser(params).promise();
    console.log(`${username} successfully created`); // successful response
    return {
      message: `${username} successfully created`,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  CreateUser,
  // other functions
};
```

- Create an API url in `app.js` and import the createuser function from `cognitoActions.js`.

```js
const {
  CreateUser,
  //other functions
} = require('./cognitoActions');

app.post('/createUser', async (req, res, next) => {
  if (!req.body.username) {
    const err = new Error('username is required');
    err.statusCode = 400;
    return next(err);
  }
  if (!req.body.password) {
    const err = new Error('password is required');
    err.statusCode = 400;
    return next(err);
  }
  if (!req.body.email) {
    const err = new Error('email is required');
    err.statusCode = 400;
    return next(err);
  }

  try {
    const response = await CreateUser(req.body.username, req.body.password, req.body.email);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
});
```

- Add this _"cognito-idp:AdminCreateUser"_ in _Resources.lambdaexecutionpolicy.Properties.PolicyDocument.Statement[1].Action_. The file you should edit,`amplify\backend\function\AdminQueriesc360a2c4\AdminQueriesxxx-cloudformation-template.json`

### Reference and contact

In this article, I am also explained these contents. But, the difference is "We are added the json responce". Catch me on [Twitter](https://twitter.com/gurusabarishh)

- [Github issue](https://github.com/aws-amplify/amplify-cli/issues/4351)
- [AWS documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminCreateUser-property)
