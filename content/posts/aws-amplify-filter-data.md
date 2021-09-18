---
title: 'AWS amplify filter data '
date: 2021-08-29T02:14:29.916Z
description: Aws amplify filter data from database
author: Gurusabarish
image: /images/uploads/aws.png
tags:
  - aws
slug: /amplify-admin-filter-data
---

In this article, we are going to discuss about the frontend react queries to fetch the data from database using amplify and graphql.

- create graphql api to interact with database. Follow this [official docs](https://docs.amplify.aws/start/getting-started/data-model/q/integration/react/#create-a-graphql-api-and-database)

### Filter by equal data

```js
const data = await API.graphql(
  graphqlOperation(
    queries.listTodos(
      (filter: {
        field: {
          eq: 'string',
        },
      }),
    ),
  ),
);

console.log(data);
```

### Filter by or and equal data

```js
const data = await API.graphql(
  graphqlOperation(
    queries.listTodos(
      (filter: {
        or: [
          {
            id: { eq: 1 },
          },
          {
            id: { eq: 2 },
          },
        ],
      }),
    ),
  ),
);
```

#### Keywords

- aws amlpify frontend qurey to filter data
- Filter data by specific value in aws amplify.
