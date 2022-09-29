var ObjPlanPlanGymColiseo = {
    GymColiseoDeport: {} //{objetos} llaves y [array] corchetes
    
   
}

  
var validadorFormDeportista = [];
var IsUpdate = false;
var IdGymColiseoData = 0;
var IdEstudiosEntrenador = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdGymColiseoData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdGymColiseoData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveGymColiseo').html('Atras')
        Get_Data(LlenarCampos, '/GymColiseo/GetPlanPlanGymColiseoById?IdGymColiseo=' + IdGymColiseoData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveGymColiseo').html('Actualizar')
        Get_Data(LlenarCampos, '/GymColiseo/GetPlanPlanGymColiseoById?IdGymColiseo=' + IdGymColiseoData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {
   

    $('#IdGymColiseo').val(data.objeto.IdGymColiseo);
    $('#DeporteGymColiseo').val(data.objeto.DeporteGymColiseo);
    $('#CategoriaGymColiseo').val(data.objeto.CategoriaGymColiseo);
    $('#TelefonoGymColiseo').val(data.objeto.TelefonoGymColiseo);
    $('#EntrenadorGymColiseo').val(data.objeto.EntrenadorGymColiseo);
    $('#HoraInicioGymColiseo').val(data.objeto.HoraInicioGymColiseo);
    $('#HoraFinalGymColiseo').val(data.objeto.HoraFinalGymColiseo);
    $('#FechaGymColiseo').val(data.objeto.FechaGymColiseo);
    $('#FirmaEntrenador').val(data.objeto.FirmaEntrenador);
  
            

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
    document.getElementById("SaveGymColiseo").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdGymColiseo = 0;
        if (IsUpdate) {
            IdGymColiseo = IdGymColiseoData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjPlanPlanGymColiseo = {
            GymColiseoDeport: {

                IdGymColiseo: IdGymColiseo,
                DeporteGymColiseo: $('#DeporteGymColiseo').val(),
                CategoriaGymColiseo: $('#CategoriaGymColiseo').val(),
                TelefonoGymColiseo: $('#TelefonoGymColiseo').val(),
                EntrenadorGymColiseo: $('#EntrenadorGymColiseo').val(),
                HoraInicioGymColiseo: $('#HoraInicioGymColiseo').val(),
                HoraFinalGymColiseo: $('#HoraFinalGymColiseo').val(),
                FechaGymColiseo: $('#FechaGymColiseo').val(),
                FirmaEntrenador: $('#FirmaEntrenador').val(),

            }
            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/GymColiseo/Actualizar', ObjPlanPlanGymColiseo, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/GymColiseo/Agregar', ObjPlanPlanGymColiseo, 'Guardado');

            // LimpiarFormulario()
        }

    }





function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../GymColiseo/ListaGymColiseo?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/GymColiseo/GetListGymColiseo');
}

