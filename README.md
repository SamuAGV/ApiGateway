Aquí tienes el README listo para copiar y pegar directamente en GitHub:

---

```markdown
# 🚀 API Gateway + React App

Proyecto completo que integra **AWS API Gateway**, **AWS Lambda** y un **frontend en React** desplegado en **AWS Amplify**.

## 📋 Tabla de Contenidos

- [Arquitectura](#arquitectura)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación Local](#instalación-local)
- [Despliegue](#despliegue)
- [Endpoints de la API](#endpoints-de-la-api)
- [Variables de Entorno](#variables-de-entorno)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## 🏗️ Arquitectura

```
Cliente (React)
     │
     ▼
AWS Amplify (Hosting)
     │
     ▼
API Gateway (REST API)
     ├── Stage: dev  → Lambda dev ($LATEST)  → "Hola dev"
     └── Stage: prod → Lambda prod (versión 1) → "Hola prod"
```

### Flujo de datos:
1. El frontend React hace peticiones a API Gateway
2. API Gateway enruta según el stage (`/dev` o `/prod`)
3. Lambda procesa y devuelve la respuesta
4. React muestra el resultado en pantalla

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-------------|
| **Frontend** | React 18, JavaScript, CSS |
| **API Gateway** | AWS API Gateway (REST API) |
| **Backend** | AWS Lambda (Python 3.12) |
| **Hosting** | AWS Amplify |
| **Control de versiones** | Git + GitHub |

---

## 📁 Estructura del Proyecto

```
ApiGateway/
├── public/                 # Archivos estáticos
├── src/
│   ├── App.js             # Componente principal con llamadas a API
│   ├── App.css            # Estilos
│   └── index.js           # Punto de entrada
├── .gitignore             # Archivos ignorados por Git
├── package.json           # Dependencias y scripts
├── package-lock.json      # Versiones exactas de dependencias
└── README.md              # Este archivo
```

---

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm (v9 o superior)
- Cuenta de AWS (opcional para despliegue)
- Git

---

## 💻 Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/SamuAGV/ApiGateway.git
cd ApiGateway
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

### 4. Build para producción

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `/build`

---

## ☁️ Despliegue

### Backend (AWS Lambda + API Gateway)

Las funciones Lambda y API Gateway fueron desplegadas manualmente desde AWS Console.

**Endpoints desplegados:**

| Stage | URL | Respuesta |
|-------|-----|-----------|
| dev | `https://or9112xy9d.execute-api.us-east-1.amazonaws.com/dev/dev` | `"Hola dev"` |
| prod | `https://or9112xy9d.execute-api.us-east-1.amazonaws.com/prod/prod` | `"Hola prod"` |

### Frontend (AWS Amplify)

1. Sube el código a GitHub
2. Ve a **AWS Amplify** → **Hosting** → **Get started**
3. Conecta con GitHub y selecciona el repositorio `SamuAGV/ApiGateway`
4. Configura:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Haz clic en **Save and deploy**

**URL desplegada:** `https://main.d2lydpeopg01uz.amplifyapp.com`

---

## 🔗 Endpoints de la API

### Método: `GET`

| Endpoint | Respuesta |
|----------|-----------|
| `/dev/dev` | `"Hola dev"` |
| `/prod/prod` | `"Hola prod"` |

### Ejemplo con `curl`

```bash
# Stage dev
curl https://or9112xy9d.execute-api.us-east-1.amazonaws.com/dev/dev

# Stage prod
curl https://or9112xy9d.execute-api.us-east-1.amazonaws.com/prod/prod
```

---

## 🔧 Variables de Entorno

Si necesitas cambiar los endpoints de la API, edita `src/App.js`:

```javascript
const DEV_API_URL = 'https://or9112xy9d.execute-api.us-east-1.amazonaws.com/dev/dev';
const PROD_API_URL = 'https://or9112xy9d.execute-api.us-east-1.amazonaws.com/prod/prod';
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Samuel Garduño**

- GitHub: [@SamuAGV](https://github.com/SamuAGV)

---

## 🐛 Problemas conocidos

| Problema | Estado | Solución |
|----------|--------|----------|
| CORS en desarrollo local | ✅ Resuelto | Configurado `Access-Control-Allow-Origin: *` |
| Build fallando en Amplify | ✅ Resuelto | Regenerado `package-lock.json` |

---

## 📊 Estado del Proyecto

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-amplify-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

**¡Gracias por visitar este proyecto!** ⭐
```
