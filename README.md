# Proyecto de Chat Conversacional

Este proyecto implementa una interfaz web tipo chat conversacional para demostración de asistentes virtuales personalizados.

## Estructura del Proyecto

- **frontend/**: Aplicación Next.js con la interfaz de usuario
  - **src/app/components/**: Componentes React (Header, Sidebar, ChatPanel)
  - **src/app/styles/**: Estilos CSS para los componentes
  - **src/app/page.tsx**: Página principal que integra todos los componentes

## Componentes Implementados

1. **Header**: Selector de asistentes y área de branding editable
2. **Sidebar**: Panel lateral con opciones de configuración del asistente y funcionalidades
3. **ChatPanel**: Panel de chat con historial de mensajes agrupados por fecha

## Funcionalidades Implementadas

- Interfaz tipo WhatsApp con diseño responsive
- Selector de asistentes en el Header
- Área de branding editable (logo y eslogan)
- Sidebar con campos editables (nombre, descripción, habilidades)
- Activación/desactivación de funcionalidades del chat
- Panel de chat con mensajes agrupados por fecha
- Burbujas de chat diferenciadas para usuario y asistente
- Avatar solo para mensajes del asistente

## Próximos Pasos

- Implementar Backend A para configuración y personalización por IA
- Implementar Backend B para la lógica de chat conversacional
- Conectar el frontend con los backends

## Cómo Ejecutar el Proyecto

1. Navegar a la carpeta frontend:
   ```
   cd frontend
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador