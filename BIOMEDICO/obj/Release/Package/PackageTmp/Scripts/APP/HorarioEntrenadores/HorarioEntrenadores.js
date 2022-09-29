var ObjHorarioEntrenadores = {
    HorarioEntrenadoresDeport: {} //{objetos} llaves y [array] corchetes
    
   
}

  
var validadorFormDeportista = [];
var IsUpdate = false;
var IdHorarioEntrenadoresData = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdHorarioEntrenadoresData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdHorarioEntrenadoresData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveHorarioEntrenadores').html('Atras')
        Get_Data(LlenarCampos, '/HorarioEntrenadores/GetPlanPlanHorarioEntrenadoresById?IdHorarioEntrenadores=' + IdHorarioEntrenadoresData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveHorarioEntrenadores').html('Actualizar')
        Get_Data(LlenarCampos, '/HorarioEntrenadores/GetPlanPlanHorarioEntrenadoresById?IdHorarioEntrenadores=' + IdHorarioEntrenadoresData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {
   

    $('#IdHorarioEntrenadores').val(data.objeto.IdHorarioEntrenadores);
    $('#DeporteHorarioEntrenadores').val(data.objeto.DeporteHorarioEntrenadores);
    $('#EscenariosHorarioEntrenadores').val(data.objeto.EscenariosHorarioEntrenadores);
    $('#EntrenadorHorarioEntrenadores').val(data.objeto.EntrenadorHorarioEntrenadores);
    $('#TelefonoHorarioEntrenadores').val(data.objeto.TelefonoHorarioEntrenadores);
    $('#HoraInicioHorarioEntrenadores').val(data.objeto.HoraInicioHorarioEntrenadores);
    $('#HoraFinalHorarioEntrenadores').val(data.objeto.HoraFinalHorarioEntrenadores);
    $('#FechaHorEntrenadores').val(data.objeto.FechaHorEntrenadores);
    
        

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
    document.getElementById("SaveHorarioEntrenadores").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdHorarioEntrenadores = 0;
        if (IsUpdate) {
            IdHorarioEntrenadores = IdHorarioEntrenadoresData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjHorarioEntrenadores = {
            HorarioEntrenadoresDeport: {

                IdHorarioEntrenadores: IdHorarioEntrenadores,
                DeporteHorarioEntrenadores: $('#DeporteHorarioEntrenadores').val(),
                EscenariosHorarioEntrenadores: $('#EscenariosHorarioEntrenadores').val(),
                EntrenadorHorarioEntrenadores: $('#EntrenadorHorarioEntrenadores').val(),
                TelefonoHorarioEntrenadores: $('#TelefonoHorarioEntrenadores').val(),
                HoraInicioHorarioEntrenadores: $('#HoraInicioHorarioEntrenadores').val(),
                HoraFinalHorarioEntrenadores: $('#HoraFinalHorarioEntrenadores').val(),
                FechaHorEntrenadores: $('#FechaHorEntrenadores').val(),

            }
            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/HorarioEntrenadores/Actualizar', ObjHorarioEntrenadores, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/HorarioEntrenadores/Agregar', ObjHorarioEntrenadores, 'Guardado');

            // LimpiarFormulario()
        }

    }





function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../HorarioEntrenadores/ListaHorarioEntrenadores?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/HorarioEntrenadores/GetListHorarioEntrenadores');
}

