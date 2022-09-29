
var ObjIdRolDeporte = {
    RolDeporteDeport: {},//{objetos} llaves y [array] corchetes

}



//var validadorFormDeportista = [];
var IsUpdate = false;
var IdDeporteData = 0;

var VerDetalles = 'NO';
$(document).ready(function () {//FUNCION INICIAL;
    IdDeporteData = getQueryVariable('IdDeporteReg');
    //let cedulaPaciente = getQueryVariable('Ced');
    //IdCitaMedica = getQueryVariable('IdReg');
    let Actualizar = getQueryVariable('IsUpdate');
    VerDetalles = getQueryVariable('Viewdetail');
    if (IdDeporteData > 0) {
        IsUpdate = true;
    }

    //if (cedulaPaciente > 0) {
    //    $('#Cedula').val(cedulaPaciente);
    //    CargarInfoinicial();
    //}
    //esconde_elemento('ImagenNutricionDeport')
    if (VerDetalles == "SI") {
        $('#SaveRolDeporte').html('Atras')
        Get_Data(LlenarCampos, '/RolDeporte/GetRolDeporteById?IdRolDeporte=' + IdDeporteData);
        //    visible_elemento('ImagenNutricionDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveRolDeporte').html('Actualizar')
        Get_Data(LlenarCampos, '/RolDeporte/GetRolDeporteById?IdRolDeporte=' + IdDeporteData);
    }
});

//function CargarInfoinicial() {
//    var Valuecedula = $('#Cedula').val();
//    Get_Data(LlenarcamposInicial, '/ControlNutricion/BuscarDeportista?cedula=' + Valuecedula)
//}

function LlenarCampos(data) {

    $('#IdRolDeporte').val(data.objeto.IdRolDeporte)
    $('#NombreDeporte').val(data.objeto.NombreDeporte)
    $('#NomRol').val(data.objeto.NomRol)
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
    document.getElementById("SaveRolDeporte").disabled = true;

    // if (validadorFormMedicinaDeportiva.form()) {
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        //var test = $('#NumIde').val();
        //var IdRolDeporte = 0;
        if (IsUpdate) {
            IdRolDeporte = IdDeporteData;

        }

    }
    //const file = document.querySelector('#AnexosNutricion').files[0];
    ObjIdRolDeporte = {
        RolDeporteDeport: {
            
            IdRolDeporte: IdDeporteData,
            NombreDeporte: $('#NombreDeporte').val(),
            NomRol: $('#NomRol').val(), 
        },
        

    }
    let id = 10;

    if (IsUpdate) {
        Save_Data(ActualizarVista, '/RolDeporte/Actualizar', ObjIdRolDeporte, 'Actualizacion');
    }
    else {
        Save_Data(ActualizarVista, '/RolDeporte/Agregar', ObjIdRolDeporte, 'Guardado');

        // LimpiarFormulario()
    }

    //} else {
    //    SwalErrorMsj("No ingreso todos los campos por favor verifique");
    //}

}


function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../RolDeporte/ListaRolDeporte";
    }
}


//function LimpiarFormulario() {
//    $('#CodFisioterapi').val('')
//    $('#CodFisioterapi').val('')
//    $('#Lesion').val('')
//    $('#cual').val('')
//    $('#NumIdentificacion').val('')
//    $('#IdAntecedentesfisi').val('')
//    $('#Patologicos').val('')
//    $('#Quirurgicos').val('')
//    $('#Traumaticos').val('')
//    $('#Farmacologicos').val('')
//    $('#Familiares').val('')
//    $('#DiagnosticoMedico').val('')
//    $('#MotivoConsultar').val('')
//    $('#DolorFisio').val('')
//    $('#EdemaFisio').val('')
//    $('#AlteradaFisio').val('')
//    $('#NoAlteradaFisio').val('')
//    $('#Screenmifisio').val('')
//    $('#DesempeñoMuscularFisio').val('')
//    $('#PosturaFisio').val('')
//    $('#ValoracionInicial').val('')
//    $('#FechaTratamiento').val('')
//    $('#PlanTrata').val('')
//    $('#Evolucion').val('')

//}


function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/RolDeporte/GetListRolDeporte');
}

//const toBase64 = file => new Promise((resolve, reject) => {
//    const reader = new FileReader();
//    reader.readAsDataURL(file);
//    reader.onload = () => resolve(reader.result);
//    reader.onerror = error => reject(error);
//});