 ## Backend project

1.  ```npm init```

2. install nodemon (dev dependence)```npm i -D nodemon```
3. install prettier             ```npm i -D prettier```
4. install packages ```npm i mongoose express dotenv```
5. install cookie parser and CORS ```npm i cookie-parser cors```
6. install ``` npm i mongoose-aggregate-paginate-v2```

// while connecting wrap it in try and catch, and always add async await

### we have taken modular approach here,
1. 1st create public folder inside its there is another folder temp and its containing one folder so just we can push it to the github ,

2. next we create another folder ```src folder``` and inside the src folder we have created multiple folders names are :
3. ```controllers```: here we will write our controller code. 
4. ```db```: here we will write the connection code to he database,
5. ```middlewares```: 
6. ```models``` : here we will write the schemas models of the services.
7. ```routes``` : this folder for the routers
8. ```utils``` : 

9. and beside this folders we will create 3 files ```app.js```, ```constants.js```,```indes.js```

10. we are going for the moduler approach so the code become very reusabe and clear to all.
11. here ```index.js``` is the main file . so we will create different working functions inside different folders and will merge it or call the function in the ```index.js ``` folder.

## sometime a problem occurs of the extension whenever you import and file make sure the extension is attached to it , sometime it causes  bug in the code.

## always remember one thing you server is in another continent. so always use ```async await ``` function. and wrap it up inside ```try catch ``` .


## 1.  Database connection

```
1. we are using MongoDB


```