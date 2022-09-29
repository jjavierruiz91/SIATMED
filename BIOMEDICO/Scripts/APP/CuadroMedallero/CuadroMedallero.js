
var ObjCuadroMedallero = {
    CuadroMedalleroDeport: {},//{objetos} llaves y [array] corchetes

}




//var validadorFormDeportista = [];
var IsUpdate = false;
var IdCuadroMedalleroData = 0;

var VerDetalles = 'NO';
$(document).ready(function () {//FUNCION INICIAL;
    IdCuadroMedalleroData = getQueryVariable('IdDeporteReg');
    let Actualizar = getQueryVariable('IsUpdate');
    VerDetalles = getQueryVariable('Viewdetail');
    if (IdCuadroMedalleroData > 0) {
        IsUpdate = true;
    }

    //if (cedulaPaciente > 0) {
    //    $('#Cedula').val(cedulaPaciente);
    //    CargarInfoinicial();
    //}
    //esconde_elemento('ImagenNutricionDeport')
    if (VerDetalles == "SI") {
        $('#SaveCuadroMedallero').html('Atras')
        Get_Data(LlenarCampos, '/CuadroMedallero/GetCuadroMedalleroDeportById?IdCuadroMedalleroDepor=' + IdCuadroMedalleroData);
        //    visible_elemento('ImagenNutricionDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveCuadroMedallero').html('Actualizar')
        Get_Data(LlenarCampos, '/CuadroMedallero/GetCuadroMedalleroDeportById?IdCuadroMedalleroDepor=' + IdCuadroMedalleroData);
    }
});

//function CargarInfoinicial() {
//    var Valuecedula = $('#Cedula').val();
//    Get_Data(LlenarcamposInicial, '/ControlNutricion/BuscarDeportista?cedula=' + Valuecedula)
//}

function LlenarCampos(data) {

    $('#IdCuadroMedallero').val(data.objeto.IdCuadroMedallero)
    $('#DeporteMedallero').val(data.objeto.DeporteMedallero)
    $('#MedallaOro').val(data.objeto.MedallaOro)
    $('#MedallaPlata').val(data.objeto.MedallaPlata)
    $('#MedallaBronce').val(data.objeto.MedallaBronce)
    $('#CategoriaMedallero').val(data.objeto.CategoriaMedallero)
    $('#DeportistaMedallero').val(data.objeto.DeportistaMedallero)
    $('#EventoMedallero').val(data.objeto.EventoMedallero)
    
    $('#FechaMedallero').val(JSONDateconverter(data.objeto.FechaMedallero))

    $('#PruebaMedallero').val(data.objeto.PruebaMedallero)
    $('#Marca').val(data.objeto.Marca)
    
}

function getQueryVariable(variable) {//saca los valores de la uRL
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

function Createobj() {
    document.getElementById("SaveCuadroMedallero").disabled = true;

    // if (validadorFormMedicinaDeportiva.form()) {
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        //var test = $('#NumIde').val();
        //var IdCuadroMedallero = 0;
        if (IsUpdate) {
            IdCuadroMedallero = IdCuadroMedalleroData;

        }

    }
    //const file = document.querySelector('#AnexosNutricion').files[0];
    ObjCuadroMedallero = {
        CuadroMedalleroDeport: {
            
            IdCuadroMedallero: IdCuadroMedalleroData,
            DeporteMedallero: $('#DeporteMedallero').val(),
            MedallaOro: $('#MedallaOro').val(),
            MedallaPlata: $('#MedallaPlata').val(),
            MedallaBronce: $('#MedallaBronce').val(),
            CategoriaMedallero: $('#CategoriaMedallero').val(),
            DeportistaMedallero: $('#DeportistaMedallero').val(),
            EventoMedallero: $('#EventoMedallero').val(),
            FechaMedallero: $('#FechaMedallero').val(),
            PruebaMedallero: $('#PruebaMedallero').val(),
            Marca: $('#Marca').val(),
        },

    }
    let id = 10;

    if (IsUpdate) {
        Save_Data(ActualizarVista, '/CuadroMedallero/Actualizar', ObjCuadroMedallero, 'Actualizacion');
    }
    else {
        Save_Data(ActualizarVista, '/CuadroMedallero/Agregar', ObjCuadroMedallero, 'Guardado');

        // LimpiarFormulario()
    }

    //} else {
    //    SwalErrorMsj("No ingreso todos los campos por favor verifique");
    //}

}


function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../CuadroMedallero/ListaCuadroMedallero";
    }
}





function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/CuadroMedallero/GetListCuadroMedallero');
}

//const toBase64 = file => new Promise((resolve, reject) => {
//    const reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = () => resolve(reader.result);
//    reader.onerror = error => reject(error);
//});