Serverless Currency Converter – README.md

Aplicación web basada en arquitectura Serverless (FaaS) que permite convertir divisas, consultar tasas en tiempo real y obtener un historial de conversiones simulado. Este proyecto integra AWS Lambda, API Gateway, EC2 y Serverless Framework.

📌 1. Descripción de la Aplicación

Serverless Currency Converter es una aplicación web (SPA) que permite:

🔁 Convertir divisas entre USD, EUR y COP

🌐 Consultar tasas de cambio desde una API externa

📚 Visualizar un historial de conversiones (simulado)

⚙️ Backend completamente sin servidor usando AWS Lambda + API Gateway

☁️ Frontend desplegado en una instancia EC2 de AWS

La aplicación fue creada para demostrar integración completa entre frontend y backend en la nube usando arquitectura Serverless.

🛠️ 2. Tecnologías Utilizadas
Backend (Actividad 8 y 9)

AWS Lambda (Node.js)

API Gateway (REST API)

Serverless Framework

Axios (consultar API externa)

Frontend

HTML

CSS

JavaScript

Fetch API

Despliegue

AWS EC2 (Ubuntu Server)

NGINX / Apache (según preferencia)

GitHub para repositorio

🌎 3. URLs de la Aplicación
Frontend — EC2 (pública)
http://<tu-ip-ec2>/index.html
Backend — API Gateway (Lambda)
https://<tu-api-id>.execute-api.<region>.amazonaws.com/dev


Endpoints Principales

GET /rates → Obtener tasas de cambio

POST /convert → Convertir divisas

GET /history → Historial simulado

📦 4. Funcionalidades Implementadas
✅ 1. Listar información

Mostrar tasas de cambio

Mostrar historial de conversiones

✅ 2. Crear registros

Registrar cada conversión realizada

✅ 3. Editar registros

(En este caso, no aplica porque el historial es simulado)

✅ 4. Eliminar registros

(Si agregaste opción de limpiar historial)

✅ 5. Manejo de errores

Sin conexión a API

Formato inválido

Respuestas lentas

Validación de campos

🏗️ 5. Arquitectura del Proyecto

serverless-currency-converter/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── .env.example
Backend:
backend/
├── handler.js
├── serverless.yml
└── package.json

6. Instalación y Ejecución Local

 git clone https://github.com/nfcontreras/serverless-currency-converter

 2. Configurar variables de entorno
    Editar .env.example → .env
    API_URL=https://<tu-api-gateway>/dev
3. Abrir el frontend

Solo abre index.html en tu navegador.

☁️ 7. Despliegue en AWS EC2 (Frontend)
1. Crear una instancia EC2 (Ubuntu 22.04)

Tipo: t2.micro (Free Tier)

Grupo de seguridad: abrir puerto 80 y 22

2. Instalar servidor web

   sudo apt update
sudo apt install nginx -y

3. Subir tu proyecto

   sudo mv serverless-currency-converter/* /var/www/html/

4. Confirmar acceso

Ir a:
http://<ip-ec2>

⚙️ 8. Despliegue en AWS Lambda + API Gateway
1. Instalar Serverless Framework
npm install -g serverless

2. Configurar credenciales AWS
serverless config credentials --provider aws --key TU_KEY --secret TU_SECRET

3. Desplegar
serverless deploy

4. Copiar URL generada de la API

Pegarla en tu app.js.

11. Conclusiones Finales

La arquitectura Serverless reduce costos y simplifica la gestión del backend.

Separar frontend (EC2) y backend (Lambda) mejora la escalabilidad.

API Gateway actúa como un intermediario seguro y manejable para las funciones Lambda.

El uso de una SPA facilita el consumo de APIs y una experiencia fluida.

El despliegue con Serverless Framework acelera el desarrollo en la nube.

Las APIs externas permiten enriquecer aplicaciones sin infraestructura propia.

Las conversiones y tasas se procesan en tiempo real gracias a Lambda.

El uso de Fetch API hace el frontend modular y fácil de mantener.

EC2 es ideal como hosting simple para aplicaciones estáticas.

El proyecto demuestra integración completa entre servicios cloud modernos.











