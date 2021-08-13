# Social Board App
http://34.236.140.196/register

## Introduction 
Our social board app is a full stack developed application that has user features which enables defining social media activies. This final project uses AWS lightsail for building, deploying, and managing our social app board for our client interactions. We explore learning AWS lightsail features of launching containers, database, load balancing, and virtual machines instances for launching our application. 

## Features 
1. Registration
2. Login/Logout
3. Posting on homepage
4. Viewing other user's post on hompage
5. Veiwing other user's profile and their post

## System Architecture
![iamge info](https://i.imgur.com/UGzz6ZN.png)

## Deployment
1. Sign In to the AWS Console.
2. Create a AWS Lightsail instance using the MEAN blueprint.
3. Create a MySQL Database and obtain the endpoint url, master-user, and master-password.
4. Clone the repository into the AWS Lightsail instance.
5. Create a .env file in the following structure and place it in the server folder

DB_HOST=HOSTNAME

DB_PORT=PORT
DB_USER=USER
DB_PASS=PASSWORD

6. update index.js in the server folder on line 15 to include database name.
7. Create the following database tables

Posts 
![image](https://user-images.githubusercontent.com/38090957/129287971-30fa88fe-f729-487a-9fe4-6ed05a70d9bd.png)

Users Table
![image](https://user-images.githubusercontent.com/38090957/129287986-364482a7-e535-4a12-a548-ee757a3a8638.png)

8. Create a static IP for the AWS Lightsail instance.
9. Update the server endpoint ip in the front-end files to the static ip.

10. Navigate to client/src/pages and change the ip on the following files and line numbers
    1. Home.js Lines 22, 28 
    2. Login.js Lines 18
    3. Profile.js Lines 29,36
    4. Register.js Lines 19

11. Build the file by navigating to the client folder and running "yarn build"
12. Navigate to /opt/bitnami/apache/conf/bitnami and edit the file bitnami.conf
13. Change the DocumentRoot and Directory to point to your build folder path.
14. Reset apache by running sudo /opt/bitnami/ctlscript.sh restart apache
15. Navigate to the server folder and run "node index.js"

## Demo Video
https://youtu.be/SAz4ugd1CcM

## Reference 
https://docs.aws.amazon.com/lightsail/

## Team Members
Matthew Stepnowski (stepnowskim@wit.edu), Team Leader, Backend & Frontend Dev

Tino Cheung (cheungt@wit.edu), Technical Documentor, Tester
