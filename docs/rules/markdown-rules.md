\# markdown-rules.md

\## Reglas de Formato Markdown



Este documento establece las directrices para el uso consistente del formato Markdown en nuestra documentación y archivos de texto.



\### 1. Encabezados (Headings)



\* Utiliza el signo de número `#` para los encabezados.

\* Comienza con `#` para el encabezado principal (H1) del documento.

\* Usa el número apropiado de `#` para cada nivel de encabezado (ej., `##` para H2, `###` para H3).

\* Asegúrate de dejar una línea en blanco antes y después de cada encabezado para una mejor legibilidad.



&nbsp;   ```markdown

&nbsp;   # Encabezado Principal



&nbsp;   Esto es el contenido bajo el encabezado principal.



&nbsp;   ## Subencabezado



&nbsp;   Contenido del subencabezado.



&nbsp;   ### Otro Nivel

&nbsp;   ```



\### 2. Texto en Negrita y Cursiva



\* \*\*Negrita:\*\* Usa dos asteriscos `\*\*texto\*\*` o dos guiones bajos `\_\_texto\_\_`. Prefiere `\*\*asteriscos\*\*`.

\* \*Cursiva:\* Usa un asterisco `\*texto\*` o un guion bajo `\_texto\_`. Prefiere `\*asteriscos\*`.

\* \*\*\*Negrita y Cursiva:\*\*\* Usa tres asteriscos `\*\*\*texto\*\*\*`.



&nbsp;   ```markdown

&nbsp;   Esto es \*\*negrita\*\* y esto es \*cursiva\*.

&nbsp;   Esto es \*\*\*negrita y cursiva\*\*\*.

&nbsp;   ```



\### 3. Listas



\* \*\*Listas Ordenadas:\*\* Usa números seguidos de un punto (ej., `1.`).

\* \*\*Listas Desordenadas:\*\* Usa asteriscos `\*`, guiones `-` o signos de más `+`. Prefiere `\*` o `-`.

\* \*\*Anidamiento:\*\* Indenta los elementos anidados con dos o cuatro espacios.



&nbsp;   ```markdown

&nbsp;   1. Primer elemento

&nbsp;   2. Segundo elemento

&nbsp;       \* Elemento anidado

&nbsp;       \* Otro elemento anidado

&nbsp;   3. Tercer elemento



&nbsp;   \* Elemento desordenado

&nbsp;   - Otro elemento desordenado

&nbsp;       + Anidado

&nbsp;   ```



\### 4. Bloques de Código



\* \*\*Código en Línea:\*\* Encierra el código en comillas inversas `` `código` ``.

\* \*\*Bloques de Código:\*\* Usa tres comillas inversas ` ``` ` al principio y al final del bloque. Es altamente recomendable especificar el lenguaje para el resaltado de sintaxis.



&nbsp;   ````markdown

&nbsp;   Para instalar, usa `npm install`.



&nbsp;   ```javascript

&nbsp;   // Ejemplo de código JavaScript

&nbsp;   function helloWorld() {

&nbsp;     console.log("Hello, world!");

&nbsp;   }

&nbsp;   ```

&nbsp;   ````



\### 5. Enlaces (Links)



\* \*\*Enlaces en Línea:\*\* `\[Texto del enlace](url)`

\* \*\*Enlaces de Referencia:\*\*

&nbsp;   ```markdown

&nbsp;   \[Texto del enlace]\[id]



&nbsp;   \[id]: https://www.ejemplo.com "Título opcional"

&nbsp;   ```

&nbsp;   Prefiere enlaces en línea para la mayoría de los casos.



\### 6. Imágenes



\* `!\[Texto alternativo](url\_de\_la\_imagen "Título opcional")`



&nbsp;   ```markdown

&nbsp;   !\[Logo de la empresa](https://www.ejemplo.com/logo.png "Logo")

&nbsp;   ```



\### 7. Citas en Bloque (Blockquotes)



\* Usa el signo `>` al principio de cada línea de la cita.



&nbsp;   ```markdown

&nbsp;   > Esto es una cita en bloque.

&nbsp;   > Puede abarcar múltiples líneas.

&nbsp;   ```



\### 8. Líneas Horizontales



\* Usa tres o más guiones `---`, asteriscos `\*\*\*` o guiones bajos `\_\_\_` en una línea separada. Prefiere `---`.



&nbsp;   ```markdown

&nbsp;   Contenido arriba.

&nbsp;   ---

&nbsp;   Contenido abajo.

&nbsp;   ```



\### 9. Tablas



\* Usa guiones `-` para crear las cabeceras de las columnas y barras verticales `|` para separar las columnas.



&nbsp;   ```markdown

&nbsp;   | Cabecera 1 | Cabecera 2 | Cabecera 3 |

&nbsp;   |------------|------------|------------|

&nbsp;   | Fila 1 Col 1 | Fila 1 Col 2 | Fila 1 Col 3 |

&nbsp;   | Fila 2 Col 1 | Fila 2 Col 2 | Fila 2 Col 3 |

&nbsp;   ```



\### 10. Consideraciones Generales



\* \*\*Espacios en Blanco:\*\* Usa espacios en blanco consistentemente para indentación y separación de elementos.

\* \*\*Saltos de Línea:\*\* Para forzar un salto de línea dentro de un párrafo, termina la línea con dos espacios `  ` antes del salto.

\* \*\*Consistencia:\*\* Lo más importante es la consistencia. Una vez que elijas un estilo, úsalo a lo largo de todo el documento.

