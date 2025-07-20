# project-design.md

## 1. Resumen del Proyecto

Plataforma web de chat conversacional para demo de asistentes virtuales personalizables, con frontend desacoplado, dos backends (configuración IA y chat), y alto grado de personalización visual y funcional.

---

## 2. Arquitectura General

- **Frontend:** Next.js (React), hospedado en Vercel.
- **Backend A:** AWS Lambda + API Gateway (configuración y personalización por IA).
- **Backend B:** n8n Self-Hosted (o AWS Lambda) para lógica de chat conversacional.
- **Almacenamiento:** S3 (opcional) para imágenes y configuraciones.
- **Dominio:** Subdominio propio gestionado en Hostinger.

---

## 3. Componentes Principales

### 3.1 Frontend

- **Header:** Selector de asistentes, branding editable (logo y eslogan).
- **Sidebar:** Imagen del asistente (IA o subida), edición de imagen, campos editables (nombre, descripción, habilidades), configuración visual (colores, burbujas, patrones, tipografía), activación/desactivación de funcionalidades, opción de configuración manual o por IA.
- **Panel de Chat:** Conversación agrupada por fecha, mensajes con burbujas diferenciadas, funcionalidades de chat según configuración.
- **Responsive:** Sidebar colapsable en móviles.
- **Integraciones:** Llamadas HTTP a Backend A (imagen, estilos, textos) y Backend B (chat).

### 3.2 Backend A – Configuración y Personalización por IA

- **Endpoints:**
  - `POST /generate-image`: Entrada: prompt o parámetros de asistente. Salida: URL de imagen generada.
  - `POST /generate-style`: Entrada: preferencias o prompt. Salida: esquema de colores, patrones, fuentes.
  - `POST /apply-branding`: Entrada: logo, colores, eslogan. Salida: configuración visual aplicada.
  - `POST /suggest-copy`: Entrada: tipo de asistente, contexto. Salida: textos sugeridos.
- **Almacenamiento:** Opcional en S3.

### 3.3 Backend B – Chat Conversacional

- **Opciones:** n8n Self-Hosted (flujos visuales) o AWS Lambda (lógica programable).
- **Funcionalidades:** Recepción de mensajes, simulación de respuestas, enrutamiento y gestión de historial.

---

## 4. Consideraciones Técnicas

- Desacoplamiento total por API.
- Configurabilidad visual y funcional (manual o IA).
- Persistencia en S3/DynamoDB (opcional).
- Costos mínimos (Vercel Free, AWS Free, VPS bajo costo).
- Seguridad básica (CORS, autenticación simple si es necesario).
- Escalabilidad serverless y microservicios.

---

## 5. Flujos de Uso

1. Acceso vía subdominio con parámetro de cliente.
2. Carga de configuración y branding desde Backend A.
3. Renderizado de UI personalizada.
4. Simulación de conversación con Backend B.
5. Edición de configuración visual y funcional (manual o IA).
6. Visualización de cambios en tiempo real.

---

## 6. Próximos Pasos

1. Crear estructura mínima del frontend (UI estática).
2. Implementar llamadas básicas a Backend A.
3. Integrar mock de Backend B.
4. Conectar subdominio en Hostinger a Vercel.
5. Diseñar interfaz de edición visual (manual + IA).
