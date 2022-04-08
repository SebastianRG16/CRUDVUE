window.addEventListener('load', () => {
    const vm = new Vue({

        el: '#app',
        data: {

            id : '',
            nombre : '',
            anio : '',
            precio : '',
            cantidad : '',
            descripcion : '',
            formActualizar : false,
            idActualizar : -1,
            nombreActualizar : '',
            anioActualizar : '',
            precioActualizar : '',
            cantidadActualizar : '',
            descripcionActualizar : '',
            peliculas : [],
            nuevaPelicula : ''

            
        },

        methods: {
            agregarPelicula: function(){
                this.peliculas.push({
                    id: this.id,
                    nombre: this.nombre,
                    anio: this.anio,
                    precio: this.precio,
                    cantidad: this.cantidad,
                    descripcion: this.descripcion
                });
                this.id = '';
                this.nombre = '';
                this.anio = '';
                this.precio = '';
                this.cantidad = '';
                this.descripcion = '';

                swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Registro guardado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            },    
            
            btnEditar: function(index){
                
                this.idActualizar = index;
                this.nombreActualizar = this.peliculas[index].nombre;
                this.anioActualizar = this.peliculas[index].anio;
                this.precioActualizar = this.peliculas[index].precio;
                this.cantidadActualizar = this.peliculas[index].cantidad;
                this.descripcionActualizar = this.peliculas[index].descripcion;
                
                this.formActualizar = true;

            },
                    
            eliminar: function(index){
                this.peliculas.splice(index, 1);
            },
            guardarActualizacion: function (index) {
        
                this.formActualizar = false;
               
                this.peliculas[index].nombre = this.nombreActualizar;
                this.peliculas[index].anio = this.anioActualizar;
                this.peliculas[index].precio = this.precioActualizar;
                this.peliculas[index].cantidad = this.cantidadActualizar;
                this.peliculas[index].descripcion = this.descripcionActualizar;
            }

        }
        }
    );  
});