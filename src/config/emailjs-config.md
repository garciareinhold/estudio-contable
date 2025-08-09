# Configuración de EmailJS

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS:

## 1. Crear cuenta en EmailJS
- Ve a [emailjs.com](https://www.emailjs.com/)
- Crea una cuenta gratuita

## 2. Configurar el servicio de email
- En el dashboard, ve a "Email Services"
- Agrega un nuevo servicio (Gmail, Outlook, etc.)
- Guarda el Service ID

## 3. Crear una plantilla de email
- Ve a "Email Templates"
- Crea una nueva plantilla con el siguiente contenido:

```
Nuevo mensaje de contacto desde el sitio web:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Mensaje: {{message}}

---
Enviado desde el formulario de contacto del sitio web.
```

- Guarda el Template ID

## 4. Obtener la Public Key
- Ve a "Account" > "API Keys"
- Copia tu Public Key

## 5. Configurar en el código
En `src/components/ContactForm.tsx`, reemplaza las líneas comentadas con:

```javascript
await emailjs.send(
  'TU_SERVICE_ID', // Reemplaza con tu Service ID
  'TU_TEMPLATE_ID', // Reemplaza con tu Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    message: formData.message,
    to_email: 'santi.liset@hotmail.es'
  },
  'TU_PUBLIC_KEY' // Reemplaza con tu Public Key
);
```

## 6. Inicializar EmailJS
En `src/main.tsx`, agrega:

```javascript
import emailjs from '@emailjs/browser';

emailjs.init('TU_PUBLIC_KEY');
```

## Notas importantes:
- El plan gratuito permite 200 emails por mes
- Los emails se envían desde tu cuenta de email configurada
- Puedes personalizar la plantilla según tus necesidades
- El formulario incluye validación básica de campos requeridos 