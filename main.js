function bienvenida(){
    while(true){
        let mayoria = prompt('Indique si es mayor de edad, por favor [ si / no ].(solo en minusculas)')  
            if (mayoria == '' && mayoria == null || mayoria != 'si' && mayoria != 'no'){
                alert('Por favor, indique si cumple con la mayoría de edad.');
            } else if (mayoria == 'no'){
                alert('Solo si cumple la mayoría de edad puede realizar compras en Ferretería Random, usted esta entrando bajo su propia responsabilidad.');
                break;
            } else {
                alert('Bienvenido a la tienda de Ferretería Random');
                break;
            }
            }
    }

bienvenida();
