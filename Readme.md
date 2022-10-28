# NEWSLETTER 
A fully working newsletter to deliver all the news realted to Entrepreneurship. 

# Backend
1. A Nodejs, MongoDB server to assist the frontend. 
2. Schemas will be decided one by one.

## Setting up development Environment
1. Clone the backend branch
2. Make a .env fie
3. Copy the contents of .env.example into .env
![image](https://user-images.githubusercontent.com/90756795/198529608-ad2966b0-6a14-445f-b602-3c20b0d733ea.png)
4. Replace the value of DBURI with the URI to your Atlas Server
5. Replace SENDERMAIL with a temporary **GMAIL** address that you may use for sending otp
6. Replace SENDERPASS with an Application Password (a. [Reference](https://support.google.com/accounts/answer/185833?hl=en#zippy=%2Cwhy-you-may-need-an-app-password)
                                                    b. [Get my App Password](https://myaccount.google.com/apppasswords))
7. Now continue setting up as you would setup and start a conventional node app.
 * run npm i
 * run npm start or nodemon
8. For initial Signup request
```
> curl -X POST -d @"json_tester\newsletter_harsh.json" -H "Content-Type: application/json"  http://localhost:3000/
```
Here my JSON file contains;
```
{"name":"User Name",
"email":"example@example.com"}//After sending this request you will get a 4 digit otp on this mail
```
9.To verify OTP
```
curl -X POST -d @"json_tester\verify_harsh.json" -H "Content-Type: application/json"  http://localhost:3000/verify
```
Here JSON contains
```
{"otp":"9176",        //The OTP you receive
"email":"example@example.com"}
```
