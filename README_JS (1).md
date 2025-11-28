# Aplicación Web de Notas con Arquitectura Serverless (Firebase)

## 1. Descripción del Proyecto
Esta es una aplicación web de notas desarrollada en **JavaScript, HTML y CSS**, utilizando Firebase como backend serverless.  
Los usuarios pueden crear, editar y eliminar notas en tiempo real gracias a Firebase Firestore.

El proyecto implementa una arquitectura **serverless**, eliminando la necesidad de servidores dedicados y permitiendo escalado automático mediante servicios gestionados.

---

## 2. Objetivos

### Objetivo General
Desarrollar una aplicación web funcional utilizando servicios cloud serverless, demostrando el uso de Firestore y Firebase Hosting.

### Objetivos Específicos
- Implementar un frontend funcional con HTML, CSS y JavaScript.  
- Utilizar Firebase para almacenamiento serverless (Firestore).  
- Conectar el frontend con la base de datos en tiempo real.  
- Desplegar la aplicación en Firebase Hosting.  
- Documentar arquitectura, despliegue y funcionamiento.

---

## 3. Arquitectura Serverless

### Diagrama (Descripción)
# Aplicación Web de Notas con Arquitectura Serverless (Firebase)

## 1. Descripción del Proyecto
Esta es una aplicación web de notas desarrollada en **JavaScript, HTML y CSS**, utilizando Firebase como backend serverless.  
Los usuarios pueden crear, editar y eliminar notas en tiempo real gracias a Firebase Firestore.

El proyecto implementa una arquitectura **serverless**, eliminando la necesidad de servidores dedicados y permitiendo escalado automático mediante servicios gestionados.

---

## 2. Objetivos

### Objetivo General
Desarrollar una aplicación web funcional utilizando servicios cloud serverless, demostrando el uso de Firestore y Firebase Hosting.

### Objetivos Específicos
- Implementar un frontend funcional con HTML, CSS y JavaScript.  
- Utilizar Firebase para almacenamiento serverless (Firestore).  
- Conectar el frontend con la base de datos en tiempo real.  
- Desplegar la aplicación en Firebase Hosting.  
- Documentar arquitectura, despliegue y funcionamiento.

---

## 3. Arquitectura Serverless

### Diagrama (Descripción)
Frontend (HTML, CSS, JS)
↓
Firebase Hosting
↓
Firestore Database (Serverless)
↓
Reglas de Seguridad Firestore

### Componentes
- **Firebase Firestore:** Base de datos NoSQL responsable de almacenar las notas.
- **Firebase Hosting:** Servicio de hosting global y seguro con CDN y SSL automático.
- **Firebase Auth (opcional):** Permite manejo de autenticación.
- **Cloud Functions (opcional):** Para lógica backend adicional.

---

## 4. Funcionalidades

### Frontend
- Crear notas.
- Listar notas en tiempo real.
- Editar notas.
- Eliminar notas.
- Validación básica de campos.
- Manejo de errores simples.

### Backend (Firebase)
- Firestore como almacenamiento serverless.
- Reglas de seguridad para protección de datos.
- Hosting con SSL.
- (Opcional) Cloud Functions para validaciones o automatizaciones.

---

## 5. Tecnologías Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **Firebase Firestore**
- **Firebase Hosting**
- **Firebase CLI**

---

## 6. Estructura del Proyecto

### Componentes
- **Firebase Firestore:** Base de datos NoSQL responsable de almacenar las notas.
- **Firebase Hosting:** Servicio de hosting global y seguro con CDN y SSL automático.
- **Firebase Auth (opcional):** Permite manejo de autenticación.
- **Cloud Functions (opcional):** Para lógica backend adicional.

---


## 6. Estructura del Proyecto
notas-app/
│── README.md
│── firebase.json
│── firestore.rules
│── public/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│ └── assets/
└── functions/ (opcional)
├── index.js
└── package.json

---

## 7. Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
cd TU-REPO
2. Instalar Firebase CLI
npm install -g firebase-tools
3. Iniciar sesión
firebase login
4. Inicializar Firebase en el proyecto
firebase init
Seleccionar:

Hosting

Firestore

Functions (si aplican)

5. Ejecutar en local
firebase serve

6. Desplegar en la nube
firebase deploy
8. Variables de Configuración (Firebase)

Agregar tu configuración en script.js:

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  projectId: "TU_PROJECT",
  storageBucket: "TU_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
9. CRUD de Notas (Resumen Técnico)
Crear una nota
db.collection("notes").add({
  title: titulo,
  content: contenido,
  timestamp: Date.now()
});

Leer notas en tiempo real
db.collection("notes").orderBy("timestamp", "desc").onSnapshot(snapshot => {
  // Render notas
});

Actualizar nota
db.collection("notes").doc(id).update({
  title: nuevoTitulo,
  content: nuevoContenido
});

Eliminar nota
db.collection("notes").doc(id).delete();

10. Capturas de Pantalla

Agregar en /docs/screenshots:

Vista principal

Crear nota

Editar nota

Firestore mostrando documentos

Firebase Hosting funcionando

11. Costos Estimados (Firebase Free Tier)

| Servicio        | Costo  | Detalles                                 |
| --------------- | ------ | ---------------------------------------- |
| Firestore       | Gratis | 1 GB de almacenamiento, 50k lecturas/día |
| Hosting         | Gratis | CDN global                               |
| Auth            | Gratis | Soporta proveedores comunes              |
| Cloud Functions | Gratis | 2M invocaciones                          |

12. Ventajas del Modelo Serverless

No requiere administración de servidores.

Escalado automático según demanda.

Pago por uso.

Integración rápida con JavaScript.

Despliegue en segundos.

Base de datos en tiempo real.

13. Limitaciones Encontradas

Reglas de Firestore deben configurarse correctamente.

Límite de lectura/escritura en Firestore.

Vendor lock-in (dependencia del proveedor).

Functions pueden tener "cold starts".

14. URLs del Proyecto

URL Firebase Hosting:
https://TU-PROYECTO.web.app

Consola Firebase:
https://console.firebase.google.com

15. Conclusiones

La aplicación demuestra cómo Firebase y el modelo serverless permiten construir aplicaciones funcionales y escalables sin gestionar infraestructura. La arquitectura utilizada es ideal para proyectos que requieren sincronización en tiempo real, simplicidad y un despliegue rápido.
