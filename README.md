# Formulario con Node.js y MySQL (XAMPP)

Este proyecto consiste en un formulario HTML que se ejecuta desde Apache (XAMPP) y que envía los datos a un backend en Node.js. El backend se conecta a una base de datos MySQL para almacenar la información enviada.

## Estructura del proyecto

formulariored/
├── index.html # Formulario HTML
├── css/ # Estilos opcionales
├── js/ # Lógica para enviar datos
├── backEnd/ # Backend en Node.js
│ ├── server.js # Servidor HTTP
│ ├── db.js # Conexión a MySQL
│ ├── package.json # Dependencias
└── .gitignore # Archivos excluidos de Git


---

## 

- Node.js instalado [https://nodejs.org/](https://nodejs.org/)
- XAMPP con MySQL activo (usar `localhost/phpmyadmin`)
- Git instalado (opcional pero recomendado)

---

## 
1. Clona el repositorio:
git clone https://github.com/TU_USUARIO/formulario-nodejs-xampp.git
cd formulario-nodejs-xampp/backEnd


--------------------Instala las dependencias del backend:
npm install



Asegúrate de tener MySQL activo desde XAMPP y crea la base de datos:

Accede a http://localhost/phpmyadmin

Crea una base de datos llamada: formulario_db

Ejecuta esta consulta SQL:


CREATE TABLE formularios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


--------------------------Ejecución del backend-------------------------------
Desde la carpeta backEnd:
node server.js

El backend se ejecutará en:
http://localhost:3000

 -----------------------Enviar datos desde el frontend----------------------------
Abre tu formulario en el navegador:

http://localhost/formulariored/index.html
Llena los campos y haz clic en Enviar.

Los datos se enviarán a /api/formulario (backend) y se guardarán en MySQL.


-------------------------Buenas prácticas con Git
Usa ramas para nuevas funcionalidades:
git checkout -b backend-mejoras

Realiza commits claros:
git commit -m "Agregado validador de campos en el backend"

Sincroniza con el repositorio:
git push -u origin backend-mejoras

--------------------------Autor----------------------------------------------------
Henry Aguilar Estrada

[Tu perfil GitHub](https://github.com/HenryHaed)
