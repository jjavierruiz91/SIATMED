var ObjPlanGymEstadio = {
    GymEstadioDeport: {} //{objetos} llaves y [array] corchetes
    
   
}
 
  
var validadorFormDeportista = [];
var IsUpdate = false;
var IdGymEstadioData = 0;
var IdEstudiosEntrenador = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdGymEstadioData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdGymEstadioData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveGymEstadio').html('Atras')
        Get_Data(LlenarCampos, '/GymEstadio/GetPlanGymEstadioById?IdGymEstadio=' + IdGymEstadioData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveGymEstadio').html('Actualizar')
        Get_Data(LlenarCampos, '/GymEstadio/GetPlanGymEstadioById?IdGymEstadio=' + IdGymEstadioData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {
   

    $('#IdGymEstadio').val(data.objeto.IdGymEstadio);
    $('#DeporteGymEstadio').val(data.objeto.DeporteGymEstadio);
    $('#CategoriaGymEstadio').val(data.objeto.CategoriaGymEstadio);
    $('#TelefonoGymEstadio').val(data.objeto.TelefonoGymEstadio);
    $('#EntrenadorGymEstadio').val(data.objeto.EntrenadorGymEstadio);
    $('#HoraInicioGymEstadio').val(data.objeto.HoraInicioGymEstadio);
    $('#HoraFinalGymEstadio').val(data.objeto.HoraFinalGymEstadio);
    $('#FechaGymEstadio').val(data.objeto.FechaGymEstadio);
    
            

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
    document.getElementById("SaveGymEstadio").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdGymEstadio = 0;
        if (IsUpdate) {
            IdGymEstadio = IdGymEstadioData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjPlanGymEstadio = {
            GymEstadioDeport: {

                IdGymEstadio: IdGymEstadio,
               
              

                DeporteGymEstadio: $('#DeporteGymEstadio').val(),
                CategoriaGymEstadio: $('#CategoriaGymEstadio').val(),
                TelefonoGymEstadio: $('#TelefonoGymEstadio').val(),
                EntrenadorGymEstadio: $('#EntrenadorGymEstadio').val(),
                HoraInicioGymEstadio: $('#HoraInicioGymEstadio').val(),
                HoraFinalGymEstadio: $('#HoraFinalGymEstadio').val(),
                FechaGymEstadio: $('#FechaGymEstadio').val(),

            }
            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/GymEstadio/Actualizar', ObjPlanGymEstadio, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/GymEstadio/Agregar', ObjPlanGymEstadio, 'Guardado');

            // LimpiarFormulario()
        }

    }





function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../GymEstadio/ListaGymEstadio?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/GymEstadio/GetListGymEstadio');
}

