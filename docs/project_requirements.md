# project-requirements.md

## 🎯 Objetivo General
Desarrollar una interfaz web tipo chat conversacional, que funcione como herramienta de demostración de asistentes virtuales personalizados, con capacidad de personalización visual, configuración manual y conexión con backend de chat conversacional.
La empresa es una agencia de automatización que hace diversos chat conversacionales y busca mostrar a sus clientes los distintos asistentes que ha generado para ver si le gustaría adquirirlos.
El desarrollo debe estar altamente desacoplado y configurable manualmente. Tendrá un frontend y un backend para el asistente de chats conversacionales.

---

## 🧱 Estructura General del Proyecto

### 🖥️ Interfaz Principal (Frontend - Next.js)
- Estilo tipo WhatsApp, de chat uno a uno
- Fondo claro por defecto
- Responsive design: barra lateral izquierda se colapsa en móviles
- Parte superior (barra horizontal completa):
  - Lado izquierdo: selector de asistentes disponible para el chat.
  - Lado derecho: espacio editable con el logo y eslogan del cliente
- Parte superior del panel de chat: nombre del asistente e ícono
- Componente de conversación con historial agrupado por fecha, en el mismo hilo de chat (como WhatsApp)
- Funcionalidades del chat (activables/desactivables desde el panel izquierdo):
  - Subir archivos
  - Subir imágenes
  - Enviar audios
  - Enviar emoticonos
  - Enviar GIFs
  - Enviar stickers

### 🧭 Barra lateral izquierda (sidebar)
- Imagen del asistente, cargada por el usuario
- Botón de edición de imagen (solo subida manual)
- Texto editable: descripción del asistente, habilidades, nombre visible
- Configuraciones visuales: colores de fondo, burbujas, patrón, etc.
- Configuraciones de texto (tipografía, tamaño, espaciado)
- Configuración de funcionalidades del chat (habilitar o deshabilitar carga de archivos, gifs, audio, stickers, etc.)
- Todo editable manualmente

Permitir configurar el endpoint del chat desde la UI (lado izquierdo):
  - Campo para ingresar la URL del endpoint del chat conversacional
  - Guardar y usar el endpoint para activar el chat

---

## 🧩 Componentes Técnicos

### 🎨 Frontend (Next.js)
- Hospedado en Vercel (plan gratuito recomendado)
- Lógica para cambiar tema visual en base al asistente seleccionado
- Llamadas a backend para generación de imagen y estilo
- Componente de chat con burbujas diferenciadas (solo el asistente lleva avatar al costado del mensaje)
- Branding visible superior editable por archivo (logo + slogan)
- Si se genera imagen de asistente vía IA, esta también se replica como logo del branding
- Subdominio propio (ej: lab.midominio.com) gestionado desde Hostinger

### 🔌 Backend A – Configuración y Personalización por IA
- AWS Lambda + API Gateway
- Funcionalidades:
  - `/generate-image`: genera imagen de asistente
  - `/generate-style`: sugiere colores, patrones y temas visuales
  - `/apply-branding`: aplica configuraciones visuales de empresa
  - `/suggest-copy`: propone textos de presentación para el asistente
- Almacenamiento en S3 (opcional)

### 💬 Backend B – Chat Conversacional (mock/testing)
- Opciones:
  - **n8n Self-Hosted** (visual, adaptable, rápido para prototipado)
  - **AWS Lambda** (si se desea serverless y programable)
- Funcionalidades:
  - Simulación de conversaciones tipo onboarding, soporte, ventas, etc.
  - Enrutamiento de mensajes desde el frontend

---

## 💸 Estrategia de Costos Mínimos

| Componente | Solución         | Costo estimado |
|------------|------------------|----------------|
| Frontend   | Vercel Free Plan | $0             |
| Backend A  | AWS Free Tier    | $0             |
| Backend B  | n8n Self-hosted (en VPS) | Bajo (~$5–10/mes) |
| DNS/Subdominio | Hostinger      | Incluido       |
| OpenAI API | Pago por uso     | Controlable    |

---

## 🔄 Flujo de Uso en Demo
1. El desarrollador carga el entorno desde un link:
   - Ejemplo: `lab.midominio.com/?cliente=bancoABC`
2. Se genera la vista personalizada con los elementos cargados desde backend (logo, estilos, imagen, etc.)
3. El cliente ve una conversación simulada y propone ajustes
4. El desarrollador aplica cambios desde la UI o usa la IA para configuraciones rápidas

---

## 📦 Consideraciones Técnicas Finales
- Todo lo visual es manejado por el frontend (configurable y dinámico)
- Las conversaciones se renderizan en tiempo real, pero vienen desde otro backend (chat logic)
- La IA de configuración puede ser opcional, y sustituida por inputs manuales si el cliente lo prefiere
- Debe contemplarse almacenamiento temporal o persistente para configuraciones (ej: S3 o base ligera como DynamoDB)

---

## 🛠️ Próximos pasos sugeridos
- Crear estructura mínima del frontend (UI estática)
- Implementar llamadas básicas al backend A (imagen, estilo)
- Integrar mock de backend B (conversación de prueba en JSON o vía n8n)
- Conectar subdominio en Hostinger a Vercel
- Diseñar interfaz de edición visual en la UI (manual + IA)

