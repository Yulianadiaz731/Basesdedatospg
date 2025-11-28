# Proyecto Serverless con AWS Lambda + API Gateway + PostgreSQL

Este proyecto implementa una arquitectura serverless utilizando AWS Lambda como backend, API Gateway como capa de exposición REST y PostgreSQL como base de datos administrada desde pgAdmin. El código está desarrollado en Visual Studio Code y preparado para su despliegue en AWS.

## 📁 Estructura del Proyecto

```
serverless-app/
├── README.md
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
├── backend/
│   ├── functions/
│   │   ├── function1/
│   │   │   ├── main.py
│   │   │   └── requirements.txt
│   │   ├── function2/
│   │   │   ├── main.py
│   │   │   └── requirements.txt
│   │   └── function3/
│   │       ├── main.py
│   │       └── requirements.txt
│   └── serverless.yaml
├── database/
│   ├── schema.sql
│   ├── connection_test.py
│   └── queries.md
├── docs/
│   ├── api-documentation.md
│   ├── architecture.md
│   └── screenshots/
└── tests/
    └── function-tests.py
```

## 🚀 Descripción General

La aplicación utiliza un frontend HTML/JS que consume una API REST creada con API Gateway.  
Las funciones Lambda procesan la lógica y se conectan a PostgreSQL.  
Esta arquitectura permite un sistema escalable, económico y administrado por AWS sin servidores físicos.

## 🏗️ Arquitectura

```
Frontend (HTML/JS)
        │
        ▼
API Gateway
        │
        ▼
AWS Lambda (Python)
        │
        ▼
AWS RDS PostgreSQL
```

## ⚙️ Instalación local

```
git clone <repo>
cd <repo>
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## 🚀 Despliegue en AWS

```
aws configure
zip -r function1.zip .
aws lambda create-function ...
aws lambda update-function-code ...
```

## 👩‍💻 Autor

Yuliana Vargas
