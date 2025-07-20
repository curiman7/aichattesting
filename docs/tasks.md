
# tasks.md

## Lista de Tareas Detalladas por Componente

---

### FRONTEND

1. [ ] Crear estructura mínima del frontend con Next.js (UI estática, sin lógica)
    - Inicializar proyecto Next.js en Vercel
    - Crear páginas y componentes base: Header, Sidebar, Panel de Chat
    - Implementar diseño responsive y estilos básicos tipo WhatsApp

2. [ ] Implementar selector de asistentes y branding editable en el Header
    - Componente para seleccionar asistentes disponibles
    - Área editable para logo y eslogan del cliente
    - Lógica para replicar imagen generada por IA como logo

3. [ ] Desarrollar Sidebar editable
    - Componente para mostrar y editar imagen del asistente (subida o IA)
    - Campos editables: nombre, descripción, habilidades
    - Configuración visual: colores, burbujas, patrones, tipografía
    - Activación/desactivación de funcionalidades del chat
    - Opción de configuración manual o por IA

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

6. [ ] Implementar llamadas HTTP a Backend A (configuración IA)
    - Conexión a endpoints: /generate-image, /generate-style, /apply-branding, /suggest-copy
    - Manejo de respuestas y actualización de UI

7. [ ] Implementar integración con Backend B (chat conversacional)
    - Conexión a webhook/API de n8n o AWS Lambda
    - Simulación de conversaciones (onboarding, soporte, ventas)
    - Enrutamiento de mensajes y gestión de historial

8. [ ] Documentar flujos de uso y configuración para onboarding de clientes y desarrolladores
    - Guía de uso de la demo
    - Instrucciones para personalización manual y por IA

9. [ ] Realizar pruebas de usuario y ajustes de UX/UI
    - Recopilar feedback de clientes
    - Mejorar experiencia de usuario según comentarios

---

### BACKEND A – Configuración y Personalización por IA (AWS Lambda + API Gateway, IaC con SAM)

10. [ ] Diseñar arquitectura de Backend A usando AWS SAM
    - Definir recursos en template.yaml (Lambdas, API Gateway, permisos S3, etc.)
    - Estructurar carpetas para código fuente y plantillas SAM

11. [ ] Implementar función Lambda para /generate-image
    - Lógica para generar imagen de asistente (mock o integración IA)
    - Pruebas unitarias de la función

12. [ ] Implementar función Lambda para /generate-style
    - Lógica para sugerir colores, patrones y temas visuales
    - Pruebas unitarias de la función

13. [ ] Implementar función Lambda para /apply-branding
    - Lógica para aplicar configuraciones visuales de empresa
    - Pruebas unitarias de la función

14. [ ] Implementar función Lambda para /suggest-copy
    - Lógica para proponer textos de presentación para el asistente
    - Pruebas unitarias de la función

15. [ ] Configurar almacenamiento opcional en S3 para imágenes y configuraciones
    - Definir bucket en SAM
    - Subida y recuperación de archivos desde S3

16. [ ] Configurar CORS y seguridad básica en API Gateway
    - Permitir orígenes necesarios
    - Añadir autenticación simple si es necesario

17. [ ] Desplegar infraestructura y funciones con AWS SAM
    - Compilar y empaquetar proyecto
    - Desplegar en AWS usando SAM CLI
    - Verificar endpoints y recursos creados

18. [ ] Documentar endpoints y arquitectura de Backend A
    - Especificar rutas, métodos, ejemplos de payload y respuestas

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
