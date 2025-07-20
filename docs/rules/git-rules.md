# git-rules.md
## Reglas de Uso de Git

Este documento describe las convenciones y el flujo de trabajo para el uso de Git en nuestros proyectos, basándose en el modelo **Git Flow**.

### 1. Modelo de Ramas: Git Flow

Utilizamos un flujo de trabajo basado en **Git Flow**, con las siguientes ramas principales:

* **`master`**:
    * Contiene el código estable y listo para producción.
    * Solo se actualiza mediante fusiones desde `develop` (o ramas `hotfix`).
    * Cada fusión a `master` debe corresponder a una nueva versión liberada.
* **`develop`**:
    * Contiene el código más reciente con las características completas y probadas para el próximo lanzamiento.
    * Es la rama principal donde se fusionan las ramas de `feature`.

### 2. Ramas de Soporte

* **`feature/<nombre-caracteristica>`**:
    * Se crean a partir de `develop`.
    * Se usan para desarrollar nuevas funcionalidades o mejoras no relacionadas con un lanzamiento específico.
    * Una vez completada y probada, se fusiona de nuevo en `develop`.
    * **Nomenclatura**: Prefijo `feature/` seguido de una descripción concisa de la característica (ej., `feature/login-google`).

* **`release/<version>`**:
    * Se crean a partir de `develop` cuando se va a preparar un nuevo lanzamiento.
    * Aquí se realizan los últimos arreglos, pruebas y preparación de metadatos (ej. números de versión).
    * Una vez lista, se fusiona tanto en `master` (con un tag de la versión) como en `develop`.
    * **Nomenclatura**: Prefijo `release/` seguido del número de versión (ej., `release/1.0.0`).

* **`hotfix/<nombre-arreglo>`**:
    * Se crean a partir de `master` para solucionar errores críticos en producción.
    * Una vez corregido y probado, se fusiona tanto en `master` (con un tag de la versión) como en `develop`.
    * **Nomenclatura**: Prefijo `hotfix/` seguido de una descripción concisa del arreglo (ej., `hotfix/bug-login-produccion`).

### 3. Commits

* **Mensajes Claros:** Escribe mensajes de commit concisos y descriptivos. El primer renglón debe ser un resumen corto (menos de 50 caracteres) y, si es necesario, una descripción más detallada en los renglones siguientes.
    * **Formato Sugerido:** `Tipo(Ámbito): Descripción corta`
        * Tipos comunes: `feat` (nueva característica), `fix` (arreglo de bug), `docs` (documentación), `style` (formato, CSS), `refactor` (refactorización de código), `test` (pruebas), `chore` (cambios de build, etc.).
        * Ejemplo: `feat(auth): Add Google login`
* **Commits Atómicos:** Cada commit debe representar un cambio lógico único y completo. Evita commits gigantes que mezclen múltiples funcionalidades o correcciones.
* **Frecuencia:** Haz commits con frecuencia. Es mejor tener muchos commits pequeños que pocos commits grandes.

### 4. Pull Requests (PRs)

* **Descripción:** Incluye una descripción clara de los cambios, el problema que resuelve y cualquier instrucción de prueba necesaria.
* **Revisión:** Solicita la revisión de al menos un compañero de equipo antes de fusionar.
* **Resolución de Conflictos:** Eres responsable de resolver cualquier conflicto de fusión en tu PR.

### 5. Buenas Prácticas

* **`git pull` Frecuente:** Haz `git pull origin develop` (o la rama base relevante) antes de empezar a trabajar y con frecuencia para mantener tu rama local actualizada y evitar conflictos.
* **`rebase` vs `merge`:** Prefiere `rebase` para mantener un historial lineal y limpio en tus ramas de `feature` antes de hacer el `merge` final a `develop`. Sin embargo, **nunca hagas `rebase` en ramas compartidas o `master`/`develop`**.
* **Etiquetado (Tagging):** Utiliza tags para marcar puntos importantes en el historial (ej. lanzamientos).