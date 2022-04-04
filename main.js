window.addEventListener('load', () => {
    const vm = new Vue({

        el: '#appPeliculas',
        data: {
            totalPeliculas : 5,
            peliculas : [{
                id: 1,
                nombre: 'Buscando  a Nemo',
                anio: '2003',
                precio : '$1.000',
                cantidad : '7',
                descripcion : 'Pelicula animada'
            },
            {
                id: 2,
                nombre: 'El señor de los anillos',
                anio: '2002',
                precio : '$5.000',
                cantidad : '3',
                descripcion : 'Pelicula de ficcion'
            },
            {
                id: 3,
                nombre: 'El detective cantante',
                anio: '1986',
                precio : '$7.000',
                cantidad : '57',
                descripcion : 'Pelicula accion'
            },
            {
                id: 4,
                nombre: 'La guerra de las galaxias',
                anio: '1997',
                precio : '$6.000',
                cantidad : '23',
                descripcion : 'Pelicula de ficcion'

            },
            {
                id: 5,
                nombre: 'Uno de los nuestros',
                anio: '1990',
                precio : '$13.000',
                cantidad : '16',
                descripcion : 'Pelicula de accion'
            }
            ],
        },

        methods: {
                btnAlta:async function(){
                const { value: formValues } = await Swal.fire({
                    title: 'AGREGAR PELICULA',
                    html:
                      '<input id="swal-input1" class="swal2-input" placeholder="Id">'+
                      '<input id="swal-input2" class="swal2-input" placeholder="Nombre">'+
                      '<input id="swal-input3" class="swal2-input" placeholder="Anio">'+
                      '<input id="swal-input4" class="swal2-input" placeholder="Precio">'+
                      '<input id="swal-input5" class="swal2-input" placeholder="Cantidad">'+
                      '<input id="swal-input6" class="swal2-input" placeholder="Descripción">',
                      
                    focusConfirm: false,
                    showCancelButton: true,
                    preConfirm: () => {
                      return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value,
                        document.getElementById('swal-input3').value,
                        document.getElementById('swal-input4').value,
                        document.getElementById('swal-input5').value,
                        document.getElementById('swal-input6').value
                        
                      ]
                    }
                  })

                  if (formValues) {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Registro guardado exitosamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                  }
            },
            
             btnEditar: async function(pelicula){
                const { value: formValues } = await Swal.fire({
                     title: 'EDITAR PELICULA',
                     html:
                         '<input id="swal-input1" class="swal2-input" value="'+pelicula.nombre+'">'+
                         '<input id="swal-input2" class="swal2-input" value="'+pelicula.anio+'">'+
                         '<input id="swal-input3" class="swal2-input" value="'+pelicula.precio+'">' +
                         '<input id="swal-input4" class="swal2-input" value="'+pelicula.cantidad+'">' +
                         '<input id="swal-input5" class="swal2-input" value="'+pelicula.descripcion+'">',

                     focusConfirm: false,
                     showCancelButton: true,    
                    
                     preConfirm: () => {
                      
                    }
                })
                 if (formValues) {
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Registro guardado exitosamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                  }

             },
             
                btnEliminar: async function(pelicula){
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Datos eliminados correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            


        }
    

        }



    );

    
});

Swal.fire({
    title: 'BIENVENIDO',
});
