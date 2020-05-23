Demo Interface Application
=======

This demo application creates a dokerised container which can be deployed in a Kubernetes cluster and handles messages from devices.
For the purpose of the demo, a ui has been added to produce a visualisation of the data, and a trigger which can be used to generate data (they will be the same values, but a randomiser can be added to add some variety...).

Prerequisites
Node Red (https://nodered.org/docs/getting-started/local)

Node.js  (https://nodejs.org/en/about/releases/)

Docker   (https://www.docker.com/products/docker-desktop)

How to use:

Copy the files in a folder and run:

<b>node-red</b>

to start Node Red. This will create an instance running on localhost:1880.
The flows can be edited and committed by clicking on the "deploy" button.
To finish the flows, enter CTRL+C and Y

To run the instance in Docker, run the following:

<b>docker build -t demo:v1 . </b>              

(do not forget the dot at the end)

<b>docker run -it -p 1880:1880 demo:v1 </b>

This will create a container with an image of the application which will run on localhost:1880. 
Please note that, any changes done while running as a Docker image will not persist. The changes are stored locally within the image and only persist while the image is running.

Docker Dashboard can provide running information and the option to stop, start of delete this instance.


### About

IotWorx. 
