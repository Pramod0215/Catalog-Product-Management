# Catalog-Product-Management

Users will be able to create a product. A product has parameters like Brand, Category
and Specifications.
Products can be viewed on a listing page with filters of Brand and Category.

Further explanations and assumptions:

1. Categories have a tree structure - similar to that of Amazon / Flipkart.
2. Each product can have multiple specifications. Specification params - Key, Value &
Unit. Eg. Key - Length, Value: 30 , Unit - cm can be a specification for a scale.
3. Category breadcrumb should be displayed on the product page.
4. Product, Brand and Category names must be unique.

### Prerequisites

You need to install the following packages for backend:

```
asgiref==3.2.3
Django==3.0.1
django-cors-headers==3.2.0
django-jsonfield==1.4.0
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
six==1.13.0
sqlparse==0.3.0
psycopg2==2.7.4

```
### Installation

Clone the repository

```
https://github.com/Pramod0215/Catalog-Product-Management/
```

Setting up your virtual environment:

```
python3 -m venv .env
```

Activating Virtual  Environment

```
source .env/bin/activate
```
Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(Catalogue-management-system/backend/) is and type the following code in your terminal:

```
pip install requirements.txt
```

### Database setup

If all requirements are installed, then Postgres database must be set up as per stated below.

Activating postgres
```
sudo su postgres

```
Get in to postgres shell
```
psql

```
To create a database for our Django project
```
CREATE DATABASE cms;

```
Create a database user which we will use to connect to and interact with the database. Set the password.
```
CREATE USER cmsuser WITH PASSWORD 'pa$$w0rd';

```
Now, all we need to do is give our database user access rights to the database we created
```
GRANT ALL PRIVILEGES ON DATABASE CMSuser TO admin;

```
Before running server make sure all migrations done. To exucute all migration
```
python3 manage.py migrate
python3 manage.py makemigrations

```

## Overall detail
```
Database Name: cabride
Username: cmsuser
Password: pa$$word

```

Then to run the server, go to the directory 'tarzen/Catalog-Product-Management/Backend/cms$' and type the following code in terminal:

```
python3 manage.py runserver
```

For Frontend which is ReactJS,
Dependencies are: 
```
"nodejs":"^v8.10.0",
"npm":"^6.13.4",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",
"react-scripts": "0.9.5"

```

Go to '/Catalog-Produact-system/frontend' and type the following code in the terminal:
```
"sudo apt install nodejs",
"node --version",
"npm install", 
"npm -v",

```
Go to install axios for connect backend to frontend
```
npm install axios
```

Then to run the react server, type the code:
```
npm start
```
![alt Home Page](https://github.com/Pramod0215/Catalog-Product-Management/blob/master/image/Screenshot%20from%202020-01-31%2017-17-25.png)<br>
![alt Product Page](https://github.com/Pramod0215/Catalog-Product-Management/blob/master/image/Screenshot%20from%202020-01-31%2017-17-37.png)<br>
![alt Brand Page](Screenshot from 2020-01-31 17-21-08.png)<br>
![alt Category Page](Screenshot from 2020-01-31 17-21-13.png)
