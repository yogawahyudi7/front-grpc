// client.js
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = 'proto/example.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const greeterProto = grpc.loadPackageDefinition(packageDefinition).example;

const client = new greeterProto.Greeter('localhost:50051', grpc.credentials.createInsecure());

const say = {
    "name": "nodeJS",
};

client.SayHello(say, (err, response) => {
    if (!err) {
        console.log(`Result: ${response.greeting}`);
    } else {
        console.error(err);
    }
});