export const revisarPresupuesto = (presuesto, restante) => {
    let clase;

    if((presuesto / 4>restante)){
        clase = 'alert alert-danger';


    }else if ( (presuesto/2) > restante ){
        clase = 'alert alert-warning';

    }else {
        clase = 'alert alert-success';
    }
    return clase;
}