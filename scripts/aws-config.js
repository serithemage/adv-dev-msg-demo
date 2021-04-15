var config = {

	"Region" : "ap-northeast-2",

	"Cognito" : {
		"IdentityPoolId": "ap-northeast-2:8579c9d4-9928-47ec-9a83-82994fe2a725"
	},

	"SQS" : {
		"Standard" : {
			"QueueUrl" : "https://sqs.ap-northeast-2.amazonaws.com/330585799223/microservices_drawqueue_1"
		},
		"Secondary" : {
			"QueueUrl" : "https://sqs.ap-northeast-2.amazonaws.com/330585799223/microservices_drawqueue_2"
		},
		"Tertiary" : {
			"QueueUrl" : "https://sqs.ap-northeast-2.amazonaws.com/330585799223/microservices_drawqueue_3"
		},
		"FIFO" : {
			"QueueUrl" : "https://sqs.ap-northeast-2.amazonaws.com/330585799223/microservices_drawqueue.fifo",
			"GroupId" : "microservices_sqs_fifo"
		}
	},

	"SNS" : {
		"TopicARN" : "arn:aws:sns:ap-northeast-2:330585799223:microservicesMessageDuplicator"
	},

	"Kinesis" : {
		"StreamName" 		: "microservicesDrawingData",
		"PartitionKey"	: "Partition1"
	},

	"IoT" : {
		"Endpoint" : "a2vnl9gnlpcaoz-ats.iot.ap-northeast-2.amazonaws.com",
		"Topic" : "microservices/drawingdemo"
	}
}
