//ejercicio 1
const textarea = document.getElementById('comentario');
const contador = document.getElementById('contador-caracteres');

textarea.addEventListener('input', function() {
    const restantes = 200 - this.value.length;
    contador.textContent = restantes;
});

//ejercicio 2
const miniaturas = document.querySelectorAll('.miniaturas img');
const vistaPrevia = document.getElementById('vista-previa');
const descripcion = document.getElementById('descripcion-proyecto');

miniaturas.forEach(img => {
    img.addEventListener('mouseover', function() {
        vistaPrevia.src = this.dataset.preview;
        vistaPrevia.style.display = 'block';
        descripcion.textContent = this.dataset.desc;
        descripcion.style.display = 'block';
    });
});

//ejercicio 3
const inputTarea = document.getElementById('inputTarea');
const addTarea = document.getElementById('addTarea');
const listaTareas = document.getElementById('listaTareas');

function agregarTarea() {
    const texto = inputTarea.value.trim();
    if (!texto) return;
    
    const li = document.createElement('li');
    li.className = 'tarea';
    li.innerHTML = `
        <span>${texto}</span>
        <div class="acciones-tarea">
            <button onclick="this.parentElement.parentElement.classList.toggle('completada')">✓</button>
            <button onclick="this.parentElement.parentElement.remove()">✗</button>
        </div>
    `;
    
    listaTareas.appendChild(li);
    inputTarea.value = '';
}

addTarea.addEventListener('click', agregarTarea);
inputTarea.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') agregarTarea();
});