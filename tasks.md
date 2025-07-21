
# tasks.md

## Lista de Tareas Detalladas por Componente

---

### FRONTEND

1. [ ] Crear estructura mínima del frontend con Next.js (UI estática, sin lógica)
    - Inicializar proyecto Next.js en Vercel
    - Crear páginas y componentes base: Header, Sidebar, Panel de Chat
    - Implementar diseño responsive y estilos básicos tipo WhatsApp

2. [ ] Implementar selector de asistentes editable en el Header
    - Componente para seleccionar asistentes disponibles
    - Área editable para logo y eslogan del cliente

3. [ ] Desarrollar Sidebar editable
    - Componente para mostrar y editar imagen del asistente (subida manual)
    - Campos editables: nombre, descripción, habilidades
    - Configuración visual: colores, burbujas, patrones, tipografía
    - Activación/desactivación de funcionalidades del chat
    - Opción de configuración manual

4. [ ] Implementar Panel de Chat con historial agrupado por fecha
    - Renderizado de mensajes con burbujas diferenciadas
    - Agrupación de mensajes por fecha
    - Avatar solo para mensajes del asistente

5. [ ] Integrar funcionalidades del chat activables/desactivables
    - Subida de archivos
    - Subida de imágenes
    - Envío de audios
    - Envío de emoticonos
    - Envío de GIFs
    - Envío de stickers

6. [ ] Permitir configurar el endpoint del chat desde la UI (lado izquierdo)
    - Campo para ingresar la URL del endpoint del chat conversacional
    - Guardar y usar el endpoint para activar el chat

7. [ ] Implementar integración con Backend B (chat conversacional)
    - Conexión a webhook/API de n8n o AWS Lambda
    - Simulación de conversaciones (onboarding, soporte, ventas)
    - Enrutamiento de mensajes y gestión de historial

8. [ ] Documentar flujos de uso y configuración para onboarding de clientes y desarrolladores
    - Guía de uso de la demo
    - Instrucciones para personalización manual

9. [ ] Realizar pruebas de usuario y ajustes de UX/UI
    - Recopilar feedback de clientes
    - Mejorar experiencia de usuario según comentarios

---



---

### BACKEND B – Chat Conversacional (n8n Self-Hosted o AWS Lambda)

19. [ ] Configurar entorno de n8n Self-Hosted o AWS Lambda para Backend B
    - Instalar y configurar n8n en VPS o definir funciones Lambda

20. [ ] Crear flujos de simulación de conversaciones (onboarding, soporte, ventas)
    - Definir nodos y lógica de respuesta en n8n o Lambda

21. [ ] Implementar webhook/API para recibir y responder mensajes desde el frontend
    - Probar integración con frontend

22. [ ] Gestionar historial y enrutamiento de mensajes
    - Almacenar historial temporal o persistente según necesidad

23. [ ] Documentar configuración y endpoints de Backend B
    - Guía de integración y ejemplos de uso

---

Cada tarea debe ser marcada con un checkmark [✔️] en la casilla correspondiente una vez ejecutada.
