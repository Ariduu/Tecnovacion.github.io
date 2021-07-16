// Botones de movimiento
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    document.querySelector('.botonContainer')
      .classList.add('show')
  }
  else {
    document.querySelector('.botonContainer')
      .classList.remove('show')
  }
}

// Funcion d los botones
document.querySelector('.botonContainer').addEventListener('click', () => { window.scrollTo({ top: 0 }) })
document.querySelector('.verMas input').addEventListener('click', () => { window.scrollTo({ top: 740 }) })

// Para ordenar publicaciones
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

// Efecto de transicion para cuando la pagina este cargada
window.addEventListener('load', () => 
{
  grid.refreshItems().layout();
  document.getElementById('inicio').classList.add('cargado');
  document.getElementById('noticias').classList.add('cargado');
  
  // Filtrado de catgorias
  const enlaces = document.querySelectorAll('#secciones a');
  enlaces.forEach( (elemento) => 
  {
    elemento.addEventListener('click', (event) => 
    {
      event.preventDefault();
      enlaces.forEach( (enlace) => enlace.classList.remove('activo'));
      event.target.classList.add('activo');

      const categoria = event.target.innerHTML.toLowerCase();
      //grid.filter(`[data-categoria = "${categoria}"]`);
    })
  })
  document.querySelector('#barraBusqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});
});



