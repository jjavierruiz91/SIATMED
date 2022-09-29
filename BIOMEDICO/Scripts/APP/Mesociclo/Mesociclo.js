var ObjMesociclo = {
    MesocicloDeport: {}, //{objetos} llaves y [array] corchetes
    MesocicloDatosDeport: {}

}

let ArrayTabla = [];


var validadorFormDeportista = [];
var IsUpdate = false;
var IdMesocicloData = 0;
var IdMesocicloDatos = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdMesocicloData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdMesocicloData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveMesociclo').html('Atras')
        Get_Data(LlenarCampos, '/Mesociclo/GetMesocicloById?IdMesociclo=' + IdMesocicloData);
        //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveMesociclo').html('Actualizar')
        Get_Data(LlenarCampos, '/Mesociclo/GetMesocicloById?IdMesociclo=' + IdMesocicloData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {

    $('#IdMesociclo').val(data.objeto.IdMesociclo);
    $('#Deporte').val(data.objeto.Deporte);
    $('#Deportista').val(data.objeto.Deportista);
    $('#Agrupacion').val(data.objeto.Agrupacion);
    $('#Categoria').val(data.objeto.Categoria);
    $('#Mesociclo1').val(data.objeto.Mesociclo1);
    $('#TipoMesociclo').val(data.objeto.TipoMesociclo);
    $('#Microciclo').val(data.objeto.Microciclo);
    $('#ObjetivosFisicos').val(data.objeto.ObjetivosFisicos);
    $('#ObjetivosTacticos').val(data.objeto.ObjetivosTacticos);


    
    $('#FirmaEntrenador').val(data.objeto.FirmaEntrenador);
    console.log(data.objeto.MesocicloDatos);
    let p = 0;
    for (var i = 1; i <= data.objeto.MesocicloDatos.length; i++) {
        AgregarRowtemp();
        
        $('#NombreElemento_' + i + '').val(data.objeto.MesocicloDatos[p].NombreElemento);
        $('#Microciclo1').val(data.objeto.MesocicloDatos[p].Microciclo1).trigger('change');
        $('#Microciclo2').val(data.objeto.MesocicloDatos[p].Microciclo2);
        $('#Microciclo3').val(data.objeto.MesocicloDatos[p].Microciclo3);
        $('#Microciclo4').val(data.objeto.MesocicloDatos[p].Microciclo4);
        $('#Plan1_' + i + '').val(data.objeto.MesocicloDatos[p].Plan1);
        $('#Plan2_' + i + '').val(data.objeto.MesocicloDatos[p].Plan2);
        $('#Plan3_' + i + '').val(data.objeto.MesocicloDatos[p].Plan3);
        $('#Plan4_' + i + '').val(data.objeto.MesocicloDatos[p].Plan4);
        $('#Real1_' + i + '').val(data.objeto.MesocicloDatos[p].Real1);
        $('#Real2_' + i + '').val(data.objeto.MesocicloDatos[p].Real2);
        $('#Real3_' + i + '').val(data.objeto.MesocicloDatos[p].Real3);
        $('#Real4_' + i + '').val(data.objeto.MesocicloDatos[p].Real4);
        $('#Dif1_' + i + '').val(data.objeto.MesocicloDatos[p].Dif1);
        $('#Dif2_' + i + '').val(data.objeto.MesocicloDatos[p].Dif2);
        $('#Dif3_' + i + '').val(data.objeto.MesocicloDatos[p].Dif3);
        $('#Dif4_' + i + '').val(data.objeto.MesocicloDatos[p].Dif4);
        $('#Porcentaje1_' + i + '').val(data.objeto.MesocicloDatos[p].Porcentaje1);
        $('#Porcentaje2_' + i + '').val(data.objeto.MesocicloDatos[p].Porcentaje1);
        $('#Porcentaje3_' + i + '').val(data.objeto.MesocicloDatos[p].Porcentaje1);
        $('#Porcentaje4_' + i + '').val(data.objeto.MesocicloDatos[p].Porcentaje1);
        $('#Plateado_' + i + '').val(data.objeto.MesocicloDatos[p].resultadoPLaneado);
        $('#Realizado_' + i + '').val(data.objeto.MesocicloDatos[p].resultadoRealizado);
      
        p++;
    }


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
    document.getElementById("SaveMesociclo").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdMesociclo = 0;
        if (IsUpdate) {
            IdMesociclo = IdMesocicloData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjMesociclo.MesocicloDeport = {

            IdMesociclo: IdMesociclo,
            Deporte: $('#Deportes').val(),

            Deportista: $('#Deportista').val(),
            Agrupacion: $('#Agrupacion').val(),
            Categoria: $('#Categoria').val(),
            Mesociclo1: $('#Mesociclo1').val(),
            TipoMesociclo: $('#TipoMesociclo').val(),
            Microciclo: $('#Microciclo').val(),
            ObjetivosFisicos: $('#ObjetivosFisicos').val(),
            ObjetivosTacticos: $('#ObjetivosTacticos').val(),
            Fecha: $('#Fecha').val(),
            FirmaEntrenador: $('#FirmaEntrenador').val(),


        }


        for (var i = 1; i <= contadortabla; i++) {

            let objTempTabla = {
                IdMesocicloDatos: IdMesocicloDatos,
                NombreElemento: $('#NombreElemento_' + i + '').val(),
                Microciclo1: $('#Microciclo1').val(),
                Microciclo2: $('#Microciclo2').val(),
                Microciclo3: $('#Microciclo3').val(),
                Microciclo4: $('#Microciclo4').val(),
                Plan1: $('#Plan1_' + i + '').val(),
                Plan2: $('#Plan2_' + i + '').val(),
                Plan3: $('#Plan3_' + i + '').val(),
                Plan4: $('#Plan4_' + i + '').val(),
                Real1: $('#Real1_' + i + '').val(),
                Real2: $('#Real2_' + i + '').val(),
                Real3: $('#Real3_' + i + '').val(),
                Real4: $('#Real4_' + i + '').val(),
                Dif1: $('#Dif1_' + i + '').val(),
                Dif2: $('#Dif2_' + i + '').val(),
                Dif3: $('#Dif3_' + i + '').val(),
                Dif4: $('#Dif4_' + i + '').val(),
                Porcentaje1: $('#Porcentaje1_' + i + '').val(),
                Porcentaje2: $('#Porcentaje2_' + i + '').val(),
                Porcentaje3: $('#Porcentaje3_' + i + '').val(),
                Porcentaje4: $('#Porcentaje4_' + i + '').val(),
                resultadoPLaneado: $('#Plateado_' + i + '').val(),
                resultadoRealizado: $('#Realizado_' + i + '').val(),
                IdMesociclo: $('#IdMesocicloDatos').val(),
            }

            ArrayTabla.push(objTempTabla);
        }
        ObjMesociclo.MesocicloDatosDeport = ArrayTabla;

        let id = 10;
        /*console.log(ArrayTabla);*/

        if (IsUpdate) {
            Save_Data(ActualizarVista, '/Mesociclo/Actualizar', ObjMesociclo, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/Mesociclo/Agregar', ObjMesociclo, 'Guardado');

            // LimpiarFormulario()
        }

    }

}



function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../Mesociclo/ListaMesociclo?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/Mesociclo/GetListMesociclo');
}
let contadortabla = 0

function AgregarRow() {
    contadortabla++;
    let ElemtoSelect = $("#NombreElemento").val();
    let Microciclo1Select = $("#Microciclo1").val();
    let Microciclo2Select = $("#Microciclo2").val();
    let Microciclo3Select = $("#Microciclo3").val();
    let Microciclo4Select = $("#Microciclo4").val();



    let DescripElem = $("#NombreElemento :selected").text();
    if (ElemtoSelect == "") {
        alert("SEleccione elemento")
        return;
    }
    let FilaTabla = "";
    FilaTabla += '<tr>';


    FilaTabla += '    <td colspan="3">';
    FilaTabla += '        <input class="form-control" id="NombreElemento_' + contadortabla + '" name="NombreElemento_' + contadortabla + '" value="' + DescripElem + '" disabled/>';
    FilaTabla += '    </td>';

    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan1_' + contadortabla + '" name="Plan1_' + contadortabla + '" onchange="CalcularDef1(' + contadortabla + ')"/>';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real1_' + contadortabla + '" name="Real1_ ' + contadortabla + '" onchange="CalcularDef1(' + contadortabla + ')" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif1_' + contadortabla + '" name="Dif1_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje1_' + contadortabla + '" name="Porcentaje1_' + contadortabla + '" />';
    FilaTabla += '    </td>';



    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan2_' + contadortabla + '" name="Plan2_' + contadortabla + '" onchange="CalcularDef2(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real2_' + contadortabla + '" name="Real2_' + contadortabla + '"onchange="CalcularDef2(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif2_' + contadortabla + '" name="Dif2_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje2_' + contadortabla + '" name="Porcentaje2_' + contadortabla + '" />';
    FilaTabla += '    </td>';



    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan3_' + contadortabla + '" name="Plan3_' + contadortabla + '" onchange="CalcularDef3(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real3_' + contadortabla + '" name="Real3_' + contadortabla + '" onchange="CalcularDef3(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif3_' + contadortabla + '" name="Dif3_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje3_' + contadortabla + '" name="Porcentaje3_' + contadortabla + '" />';
    FilaTabla += '    </td>';



    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan4_' + contadortabla + '" name="Plan4_' + contadortabla + '" onchange="CalcularDef4(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real4_' + contadortabla + '" name="Real4_' + contadortabla + '" onchange="CalcularDef4(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif4_' + contadortabla + '" name="Dif4_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje4_' + contadortabla + '" name="Porcentaje4_' + contadortabla + '" />';
    FilaTabla += '    </td>';


    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plateado_' + contadortabla + '" name="Plateado_' + contadortabla + '" />';
    FilaTabla += '    </td>';

    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Realizado_' + contadortabla + '" name="Realizado_' + contadortabla + '" />';
    FilaTabla += '    </td>';


    FilaTabla += '</tr>';
    $('#PlanillaTable').find('tbody').append(FilaTabla);
    //var table = document.getElementById("");
    //var row = table.getElementsByTagName('tr');
    //for (i = 0; i < row.length; i++) {
    //    row[i].innerHTML = row[i].innerHTML + '<td></td>';
    //}
}

function AgregarRowtemp() {
    contadortabla++;
    

    let FilaTabla = "";
    FilaTabla += '<tr>';


    FilaTabla += '    <td colspan="3">';
    FilaTabla += '        <input class="form-control" id="NombreElemento_' + contadortabla + '" name="NombreElemento_' + contadortabla + '" />';
    FilaTabla += '    </td>';

    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan1_' + contadortabla + '" name="Plan1_' + contadortabla + '" onchange="CalcularDef1(' + contadortabla + ')"/>';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real1_' + contadortabla + '" name="Real1_ ' + contadortabla + '" onchange="CalcularDef1(' + contadortabla + ')" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif1_' + contadortabla + '" name="Dif1_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje1_' + contadortabla + '" name="Porcentaje1_' + contadortabla + '" />';
    FilaTabla += '    </td>';



    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan2_' + contadortabla + '" name="Plan2_' + contadortabla + '" onchange="CalcularDef2(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real2_' + contadortabla + '" name="Real2_' + contadortabla + '"onchange="CalcularDef2(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif2_' + contadortabla + '" name="Dif2_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje2_' + contadortabla + '" name="Porcentaje2_' + contadortabla + '" />';
    FilaTabla += '    </td>';



    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan3_' + contadortabla + '" name="Plan3_' + contadortabla + '" onchange="CalcularDef3(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real3_' + contadortabla + '" name="Real3_' + contadortabla + '" onchange="CalcularDef3(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif3_' + contadortabla + '" name="Dif3_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje3_' + contadortabla + '" name="Porcentaje3_' + contadortabla + '" />';
    FilaTabla += '    </td>';



    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plan4_' + contadortabla + '" name="Plan4_' + contadortabla + '" onchange="CalcularDef4(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Real4_' + contadortabla + '" name="Real4_' + contadortabla + '" onchange="CalcularDef4(' + contadortabla + ')"  />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Dif4_' + contadortabla + '" name="Dif4_' + contadortabla + '" />';
    FilaTabla += '    </td>';
    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Porcentaje4_' + contadortabla + '" name="Porcentaje4_' + contadortabla + '" />';
    FilaTabla += '    </td>';


    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Plateado_' + contadortabla + '" name="Plateado_' + contadortabla + '" />';
    FilaTabla += '    </td>';

    FilaTabla += '    <td colspan="1">';
    FilaTabla += '        <input class="form-control" id="Realizado_' + contadortabla + '" name="Realizado_' + contadortabla + '" />';
    FilaTabla += '    </td>';


    FilaTabla += '</tr>';
    $('#PlanillaTable').find('tbody').append(FilaTabla);
    //var table = document.getElementById("");
    //var row = table.getElementsByTagName('tr');
    //for (i = 0; i < row.length; i++) {
    //    row[i].innerHTML = row[i].innerHTML + '<td></td>';
    //}
}

function CalcularDef1(posicion) {
    let Plan1 = $('#Plan1_' + posicion + '').val();
    let Real1 = $('#Real1_' + posicion + '').val();
    let resultado = parseFloat(Plan1 == "" ? 0 : Plan1) - parseFloat(Real1 == "" ? 0 : Real1);

    let resultadoEfe = parseFloat(Real1 == "" ? 0 : Real1) * (100) / parseFloat(Plan1 == "" ? 0 : Plan1);
    $('#Dif1_' + posicion + '').val(resultado)
    $('#Porcentaje1_' + posicion + '').val(resultadoEfe)

    let Plan2 = $('#Plan2_' + posicion + '').val();
    let Plan3 = $('#Plan3_' + posicion + '').val();
    let Plan4 = $('#Plan4_' + posicion + '').val();
    let resultadoPLaneado = parseFloat(Plan1 == "" ? 0 : Plan1) + parseFloat(Plan2 == "" ? 0 : Plan2) + parseFloat(Plan3 == "" ? 0 : Plan3) + parseFloat(Plan4 == "" ? 0 : Plan4);
    $('#Plateado_' + posicion + '').val(resultadoPLaneado)
    //alert(resultadoPLaneado)//debes crear la coluiman de planeado y el valor se lo pasas alla


    let Real2 = $('#Real2_' + posicion + '').val();
    let Real3 = $('#Real3_' + posicion + '').val();
    let Real4 = $('#Real4_' + posicion + '').val();
    let resultadoRealizado = parseFloat(Real1 == "" ? 0 : Real1) + parseFloat(Real2 == "" ? 0 : Real2) + parseFloat(Real3 == "" ? 0 : Real3) + parseFloat(Real4 == "" ? 0 : Real4);
    $('#Realizado_' + posicion + '').val(resultadoRealizado)
    //    alert(resultadoRealizado)
}

function CalcularDef2(posicion) {
    let Plan2 = $('#Plan2_' + posicion + '').val();
    let Real2 = $('#Real2_' + posicion + '').val();
    let resultado = parseFloat(Plan2 == "" ? 0 : Plan2) - parseFloat(Real2 == "" ? 0 : Real2);

    let resultadoEfe = parseFloat(Real2 == "" ? 0 : Real2) * (100) / parseFloat(Plan2 == "" ? 0 : Plan2);
    $('#Dif2_' + posicion + '').val(resultado)
    $('#Porcentaje2_' + posicion + '').val(resultadoEfe)

    let Plan1 = $('#Plan1_' + posicion + '').val();
    let Plan3 = $('#Plan3_' + posicion + '').val();
    let Plan4 = $('#Plan4_' + posicion + '').val();
    let resultadoPLaneado = parseFloat(Plan1 == "" ? 0 : Plan1) + parseFloat(Plan2 == "" ? 0 : Plan2) + parseFloat(Plan3 == "" ? 0 : Plan3) + parseFloat(Plan4 == "" ? 0 : Plan4);
    $('#Plateado_' + posicion + '').val(resultadoPLaneado)
    //alert(resultadoPLaneado)//debes crear la coluiman de planeado y el valor se lo pasas alla


    let Real1 = $('#Real1_' + posicion + '').val();
    let Real3 = $('#Real3_' + posicion + '').val();
    let Real4 = $('#Real4_' + posicion + '').val();
    let resultadoRealizado = parseFloat(Real1 == "" ? 0 : Real1) + parseFloat(Real2 == "" ? 0 : Real2) + parseFloat(Real3 == "" ? 0 : Real3) + parseFloat(Real4 == "" ? 0 : Real4);
    $('#Realizado_' + posicion + '').val(resultadoRealizado)
    //    alert(resultadoRealizado)
}


function CalcularDef3(posicion) {
    let Plan3 = $('#Plan3_' + posicion + '').val();
    let Real3 = $('#Real3_' + posicion + '').val();
    let resultado = parseFloat(Plan3 == "" ? 0 : Plan3) - parseFloat(Real3 == "" ? 0 : Real3);

    let resultadoEfe = parseFloat(Real3 == "" ? 0 : Real3) * (100) / parseFloat(Plan3 == "" ? 0 : Plan3);
    $('#Dif3_' + posicion + '').val(resultado)
    $('#Porcentaje3_' + posicion + '').val(resultadoEfe)

    let Plan1 = $('#Plan1_' + posicion + '').val();
    let Plan2 = $('#Plan2_' + posicion + '').val();
    let Plan4 = $('#Plan4_' + posicion + '').val();
    let resultadoPLaneado = parseFloat(Plan1 == "" ? 0 : Plan1) + parseFloat(Plan2 == "" ? 0 : Plan2) + parseFloat(Plan3 == "" ? 0 : Plan3) + parseFloat(Plan4 == "" ? 0 : Plan4);
    $('#Plateado_' + posicion + '').val(resultadoPLaneado)
    //alert(resultadoPLaneado)//debes crear la coluiman de planeado y el valor se lo pasas alla


    let Real1 = $('#Real1_' + posicion + '').val();
    let Real2 = $('#Real2_' + posicion + '').val();
    let Real4 = $('#Real4_' + posicion + '').val();
    let resultadoRealizado = parseFloat(Real1 == "" ? 0 : Real1) + parseFloat(Real2 == "" ? 0 : Real2) + parseFloat(Real3 == "" ? 0 : Real3) + parseFloat(Real4 == "" ? 0 : Real4);
    $('#Realizado_' + posicion + '').val(resultadoRealizado)
    //    alert(resultadoRealizado)
}

function CalcularDef4(posicion) {
    let Plan4 = $('#Plan4_' + posicion + '').val();
    let Real4 = $('#Real4_' + posicion + '').val();
    let resultado = parseFloat(Plan4 == "" ? 0 : Plan4) - parseFloat(Real4 == "" ? 0 : Real4);

    let resultadoEfe = parseFloat(Real4 == "" ? 0 : Real4) * (100) / parseFloat(Plan4 == "" ? 0 : Plan4);
    $('#Dif4_' + posicion + '').val(resultado)
    $('#Porcentaje4_' + posicion + '').val(resultadoEfe)

    let Plan1 = $('#Plan1_' + posicion + '').val();
    let Plan2 = $('#Plan2_' + posicion + '').val();
    let Plan3 = $('#Plan3_' + posicion + '').val();
    let resultadoPLaneado = parseFloat(Plan1 == "" ? 0 : Plan1) + parseFloat(Plan2 == "" ? 0 : Plan2) + parseFloat(Plan3 == "" ? 0 : Plan3) + parseFloat(Plan4 == "" ? 0 : Plan4);
    $('#Plateado_' + posicion + '').val(resultadoPLaneado)
    //alert(resultadoPLaneado)//debes crear la coluiman de planeado y el valor se lo pasas alla


    let Real1 = $('#Real1_' + posicion + '').val();
    let Real3 = $('#Real3_' + posicion + '').val();
    let Real2 = $('#Real2_' + posicion + '').val();
    let resultadoRealizado = parseFloat(Real1 == "" ? 0 : Real1) + parseFloat(Real2 == "" ? 0 : Real2) + parseFloat(Real3 == "" ? 0 : Real3) + parseFloat(Real4 == "" ? 0 : Real4);
    $('#Realizado_' + posicion + '').val(resultadoRealizado)
    //    alert(resultadoRealizado)
}