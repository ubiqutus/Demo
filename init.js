var http = require('http');
var express = require("express");
var RED = require("node-red");

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use("/doc",express.static("public"));

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    uiPort: 1880,
    uiHost: "::",
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    flowFile: 'flow.json',
/*
    credentialSecret: process.env.MY_CREDENTIAL_SECRET || "Demo",
    adminAuth: {
        type: "credentials",
        users: [ {
				username: "admin",
				password: "$2a$08$QKicmL/r1Jfzb7A66KJXZuiUg8xVo5uAVRztfKBHVCTvsYfE06mxi",		// !0yst@5p
				permissions: "*"
			} ]
	},
    httpNodeAuth: { user: "admin", pass: "$2a$08$QKicmL/r1Jfzb7A66KJXZuiUg8xVo5uAVRztfKBHVCTvsYfE06mxi"},		// !0yst@5p
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
*/
    httpAdminRoot:"/",
    httpNodeRoot: "/api",
    userDir:"/home/nol/.nodered/",
    functionGlobalContext: { }    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server, settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(settings.uiPort);

// Start the runtime
RED.start();