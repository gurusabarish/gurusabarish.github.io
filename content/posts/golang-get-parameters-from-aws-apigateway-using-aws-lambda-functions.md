---
title: GOLANG get parameters from aws APIGateway using aws lambda functions
date: 2021-06-05T23:21:42.272Z
image: '/images/uploads/aws.png'
description: GOLANG get parameters from aws APIGateway using aws lambda functions
author: 'Gurusabarish'
tags: ['AWS']
categories: ['Web development']
draft: false
slug: /golang-get-parameters-from-aws-APIGateway-using-aws-lambda-functions
---

> Before, move to titorial please, setup your aws lambda and aws APIDateway. Let's start,

- Create main.go file and paste the below code.

```go
package main

import (
	"encoding/json"
	"errors"
	"log"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type MyResponse struct {
	Name string `json:"name:"`
	Firstname string `json:"firstname:"`
	Lastname string `json:"lastname:"`
}

func HandleRequest(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	if request.HTTPMethod == "GET" {
		firstname := request.QueryStringParameters["firstname"]
		lastname := request.QueryStringParameters["lastname"]
		Name := firstname + lastname

		Response := MyResponse{Name, firstname, lastname}
		var jsonData []byte
		jsonData, err := json.Marshal(Response)
		if err != nil {
			log.Println(err)
		}

		ApiResponse := events.APIGatewayProxyResponse{Body: string(jsonData), StatusCode: 200}
		return ApiResponse, nil
	} else {
		err := errors.New("Method not allowed")
		ApiResponse := events.APIGatewayProxyResponse{Body: "Method Not OK", StatusCode: 502}
		return ApiResponse, err
	}
}

func main() {
	lambda.Start(HandleRequest)
}
```

- Go mod initialize and get required libraries.

```sh
go mod init main
go get github.com/aws/aws-lambda-go/lambda
go get github.com/aws/aws-lambda-go/events
```

- Build and zip main file for upload to aws lambda. Here, I mentioned the code for windows.

```sh
go build -o main main.go
tar.exe -a -c -f main.zip main
```
