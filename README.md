# compile-code-docker
A ExpressJS web server to compile code inside a docker container.

This app makes use of the 'compile-code' module. If you dont want to setup a local docker environment, and use the module directly in your project, visit [here](https://github.com/Rex1911/compile-code)

With just a few commands, you can setup a ExpressJS server to which you can send your code and it will compile and return the output to you.

# Prerequisite
- [Docker](https://www.docker.com/)

# Setup the server
Firstly make sure you have docker on your machine. Run the command 

```
docker --version
```

If you dont have docker, please install it on your machine.

You need to clone this repo. Use the following command
```
git clone https://github.com/Rex1911/compile-code-docker.git
```

Next, you will need the ```compile-code-base``` image which has the NodeJS environment and all the compilers necessary. 

Run the following command to get the base image.
```
docker pull rex1911/compile-code-base
``` 

Run the following command to check if image is properly downloaded.
```
docker images
```

You should see the ```compile-code-base``` image

Next, navigate into the cloned repo. One inside the folder, run the following command
```
docker build -t compile-code .
```

This will create a new image named ```compile-code```. 

Now, we need to create a container for the image. Run the following command
```
docker run -p 8080:3000 -d --name compile-code compile-code
```

This will create a container and run our ExpressJS server on the port 8080. 

At this point, you can visit ```http://localhost:8080/``` and see the frontend. 

The server is up and running now. You can send your code to the server and it will compile and send the output back. Check the API Documentation below to see where to send the code.

If you want to stop the server. Run this
```
docker stop compile-code
```

If you want to start the server again, run
```
docker start compile-code
```

# API Documentation
The API exposes only one route

- **/compile** (Method: POST)
  - This POST request endpoint is where you send your code to get compiled. 
  The body should contain the following attributes:
  
    | Name | Type | Description |
    |------|------|-------------|
    | code | int/String | The code of the language you want to compile. Find the code below in the 'Language codes' section |
    | source | String | The source code which you want to compile |
    | input | String | The input of the code. Send a blank string ("") if there is no input |
    
  - The response is a object which contains two keys
    - stdout: Contains the output. Empty if there is a error.
    - stderr: Contains the error message if there are any
    
# Language Codes
| Language | Code |
|----------|------|
| C        | 1    |
| C++      | 2    |
| Python3  | 3    |
| Java     | 4    |
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
