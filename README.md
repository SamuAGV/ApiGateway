````markdown
# 🚀 ApiGateway

Proyecto que integra **AWS Lambda + API Gateway** con un frontend desplegado en **AWS Amplify**.

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
````

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

| Stage | URL                                                                | Respuesta     |
| ----- | ------------------------------------------------------------------ | ------------- |
| dev   | `https://or9112xy9d.execute-api.us-east-1.amazonaws.com/dev/dev`   | `"Hola dev"`  |
| prod  | `https://or9112xy9d.execute-api.us-east-1.amazonaws.com/prod/prod` | `"Hola prod"` |

---

### Frontend (AWS Amplify)

1. Sube el código a GitHub
2. Ve a **AWS Amplify → Hosting → Get started**
3. Conecta con GitHub y selecciona el repositorio `SamuAGV/ApiGateway`
4. Configura:

   * Build command: `npm run build`
   * Publish directory: `build`
5. Haz clic en **Save and deploy**

**URL desplegada:**
👉 [https://main.d2lydpeopg01uz.amplifyapp.com](https://main.d2lydpeopg01uz.amplifyapp.com)

---

## 🔗 Endpoints de la API

### Método: `GET`

| Endpoint     | Respuesta     |
| ------------ | ------------- |
| `/dev/dev`   | `"Hola dev"`  |
| `/prod/prod` | `"Hola prod"` |

---

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

Las contribuciones son bienvenidas:

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Sube la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Samuel Antonio Garduño Viviana**

* GitHub: [@SamuAGV](https://github.com/SamuAGV)

---

## 🐛 Problemas conocidos

| Problema                  | Estado     | Solución                                     |
| ------------------------- | ---------- | -------------------------------------------- |
| CORS en desarrollo local  | ✅ Resuelto | Configurado `Access-Control-Allow-Origin: *` |
| Build fallando en Amplify | ✅ Resuelto | Regenerado `package-lock.json`               |

---

## 📊 Estado del Proyecto

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-amplify-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

⭐ **Si te gusta el proyecto, dale una estrella en GitHub**

```
```
