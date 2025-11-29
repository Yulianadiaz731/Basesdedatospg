# 🌍 **Serverless Currency Converter**
Aplicación web basada en arquitectura **Serverless (FaaS)** que permite convertir divisas, consultar tasas de cambio en tiempo real y visualizar un historial simulado.  
Este proyecto integra **AWS Lambda**, **API Gateway**, **Serverless Framework**, **Axios**, **EC2**, y un frontend estático.

---

## 📘 **1. Descripción del Proyecto**
**Serverless Currency Converter** es una aplicación web (SPA) que permite:

- 🔁 Convertir divisas entre **USD**, **EUR**, **COP**  
- 🌐 Obtener tasas de cambio desde una **API externa**  
- 📚 Visualizar un **historial simulado** de conversiones  
- ⚙️ Backend completamente **serverless (AWS Lambda + API Gateway)**  
- ☁️ Frontend desplegado en **AWS EC2**

---

## 🛠️ **2. Tecnologías Utilizadas**

### 🖥️ Backend (Serverless)
- AWS Lambda (Node.js)
- AWS API Gateway (REST)
- Serverless Framework
- Axios

### 🎨 Frontend
- HTML, CSS, JavaScript
- Fetch API

### ☁️ Despliegue
- AWS EC2 (Ubuntu)
- NGINX o Apache
- GitHub

---

## 🌎 **3. URLs de la Aplicación**

| Componente | URL |
|-----------|------|
| **Frontend — EC2 (pública)** | `http://<tu-ip-ec2>/index.html` |
| **Backend — API Gateway** | `https://<tu-api-id>.execute-api.<region>.amazonaws.com/dev` |

### 🔌 Endpoints Principales
| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| **GET** | `/rates` | Obtener tasas de cambio |
| **POST** | `/convert` | Convertir divisas |
| **GET** | `/history` | Historial simulado |

---

## 📦 **4. Funcionalidades Implementadas**
- ✅ Listar tasas de cambio  
- ✅ Mostrar historial de conversiones  
- ✅ Registrar conversiones realizadas  
- ❌ Editar registros (no aplica: historial simulado)  
- ⚠️ Manejo de errores: API externa caída, validaciones, formatos inválidos  

---

## 🏗️ **5. Arquitectura del Proyecto**

serverless-currency-converter/
├── README.md
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── app.js
└── .env.example

backend/
├── handler.js
├── serverless.yml
└── package.json


---

## 🧪 **6. Instalación y Ejecución Local**

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/nfcontreras/serverless-currency-converter


Editar:
API_URL=https://<tu-api-gateway>/dev

3️⃣ Abrir el frontend

Abrir index.html en tu navegador.

☁️ 7. Despliegue del Frontend en AWS EC2
1️⃣ Crear instancia EC2 (Ubuntu 22.04)

Tipo: t2.micro (Free Tier)

Abrir puertos 80 y 22

2️⃣ Instalar NGINX

sudo apt update
sudo apt install nginx -y

3️⃣ Subir proyecto

sudo mv serverless-currency-converter/* /var/www/html/

4️⃣ Acceder
http://<ip-ec2>
⚙️ 8. Despliegue Backend (AWS Lambda + API Gateway)
1️⃣ Instalar Serverless Framework
npm install -g serverless

2️⃣ Configurar credenciales AWS
serverless config credentials --provider aws --key TU_KEY --secret TU_SECRET

3️⃣ Desplegar
serverless deploy

4️⃣ Configurar URL en frontend
const API_URL = "https://<tu-api>.execute-api.<region>.amazonaws.com/dev";

11. Conclusiones

La arquitectura Serverless reduce costos y simplifica el backend.

Separar frontend en EC2 y backend en Lambda mejora escalabilidad.

API Gateway actúa como una capa segura entre cliente y backend.

SPA facilita el consumo de APIs en tiempo real.

Serverless Framework acelera despliegues y buenas prácticas.

EC2 es ideal para alojar frontends estáticos.

El proyecto demuestra integración completa entre servicios cloud modernos.













