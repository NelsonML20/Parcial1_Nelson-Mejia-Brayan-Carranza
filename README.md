# Parcial1

Integrantes

Brayan Isaac Carranza Amaya 

Nelson Javier Mejía Lemus

PROBLEMATICA:

Las comunidades salvadoreña que cuenta con servicio de agua potable enfrentan desafíos que afectan tanto la disponibilidad del recurso como su distribución equitativa entre los habitantes, a causa de la deficiencia en el servicio como lo es el consumo de agua

SOLUCIÓN:

Monitoreo en Tiempo Real: Visualización del consumo de agua por cada punto de medición (vivienda) con actualización continua en el panel administrativo web.

SECTOR:

sector hídrico comunitario, específicamente a comunidades rurales y periurbanas de bajos recursos con gestión autónoma de agua potable, donde no existe infraestructura de monitoreo y la gestión es manual, ineficiente y poco transparente.


¿Qué valor agregado tiene el uso de WebComponents en su proyecto?

El uso de WebComponents nos permitió crear un componente personalizado reutilizable para mostrar el resumen financiero. Esto hace que el código sea más ordenado, modular y fácil de mantener.

Además, si en el futuro queremos usar ese mismo componente en otro proyecto, podemos reutilizarlo sin necesidad de volver a escribirlo desde cero.

¿De qué forma manipularon los datos sin recargar la página?

Utilizamos eventos de JavaScript, específicamente el evento submit del formulario.

Con event.preventDefault() evitamos que la página se recargara al enviar el formulario. Luego capturamos los valores escritos en los inputs usando JavaScript, realizamos los cálculos y actualizamos el contenido del HTML dinámicamente con innerHTML.

De esta manera, el usuario ve los resultados inmediatamente sin que la página se reinicie.

¿De qué forma validaron las entradas de datos?

Validamos los datos de dos maneras:

Usando el atributo required en los campos obligatorios.

Verificando en JavaScript que los campos no estén vacíos y que los valores numéricos sean mayores a cero.

Si el usuario intenta enviar datos incorrectos o vacíos, se muestra un mensaje de alerta indicando que debe completar correctamente la información.

Esto evita errores en los cálculos y mejora la experiencia del usuario.

¿Cómo manejaría la escalabilidad futura en su página?

Para manejar la escalabilidad futura podríamos:

Separar el código en módulos JavaScript.

Agregar almacenamiento en LocalStorage para guardar los datos.

Conectar la página a una base de datos.

Implementar más WebComponents para dividir mejor la estructura.

Agregar autenticación de usuarios.

De esta forma, el proyecto podría evolucionar fácilmente hacia una aplicación web más completa.
