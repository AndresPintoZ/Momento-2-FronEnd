# RedSocial React App

## 📁 Estructura del Proyecto

```
Red-Social/
├── plantillas_html/          # Archivos HTML originales (referencia)
│   ├── login.html
│   ├── registro.html
│   ├── perfil.html
│   ├── chat.html
│   ├── configuracion.html
│   ├── grupos.html
│   └── plantilla-RedSocial.html
│
├── public/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── PhotoCard.jsx
│   │   ├── Post.jsx
│   │   ├── CreatePost.jsx
│   │   ├── RightSidebar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/               # Páginas principales
│   │   ├── HomePage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegistroPage.jsx
│   │   ├── ChatPage.jsx
│   │   ├── ConfiguracionPage.jsx
│   │   └── GruposPage.jsx
│   │
│   ├── styles/
│   │   └── Navbar.css
│   │
│   ├── App.jsx              # Router principal
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Rutas Disponibles

| Ruta | Página |
|------|--------|
| `/` | Home - Feed principal |
| `/perfil` | Perfil del usuario |
| `/login` | Iniciar sesión |
| `/registro` | Crear cuenta |
| `/mensajes` | Chat y mensajes |
| `/configuracion` | Configuración de cuenta |
| `/grupos` | Explorar grupos |

## 🌐 Acceso Local

**Servidor: http://localhost:5174/**

## 💾 Instalación y ejecución

```bash
npm install
npm run dev
```

## 📦 Dependencias principales

- React 19.2.5
- React DOM 19.2.5
- React Router DOM (para navegación)
- Vite (bundler)
- W3.CSS (framework CSS)
- Font Awesome (iconos)
