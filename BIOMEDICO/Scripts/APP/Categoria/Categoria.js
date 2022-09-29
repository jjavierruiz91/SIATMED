var ObjCategoria  = {
    CategoriaDeport: {},
    
}
var IsUpdate = false;
var IdCategoriaData  = 0;
var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdCategoriaData  = getQueryVariable('IdCategoriaReg');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdCategoriaData  > 0) {
        IsUpdate = true;
    }
    if (VerDetalles == "SI") {
        $('#SaveCategoria').html('Atras')
        Get_Data(LlenarCampos, '/Categoria/GetCategoriaById?IdCategoriaDepor=' + IdCategoriaData );
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveCategoria').html('Actualizar')
        Get_Data(LlenarCampos, '/Categoria/GetCategoriaById?IdCategoriaDepor=' + IdCategoriaData );
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});



function LlenarCampos(data) {

    $('#IdCategoria').val(data.objeto.IdCategoria)
    $('#Deporte').val(data.objeto.Deporte)
    $('#NomCategoria').val(data.objeto.NomCategoria)
    $('#DescripcionCategoria').val(data.objeto.DescripcionCategoria)

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
    document.getElementById("SaveCategoria").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdCategoria  = 0;
        if (IsUpdate) {
            IdCategoria  = IdCategoriaData ;
        }
        //console.log(await toBase64(file));
        ObjCategoria  = {
            CategoriaDeport: {
                IdCategoria: IdCategoriaData,
                Deporte: $('#Deporte').val(),
                NomCategoria: $('#NomCategoria').val(),
                DescripcionCategoria: $('#DescripcionCategoria').val(),

            },
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/Categoria/Actualizar', ObjCategoria , 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/Categoria/Agregar', ObjCategoria , 'Guardado');

            // LimpiarFormulario()
        }

    }



}

function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../Categoria/ListaCategoria?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/Categoria/GetListCategoria');
}


