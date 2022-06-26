# <a href=""https://resplendent-rugelach-4e647e.netlify.app/PhoneBook> PhoneBook</a> 
### This is the backend of the phonebook web app that uses NodeJs and MongoDB.

## API Documentation
### 1.Contact

Handles adding contact, updating, deleting,etc.

| Method | Endpoint | Description | Parameter |
| ------ | -------- | ----------- | --------- |
| POST | `/contact` | Creates New Contact | `First Name`, `Last Name` & `Mobile Number` are **required** fields<br />To be sent as a JSON request body |
| GET | `/contact` | Get All Available Contacts | 
| PATCH | `/contact` | Update Contact Details | <br />`First Name`, `Last Name` & `Mobile Number` are allowed updates<br />To be sent as a JSON request body |
| DELETE | `/contact/:id` | Delete Contact | `Id needed` header field **required** |
