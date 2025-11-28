# Proyecto Serverless con AWS Lambda + API Gateway + PostgreSQL (JavaScript)

Este proyecto implementa una arquitectura **serverless** utilizando **AWS Lambda con JavaScript (Node.js)** como backend, **API Gateway** para exponer endpoints REST y **PostgreSQL** como base de datos administrada desde **pgAdmin**.  
El desarrollo se realizó en **Visual Studio Code** y está preparado para funcionamiento en AWS.

---

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
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── function2/
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   └── function3/
│   │       ├── index.js
│   │       └── package.json
│   └── serverless.yaml   # Configuración para despliegue automatizado (opcional)
├── database/
│   ├── schema.sql
│   ├── connection_test.js
│   └── queries.md
├── docs/
│   ├── api-documentation.md
│   ├── architecture.md
│   └── screenshots/
└── tests/
    └── function-tests.js
```

---

## 🚀 Descripción General

La aplicación cuenta con:

- Frontend en **HTML, CSS y JavaScript**
- Backend serverless con **AWS Lambda en Node.js**
- API REST administrada con **API Gateway**
- Base de datos **PostgreSQL**
- Administración vía **pgAdmin**
- Conexión segura usando variables de entorno

La arquitectura es completamente escalable y de pago por uso.

---

## 🏗️ Arquitectura del Sistema

```
Frontend (HTML/JS)
        │
        ▼
API Gateway (REST)
        │
        ▼
AWS Lambda (Node.js)
        │
        ▼
AWS RDS PostgreSQL
```

---

## 🧩 Funciones Lambda (Node.js)

Cada función Lambda está desarrollada en **JavaScript**, por ejemplo:

### 📌 Ejemplo de index.js

```js
const { Client } = require('pg');

exports.handler = async (event) => {
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 5432
    });

    await client.connect();

    const result = await client.query('SELECT * FROM tabla_ejemplo');

    await client.end();

    return {
        statusCode: 200,
        body: JSON.stringify(result.rows)
    };
};
```

### 📌 package.json

```json
{
  "name": "lambda-function",
  "version": "1.0.0",
  "dependencies": {
    "pg": "^8.11.1"
  }
}
```

---

## 🛢️ Base de Datos (PostgreSQL + pgAdmin)

Archivos incluidos:

| Archivo | Propósito |
|--------|-----------|
| `schema.sql` | Estructura de tablas |
| `connection_test.js` | Script para probar conexión desde Node.js |
| `queries.md` | Documentación de consultas SQL |

### Variables de entorno para Lambda:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=5432
```

---

## ⚙️ Configuración e Instalación Local

### 1️⃣ Clonar el proyecto

```bash
git clone <tu-repo>
cd tu-repo
```

### 2️⃣ Instalar dependencias de funciones Lambda

```bash
cd backend/functions/function1
npm install
```

### 3️⃣ Probar conexión a PostgreSQL

```bash
node database/connection_test.js
```

---

## 🚀 Despliegue en AWS

### 1️⃣ Configurar AWS CLI

```bash
aws configure
```

### 2️⃣ Empaquetar una función Lambda

```bash
zip -r function1.zip .
```

### 3️⃣ Crear función Lambda

```bash
aws lambda create-function   --function-name createRecord   --runtime nodejs18.x   --handler index.handler   --role arn:aws:iam::<ID-ACCOUNT>:role/lambda-role   --zip-file fileb://function1.zip
```

### 4️⃣ Conectar Lambda a API Gateway
- Crear API REST  
- Crear endpoints  
- Conectar métodos con Lambda  
- Activar CORS  
- Deploy en `/prod`

---

## 🌐 Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/records` | Obtiene registros |
| POST | `/create` | Inserta registro |
| DELETE | `/delete/{id}` | Elimina registro |

---

## 🧪 Pruebas

```bash
npm test
```

---

## 🖼️ Capturas de Pantalla

Se encuentran en:

```
/docs/screenshots/
```

---

## ✔️ Ventajas del Modelo Serverless

- No requiere servidores
- Ultra escalable
- Pago por uso
- Integración nativa con AWS
- Bajo mantenimiento

---

## 👩‍💻 Autor

**Yuliana Vargas**  
Visual Studio Code · AWS · Node.js · PostgreSQL

