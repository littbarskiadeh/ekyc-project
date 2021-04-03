# eKYC Application for Financial Industry

## Project Description
eKYC is an HyperLedger based application which is used by financial institutions to share the KYC details of all the customers. This eKYC is an application which allows any user to apply to open a new account with a financial institution registered with it. The data is stored in a shared Ledger which runs in all the financial institutions running the platform. The shared platform is built with HyperLedger Fabric.
The system uses only the SIN as the identity for each user since SIN is unique. The system makes sure that the name and date of birth matches with the records – if there is any mismatch in these, the application is rejected for security reasons. If there is a mismatch with the address, the address is updated in the ledger.

## Team Members
* Elanie Quiambao 
* Littbarski Adeh
* Nidusha Hewawilladdara
* Pradeep Kumar Prakasam

## Process Flow
•	Users wishing to open a new account must enter their personal details such as Name, Date of Birth, Address and SIN in a website.<br/>
•	The data submitted by the user is temporarily saved in a cloud DB (MongoDB). <br/>
•	Admin users from Financial Institution then logs in and checks if the user is registered in the Ledger using their unique SIN. <br/>
•	If the user is found in Ledger, it means that they have already registered before, so the data submitted is verified with data available in ledger.<br/>
•	If all the details match – application is approved.<br/>
•	If there is a mismatch in Name or DOB, it means that either the user has entered the details wrong or someone is trying to steal the identity. Application is rejected.<br/>
•	If there is mismatch in address – address is updated and application is approved.


## State Machine Diagram
![image](https://user-images.githubusercontent.com/45354395/113464786-5d85f080-93fd-11eb-9f30-977387b14a85.png)


## ChainCode Operations
1.	queryUser(ctx, sin) – Only SIN is used for query since each user has an unique SIN
o	User Found - call Verify function
o	User Not Found - call Create New User Function - return result - application approved
2.	verifyUser(ctx, name, dob, address)
o	Retrieve Data from HL
o	Compare HL data with data provided (check all 3 fields)
o	If name and DOB is not correct – return result - application rejected
o	If Address is not correct – call function updateUser – return result – application approved
3.	createNewUser(ctx, name, address, sin, dob, DL no)
4.	updateUser(ctx, sin, name, address, sin, dob, dl no) 


## Organizations
Org 1 – Bank 1
Org 2 – Bank 2

## Scenario
![image](https://user-images.githubusercontent.com/45354395/113464817-89a17180-93fd-11eb-88ea-1ef9146b94c1.png)

## Roles
User – Any user can create account which will be saved to MongoDB
Org 1 Admin – Users from Org 1 who can verify data and approve or reject an application
Org 2 Admin – Users from Org 2 who can verify data and approve or reject an application

## State Machine Diagram
![image](https://user-images.githubusercontent.com/45354395/113464831-a9d13080-93fd-11eb-83eb-7fa2ba6eba12.png)


## Screenshot of Application
![](https://github.com/littbarskiadeh/ekyc-project/blob/main/images/demo.jpg)

### Chaincode - see chaincode folder

### Server code - see backend folder

### Frontend code - see eKyc-front-end folder




# To start Project
```
\\ Clone the repo and run the following commands: \\
cd backend
yarn install
yarn start 

cd eKyc-front-end
yarn install
yarn start
```
