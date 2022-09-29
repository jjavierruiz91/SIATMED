var ObjPlanEntrenamiento = {
    PlanEntrenamientoDeport: {} //{objetos} llaves y [array] corchetes
    
   
}
  
var validadorFormDeportista = [];
var IsUpdate = false;
var IdPlanEntrenaminetoData = 0;
var IdEstudiosEntrenador = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdPlanEntrenaminetoData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdPlanEntrenaminetoData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SavePlanEntrenamiento').html('Atras')
        Get_Data(LlenarCampos, '/EntrenamientoMensual/GetPlanEntrenamientoById?IdPlanEntrenaminetoDepor=' + IdPlanEntrenaminetoData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SavePlanEntrenamiento').html('Actualizar')
        Get_Data(LlenarCampos, '/EntrenamientoMensual/GetPlanEntrenamientoById?IdPlanEntrenaminetoDepor=' + IdPlanEntrenaminetoData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {
   

    $('#IdPlanEntrenamientoMensual').val(data.objeto.IdPlanEntrenamientoMensual);
    $('#NumIdentificacionDeportista').val(data.objeto.NumIdentificacionDeportista);
    $('#NombreDeportista').val(data.objeto.NombreDeportista);
    $('#Entrenador').val(data.objeto.Entrenador);
    $('#Deporte').val(data.objeto.Deporte);
    $('#Agrupacion').val(data.objeto.Agrupacion);
    $('#Categoria').val(data.objeto.Categoria);
    $('#Modalidad').val(data.objeto.Modalidad);
    $('#Mes').val(data.objeto.Mes);
    $('#Año').val(data.objeto.Año);
    $('#Metodologo').val(data.objeto.Metodologo);
    $('#FechaEntregaActa').val(data.objeto.FechaEntregaActa);
    $('#Preparacionfisica').val(data.objeto.Preparacionfisica);
    $('#PreparacionTecnica').val(data.objeto.PreparacionTecnica);
    $('#PreparacionTactica').val(data.objeto.PreparacionTactica);
    $('#ObjetivosParciales').val(data.objeto.ObjetivosParciales);
    $('#FirmaEntrenador').val(data.objeto.FirmaEntrenador);
    $('#FirmaMetodologo').val(data.objeto.FirmaMetodologo);
 

}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return 0;
}

function Atras() {
    window.history.back();
}
async function Createobj() {
    document.getElementById("SavePlanEntrenamiento").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdPlanEntrenamientoMensual = 0;
        if (IsUpdate) {
            IdPlanEntrenamientoMensual = IdPlanEntrenaminetoData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjPlanEntrenamiento = {
            PlanEntrenamientoDeport: {

                IdPlanEntrenamientoMensual: IdPlanEntrenamientoMensual,
                NumIdentificacionDeportista: $('#NumIdentificacionDeportista').val(),
                NombreDeportista: $('#NombreDeportista').val(),
                Entrenador: $('#Entrenador').val(),
                Deporte: $('#Deporte').val(),
                Agrupacion: $('#Agrupacion').val(),
                Categoria: $('#Categoria').val(),
                Modalidad: $('#Modalidad').val(),
                Mes: $('#Mes').val(),
                Año: $('#Año').val(),
                Metodologo: $('#Metodologo').val(),
                FechaEntregaActa: $('#FechaEntregaActa').val(),
                Preparacionfisica: $('#Preparacionfisica').val(),
                PreparacionTecnica: $('#PreparacionTecnica').val(),
                PreparacionTactica: $('#PreparacionTactica').val(),
                ObjetivosParciales: $('#ObjetivosParciales').val(),
                FirmaEntrenador: $('#FirmaEntrenador').val(),
                FirmaMetodologo: $('#FirmaMetodologo').val(),
               
                    }
            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/EntrenamientoMensual/Actualizar', ObjPlanEntrenamiento, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/EntrenamientoMensual/Agregar', ObjPlanEntrenamiento, 'Guardado');

            // LimpiarFormulario()
        }

    }





function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../EntrenamientoMensual/ListaEntrenamientoMensual?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/EntrenamientoMensual/GetListAnalisMacroMensual');
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
