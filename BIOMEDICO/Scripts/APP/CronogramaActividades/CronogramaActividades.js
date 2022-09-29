var ObjCronogramaActividades = {
    CronogramaActividadesDeport: {} //{objetos} llaves y [array] corchetes
    
   
}

var validadorFormDeportista = [];
var IsUpdate = false;
var IdCronogramaActividadesSemanalesData = 0;
var IdEstudiosEntrenador = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdCronogramaActividadesSemanalesData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdCronogramaActividadesSemanalesData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveCronogramActividades').html('Atras')
        Get_Data(LlenarCampos, '/CronogramaActividades/GetCronogramaActividadesExisteById?IdCronogramaActividadesSemanales=' + IdCronogramaActividadesSemanalesData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveCronogramActividades').html('Actualizar')
        Get_Data(LlenarCampos, '/CronogramaActividades/GetCronogramaActividadesExisteById?IdCronogramaActividadesSemanales=' + IdCronogramaActividadesSemanalesData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {
   

    $('#IdCronogramaActividadesSemanales').val(data.objeto.IdCronogramaActividadesSemanales);
    $('#EntrenadorActividadesSemanales').val(data.objeto.EntrenadorActividadesSemanales);
    $('#DeporteActividadesSemanales').val(data.objeto.DeporteActividadesSemanales);
    $('#SemanadelActividadesSemanales').val(data.objeto.SemanadelActividadesSemanales);
    $('#SemanaHastaActividadesSemanales').val(data.objeto.SemanaHastaActividadesSemanales);
    $('#ActividadActividadesSemanales').val(data.objeto.ActividadActividadesSemanales);
    $('#HoraActividadesSemanales').val(data.objeto.HoraActividadesSemanales);
    $('#LugarActividadesSemanales').val(data.objeto.LugarActividadesSemanales);    
    $('#FechaActividadesSemanales').val(data.objeto.FechaActividadesSemanales);
    $('#EventoActividadesSemanales').val(data.objeto.EventoActividadesSemanales);
    $('#VisitaBiomedicoActividadesSemanales').val(data.objeto.VisitaBiomedicoActividadesSemanales);
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
    document.getElementById("SaveCronogramActividades").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdCronogramaActividadesSemanales = 0;
        if (IsUpdate) {
            IdCronogramaActividadesSemanales = IdCronogramaActividadesSemanalesData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjCronogramaActividades = {
            CronogramaActividadesDeport: {

                IdCronogramaActividadesSemanales: IdCronogramaActividadesSemanales,
                EntrenadorActividadesSemanales: $('#EntrenadorActividadesSemanales').val(),
                DeporteActividadesSemanales: $('#DeporteActividadesSemanales').val(),
                SemanadelActividadesSemanales: $('#SemanadelActividadesSemanales').val(),
                SemanaHastaActividadesSemanales: $('#SemanaHastaActividadesSemanales').val(),
                ActividadActividadesSemanales: $('#ActividadActividadesSemanales').val(),
                HoraActividadesSemanales: $('#HoraActividadesSemanales').val(),
                LugarActividadesSemanales: $('#LugarActividadesSemanales').val(),
                FechaActividadesSemanales: $('#FechaActividadesSemanales').val(),
                EventoActividadesSemanales: $('#EventoActividadesSemanales').val(),
                VisitaBiomedicoActividadesSemanales: $('#VisitaBiomedicoActividadesSemanales').val(),
                FirmaEntrenador: $('#FirmaEntrenador').val(),
                      



                    }
            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/CronogramaActividades/Actualizar', ObjCronogramaActividades, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/CronogramaActividades/Agregar', ObjCronogramaActividades, 'Guardado');

            // LimpiarFormulario()
        }

    }





function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../CronogramaActividades/ListaCronogramaActividades?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/CronogramaActividades/GetListCronogramaActividades');
}


