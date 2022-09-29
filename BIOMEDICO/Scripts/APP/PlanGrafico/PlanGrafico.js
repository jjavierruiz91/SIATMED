

var ObjPlanGrafico = {
    PlanGraficoDeport: {}, //{objetos} llaves y [array] corchetes
    PlanGraficoDatosDeport: {}

}

let ArrayTabla = [];


var validadorFormDeportista = [];
var IsUpdate = false;
var IdPlanGraficoData = 0;
var IdPlanGraficoDatos = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdPlanGraficoData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdPlanGraficoData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SavePlanGrafico').html('Atras')
        Get_Data(LlenarCampos, '/PlanGrafico/GetPlanGraficoExisteById?IdPlanGrafico=' + IdPlanGraficoData);
        //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SavePlanGrafico').html('Actualizar')
        Get_Data(LlenarCampos, '/PlanGrafico/GetPlanGraficoExisteById?IdPlanGrafico=' + IdPlanGraficoData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {

    $('#IdPlanGrafico').val(data.objeto.IdPlanGrafico);
    $('#Deporte').val(data.objeto.Deporte);
    $('#NombreMacrociclo').val(data.objeto.NombreMacrociclo);
    $('#Mes1').val(data.objeto.Mes1);
    $('#Mes2').val(data.objeto.Mes2);
    $('#Mes3').val(data.objeto.Mes3);
    $('#mes4').val(data.objeto.mes4);
    $('#Mesociclos1').val(data.objeto.Mesociclos1);
    $('#Mesociclos2').val(data.objeto.Mesociclos2);
    $('#Mesociclos3').val(data.objeto.Mesociclos3);
    $('#Mesociclos4').val(data.objeto.Mesociclos4);
    $('#NumeroMicrociclo1').val(data.objeto.NumeroMicrociclo1);
    $('#NumeroMicrociclo2').val(data.objeto.NumeroMicrociclo2);
    $('#NumeroMicrociclo3').val(data.objeto.NumeroMicrociclo3);
    $('#NumeroMicrociclo4').val(data.objeto.NumeroMicrociclo4);
    $('#NumeroMicrociclo5').val(data.objeto.NumeroMicrociclo5);
    $('#NumeroMicrociclo6').val(data.objeto.NumeroMicrociclo6);
    $('#NumeroMicrociclo7').val(data.objeto.NumeroMicrociclo7);
    $('#NumeroMicrociclo8').val(data.objeto.NumeroMicrociclo8);
    $('#NumeroMicrociclo9').val(data.objeto.NumeroMicrociclo9);
    $('#NumeroMicrociclo10').val(data.objeto.NumeroMicrociclo10);
    $('#NumeroMicrociclo11').val(data.objeto.NumeroMicrociclo11);
    $('#NumeroMicrociclo12').val(data.objeto.NumeroMicrociclo12);
    $('#NumeroMicrociclo13').val(data.objeto.NumeroMicrociclo13);
    $('#NumeroMicrociclo14').val(data.objeto.NumeroMicrociclo14);
    $('#NumeroMicrociclo15').val(data.objeto.NumeroMicrociclo15);
    $('#NumeroMicrociclo16').val(data.objeto.NumeroMicrociclo16);
    $('#TipoMicrociclo1').val(data.objeto.TipoMicrociclo1);
    $('#TipoMicrociclo2').val(data.objeto.TipoMicrociclo2);
    $('#TipoMicrociclo3').val(data.objeto.TipoMicrociclo3);
    $('#TipoMicrociclo4').val(data.objeto.TipoMicrociclo4);
    $('#TipoMicrociclo5').val(data.objeto.TipoMicrociclo5);
    $('#TipoMicrociclo6').val(data.objeto.TipoMicrociclo6);
    $('#TipoMicrociclo7').val(data.objeto.TipoMicrociclo7);
    $('#TipoMicrociclo8').val(data.objeto.TipoMicrociclo8);
    $('#TipoMicrociclo9').val(data.objeto.TipoMicrociclo9);
    $('#TipoMicrociclo10').val(data.objeto.TipoMicrociclo10);
    $('#TipoMicrociclo11').val(data.objeto.TipoMicrociclo11);
    $('#TipoMicrociclo12').val(data.objeto.TipoMicrociclo12);
    $('#TipoMicrociclo13').val(data.objeto.TipoMicrociclo13);
    $('#TipoMicrociclo14').val(data.objeto.TipoMicrociclo14);
    $('#TipoMicrociclo15').val(data.objeto.TipoMicrociclo15);
    $('#TipoMicrociclo16').val(data.objeto.TipoMicrociclo16);
    $('#FechaMesUno').val(data.objeto.FechaMesUno);
    $('#FechaMesUno2').val(data.objeto.FechaMesUno2);
    $('#FechaMesUno3').val(data.objeto.FechaMesUno3);
    $('#FechaMesUno4').val(data.objeto.FechaMesUno4);
    $('#FechaMesUno5').val(data.objeto.FechaMesUno5);
    $('#FechaMesUno6').val(data.objeto.FechaMesUno6);
    $('#FechaMesUno7').val(data.objeto.FechaMesUno7);
    $('#FechaMesUno8').val(data.objeto.FechaMesUno8);
    $('#FechaMesDos').val(data.objeto.FechaMesDos);
    $('#FechaMesDos2').val(data.objeto.FechaMesDos2);
    $('#FechaMesDos3').val(data.objeto.FechaMesDos3);
    $('#FechaMesDos4').val(data.objeto.FechaMesDos4);
    $('#FechaMesDos5').val(data.objeto.FechaMesDos5);
    $('#FechaMesDos6').val(data.objeto.FechaMesDos6);
    $('#FechaMesDos7').val(data.objeto.FechaMesDos7);
    $('#FechaMesDos8').val(data.objeto.FechaMesDos8);
    $('#FechaMesTres').val(data.objeto.FechaMesTres);
    $('#FechaMesTres2').val(data.objeto.FechaMesTres2);
    $('#FechaMesTres3').val(data.objeto.FechaMesTres3);
    $('#FechaMesTres4').val(data.objeto.FechaMesTres4);
    $('#FechaMesTres5').val(data.objeto.FechaMesTres5);
    $('#FechaMesTres6').val(data.objeto.FechaMesTres6);
    $('#FechaMesTres7').val(data.objeto.FechaMesTres7);
    $('#FechaMesTres8').val(data.objeto.FechaMesTres8);
    $('#FechaMesCuatro').val(data.objeto.FechaMesCuatro);
    $('#FechaMesCuatro2').val(data.objeto.FechaMesCuatro2);
    $('#FechaMesCuatro3').val(data.objeto.FechaMesCuatro3);
    $('#FechaMesCuatro4').val(data.objeto.FechaMesCuatro4);
    $('#FechaMesCuatro5').val(data.objeto.FechaMesCuatro5);
    $('#FechaMesCuatro6').val(data.objeto.FechaMesCuatro6);
    $('#FechaMesCuatro7').val(data.objeto.FechaMesCuatro7);
    $('#FechaMesCuatro8').val(data.objeto.FechaMesCuatro8);
    $('#NumeroSesiones').val(data.objeto.NumeroSesiones);
    $('#NumeroSesiones2').val(data.objeto.NumeroSesiones2);
    $('#NumeroSesiones3').val(data.objeto.NumeroSesiones3);
    $('#NumeroSesiones4').val(data.objeto.NumeroSesiones4);
    $('#NumeroSesiones5').val(data.objeto.NumeroSesiones5);
    $('#NumeroSesiones6').val(data.objeto.NumeroSesiones6);
    $('#NumeroSesiones7').val(data.objeto.NumeroSesiones7);
    $('#NumeroSesiones8').val(data.objeto.NumeroSesiones8);
    $('#NumeroSesiones9').val(data.objeto.NumeroSesiones9);
    $('#NumeroSesiones10').val(data.objeto.NumeroSesiones10);
    $('#NumeroSesiones11').val(data.objeto.NumeroSesiones11);
    $('#NumeroSesiones12').val(data.objeto.NumeroSesiones12);
    $('#NumeroSesiones13').val(data.objeto.NumeroSesiones13);
    $('#NumeroSesiones14').val(data.objeto.NumeroSesiones14);
    $('#NumeroSesiones15').val(data.objeto.NumeroSesiones15);
    $('#NumeroSesiones16').val(data.objeto.NumeroSesiones16);
    $('#FirmaEntrenador').val(data.objeto.FirmaEntrenador);
    $('#FirmaMetodologo').val(data.objeto.FirmaMetodologo);
         
   

    console.log(data.objeto.PlanGraficoDatos);
    let p = 0;
    for (var i = 1; i <= data.objeto.PlanGraficoDatos.length; i++) {
        AgregarRowtemp();

        $('#NombreElementoPlangrafico_' + i + '').val(data.objeto.PlanGraficoDatos[p].NombreElementoPlangrafico);
        $('#Ideal1_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal1);
        $('#Ideal2_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal2);
        $('#Ideal3_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal3);
        $('#Ideal4_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal4);
        $('#Ideal5_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal5);
        $('#Ideal6_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal6);
        $('#Ideal7_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal7);
        $('#Ideal8_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal8);
        $('#Ideal9_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal9);
        $('#Ideal10_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal10);
        $('#Ideal11_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal11);
        $('#Ideal12_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal12);
        $('#Ideal13_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal13);
        $('#Ideal14_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal14);
        $('#Ideal15_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal15);
        $('#Ideal16_' + i + '').val(data.objeto.PlanGraficoDatos[p].Ideal16);
       
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
    document.getElementById("SavePlanGrafico").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdPlanGrafico = 0;
        if (IsUpdate) {
            IdPlanGrafico = IdPlanGraficoData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjPlanGrafico.PlanGraficoDeport = {

            IdPlanGrafico: IdPlanGrafico,
            Deporte: $('#Deporte').val(),
            NombreMacrociclo: $('#NombreMacrociclo').val(),
            Mes1: $('#Mes1').val(),
            Mes2: $('#Mes2').val(),
            Mes3: $('#Mes3').val(),
            mes4: $('#mes4').val(),
            Mesociclos1: $('#Mesociclos1').val(),
            Mesociclos2: $('#Mesociclos2').val(),
            Mesociclos3: $('#Mesociclos3').val(),
            Mesociclos4: $('#Mesociclos4').val(),
            NumeroMicrociclo1: $('#NumeroMicrociclo1').val(),
            NumeroMicrociclo2: $('#NumeroMicrociclo2').val(),
            NumeroMicrociclo3: $('#NumeroMicrociclo3').val(),
            NumeroMicrociclo4: $('#NumeroMicrociclo4').val(),
            NumeroMicrociclo5: $('#NumeroMicrociclo5').val(),
            NumeroMicrociclo6: $('#NumeroMicrociclo6').val(),
            NumeroMicrociclo7: $('#NumeroMicrociclo7').val(),
            NumeroMicrociclo8: $('#NumeroMicrociclo8').val(),
            NumeroMicrociclo9: $('#NumeroMicrociclo9').val(),
            NumeroMicrociclo10: $('#NumeroMicrociclo10').val(),
            NumeroMicrociclo11: $('#NumeroMicrociclo11').val(),
            NumeroMicrociclo12: $('#NumeroMicrociclo12').val(),
            NumeroMicrociclo13: $('#NumeroMicrociclo13').val(),
            NumeroMicrociclo14: $('#NumeroMicrociclo14').val(),
            NumeroMicrociclo15: $('#NumeroMicrociclo15').val(),
            NumeroMicrociclo16: $('#NumeroMicrociclo16').val(),
            TipoMicrociclo1: $('#TipoMicrociclo1').val(),
            TipoMicrociclo2: $('#TipoMicrociclo2').val(),
            TipoMicrociclo3: $('#TipoMicrociclo3').val(),
            TipoMicrociclo4: $('#TipoMicrociclo4').val(),
            TipoMicrociclo5: $('#TipoMicrociclo5').val(),
            TipoMicrociclo6: $('#TipoMicrociclo6').val(),
            TipoMicrociclo7: $('#TipoMicrociclo7').val(),
            TipoMicrociclo8: $('#TipoMicrociclo8').val(),
            TipoMicrociclo9: $('#TipoMicrociclo9').val(),
            TipoMicrociclo10: $('#TipoMicrociclo10').val(),
            TipoMicrociclo11: $('#TipoMicrociclo11').val(),
            TipoMicrociclo12: $('#TipoMicrociclo12').val(),
            TipoMicrociclo13: $('#TipoMicrociclo13').val(),
            TipoMicrociclo14: $('#TipoMicrociclo14').val(),
            TipoMicrociclo15: $('#TipoMicrociclo15').val(),
            TipoMicrociclo16: $('#TipoMicrociclo16').val(),
            FechaMesUno: $('#FechaMesUno').val(),
            FechaMesUno2: $('#FechaMesUno2').val(),
            FechaMesUno3: $('#FechaMesUno3').val(),
            FechaMesUno4: $('#FechaMesUno4').val(),
            FechaMesUno5: $('#FechaMesUno5').val(),
            FechaMesUno6: $('#FechaMesUno6').val(),
            FechaMesUno7: $('#FechaMesUno7').val(),
            FechaMesUno8: $('#FechaMesUno8').val(),
            FechaMesDos: $('#FechaMesDos').val(),
            FechaMesDos2: $('#FechaMesDos2').val(),
            FechaMesDos3: $('#FechaMesDos3').val(),
            FechaMesDos4: $('#FechaMesDos4').val(),
            FechaMesDos5: $('#FechaMesDos5').val(),
            FechaMesDos6: $('#FechaMesDos6').val(),
            FechaMesDos7: $('#FechaMesDos7').val(),
            FechaMesDos8: $('#FechaMesDos8').val(),
            FechaMesTres: $('#FechaMesTres').val(),
            FechaMesTres2: $('#FechaMesTres2').val(),
            FechaMesTres3: $('#FechaMesTres3').val(),
            FechaMesTres4: $('#FechaMesTres4').val(),
            FechaMesTres5: $('#FechaMesTres5').val(),
            FechaMesTres6: $('#FechaMesTres6').val(),
            FechaMesTres7: $('#FechaMesTres7').val(),
            FechaMesTres8: $('#FechaMesTres8').val(),
            FechaMesCuatro: $('#FechaMesCuatro').val(),
            FechaMesCuatro2: $('#FechaMesCuatro2').val(),
            FechaMesCuatro3: $('#FechaMesCuatro3').val(),
            FechaMesCuatro4: $('#FechaMesCuatro4').val(),
            FechaMesCuatro5: $('#FechaMesCuatro5').val(),
            FechaMesCuatro6: $('#FechaMesCuatro6').val(),
            FechaMesCuatro7: $('#FechaMesCuatro7').val(),
            FechaMesCuatro8: $('#FechaMesCuatro8').val(),
            NumeroSesiones: $('#NumeroSesiones').val(),
            NumeroSesiones2: $('#NumeroSesiones2').val(),
            NumeroSesiones3: $('#NumeroSesiones3').val(),
            NumeroSesiones4: $('#NumeroSesiones4').val(),
            NumeroSesiones5: $('#NumeroSesiones5').val(),
            NumeroSesiones6: $('#NumeroSesiones6').val(),
            NumeroSesiones7: $('#NumeroSesiones7').val(),
            NumeroSesiones8: $('#NumeroSesiones8').val(),
            NumeroSesiones9: $('#NumeroSesiones9').val(),
            NumeroSesiones10: $('#NumeroSesiones10').val(),
            NumeroSesiones11: $('#NumeroSesiones11').val(),
            NumeroSesiones12: $('#NumeroSesiones12').val(),
            NumeroSesiones13: $('#NumeroSesiones13').val(),
            NumeroSesiones14: $('#NumeroSesiones14').val(),
            NumeroSesiones15: $('#NumeroSesiones15').val(),
            NumeroSesiones16: $('#NumeroSesiones16').val(),
            FirmaEntrenador: $('#FirmaEntrenador').val(),
            FirmaMetodologo: $('#FirmaMetodologo').val(),


        }


        for (var i = 1; i <= contadortabla; i++) {

            let objTempTabla = {
                IdPlanGraficoDatos: IdPlanGraficoDatos,
                NombrePrincipal: $('#NombrePrincipal_' + i + '').val(),
                NombreElementoPlangrafico: $('#NombreElementoPlangrafico_' + i + '').val(),

                Ideal1: $('#Ideal1_' + i + '').val(),
                Ideal2: $('#Ideal2_' + i + '').val(),
                Ideal3: $('#Ideal3_' + i + '').val(),
                Ideal4: $('#Ideal4_' + i + '').val(),
                Ideal5: $('#Ideal5_' + i + '').val(),
               Ideal6: $('#Ideal6_' + i + '').val(),
        
               Ideal7: $('#Ideal7_' + i + '').val(), 
                 Ideal8: $('#Ideal8_' + i + '').val(), 
                 Ideal9: $('#Ideal9_' + i + '').val(), 
                 Ideal10: $('#Ideal10_' + i + '').val(), 
                 Ideal11: $('#Ideal11_' + i + '').val(), 
                 Ideal12: $('#Ideal12_' + i + '').val(),
                 Ideal13: $('#Ideal13_' + i + '').val(), 
                 Ideal14: $('#Ideal14_' + i + '').val(), 
                 Ideal15: $('#Ideal15_' + i + '').val(), 
                 Ideal16: $('#Ideal16_' + i + '').val(), 
                        
                IdPlanGrafico: $('#IdPlanGraficoDatos').val(),
            }

            ArrayTabla.push(objTempTabla);
        }
        ObjPlanGrafico.PlanGraficoDatosDeport = ArrayTabla;

        let id = 10;
        /*console.log(ArrayTabla);*/

        if (IsUpdate) {
            Save_Data(ActualizarVista, '/PlanGrafico/Actualizar', ObjPlanGrafico, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/PlanGrafico/Agregar', ObjPlanGrafico, 'Guardado');

            // LimpiarFormulario()
        }

    }

}



function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../PlanGrafico/ListaPlanGrafico?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/PlanGrafico/GetListPlanGrafico');
}
let contadortabla = 0
let contadorNombrePrincipal = 0;

function AgregarRow(name, position) {
    contadortabla++;
   
    let ElemtoSelect = name //$("#NombreElementoPlangrafico").val();
    let Microciclo1Select = $("#NombrePrincipal").val();




    let DescripElem = name;// $("#NombreElementoPlangrafico :selected").text();
    if (ElemtoSelect == "") {
        alert("SEleccione elemento")
        return;
    }
    let FilaTabla = "";


    FilaTabla += '<tr>';

    if (position == 1) {
        FilaTabla += '    <td colspan="12" class="col-xl-4">';
        FilaTabla += '        <input class="form-control col-xl-12" id="NombreElementoPlangrafico_' + contadortabla + '" name="NombreElementoPlangrafico_' + contadortabla + '" value="' + DescripElem + '" disabled title="' + DescripElem +'" style="font-size:9px"/>';
        FilaTabla += '    </td>';
    } else {
        FilaTabla += '    <td colspan="6" class="col-xl-2">';
        FilaTabla += '        <input class="form-control" id="NombreElementoPlangrafico_' + contadortabla + '" name="NombreElementoPlangrafico_' + contadortabla + '" value="' + DescripElem + '" disabled/>';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="2" >';
        FilaTabla += '        <input class="form-control" id="Ideal1_' + contadortabla + '" name="Ideal1_' + contadortabla + '" onchange="CalcularDef1(' + contadorNombrePrincipal + ')"   />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal2_' + contadortabla + '" name="Ideal2_ ' + contadortabla + '" onchange="CalcularDef2(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal3_' + contadortabla + '" name="Ideal3_' + contadortabla + '"onchange="CalcularDef3(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal4_' + contadortabla + '" name="Ideal4_' + contadortabla + '" onchange="CalcularDef4(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal5_' + contadortabla + '" name="Ideal5_' + contadortabla + '" onchange="CalcularDef5(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal6_' + contadortabla + '" name="Ideal6_' + contadortabla + '"onchange="CalcularDef6(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal7_' + contadortabla + '" name="Ideal7_' + contadortabla + '" onchange="CalcularDef7(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal8_' + contadortabla + '" name="Ideal8_' + contadortabla + '"onchange="CalcularDef8(' + contadorNombrePrincipal + ')"   />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal9_' + contadortabla + '" name="Ideal9_' + contadortabla + '" onchange="CalcularDef9(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal10_' + contadortabla + '" name="Ideal10_' + contadortabla + '" onchange="CalcularDef10(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal11_' + contadortabla + '" name="Ideal11_' + contadortabla + '" onchange="CalcularDef11(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal12_' + contadortabla + '" name="Ideal12_' + contadortabla + '" onchange="CalcularDef12(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal13_' + contadortabla + '" name="Ideal13_' + contadortabla + '" onchange="CalcularDef13(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal14_' + contadortabla + '" name="Ideal14_' + contadortabla + '" onchange="CalcularDef14(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal15_' + contadortabla + '" name="Ideal15_' + contadortabla + '" onchange="CalcularDef15(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="2">';
        FilaTabla += '        <input class="form-control" id="Ideal16_' + contadortabla + '" name="Ideal16_' + contadortabla + '" onchange="CalcularDef16(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';

    }

   /* FilaTabla += '</tr>';*/

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

    
        FilaTabla += '    <td colspan="12">';
        FilaTabla += '        <input class="form-control" id="NombreElementoPlangrafico_' + contadortabla + '" name="NombreElementoPlangrafico_' + contadortabla + '" />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal1_' + contadortabla + '" name="Ideal1_' + contadortabla + '" onchange="CalcularDef1(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal2_' + contadortabla + '" name="Ideal2_ ' + contadortabla + '" onchange="CalcularDef2(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal3_' + contadortabla + '" name="Ideal3_' + contadortabla + '"onchange="CalcularDef3(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal4_' + contadortabla + '" name="Ideal4_' + contadortabla + '" onchange="CalcularDef4(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal5_' + contadortabla + '" name="Ideal5_' + contadortabla + '" onchange="CalcularDef5(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal6_' + contadortabla + '" name="Ideal6_' + contadortabla + '"onchange="CalcularDef6(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal7_' + contadortabla + '" name="Ideal7_' + contadortabla + '" onchange="CalcularDef7(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal8_' + contadortabla + '" name="Ideal8_' + contadortabla + '"onchange="CalcularDef8(' + contadorNombrePrincipal + ')"   />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal9_' + contadortabla + '" name="Ideal9_' + contadortabla + '" onchange="CalcularDef9(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal10_' + contadortabla + '" name="Ideal10_' + contadortabla + '" onchange="CalcularDef10(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal11_' + contadortabla + '" name="Ideal11_' + contadortabla + '" onchange="CalcularDef11(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal12_' + contadortabla + '" name="Ideal12_' + contadortabla + '" onchange="CalcularDef12(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal13_' + contadortabla + '" name="Ideal13_' + contadortabla + '" onchange="CalcularDef13(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal14_' + contadortabla + '" name="Ideal14_' + contadortabla + '" onchange="CalcularDef14(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal15_' + contadortabla + '" name="Ideal15_' + contadortabla + '" onchange="CalcularDef15(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="Ideal16_' + contadortabla + '" name="Ideal16_' + contadortabla + '" onchange="CalcularDef16(' + contadorNombrePrincipal + ')"  />';
        FilaTabla += '    </td>';



    FilaTabla += '</tr>';

    $('#PlanillaTable').find('tbody').append(FilaTabla);
}

//function CalcularDef1(posicion) {
//    let Ideal1 = $('#Ideal1_2' + posicion + '').val();
//    let Ideal2 = $('#Ideal1_3' + posicion + '').val();
//    let resultado = parseFloat(Ideal2 == "" ? 0 : Ideal2) * parseFloat(Ideal1 == "" ? 0 : Ideal1);

//    alert(resultado);
//    $('#Ideal1_4' + posicion).val(resultado)
//    /*$('#Ideal1_' + posicion + '4').val(resultado)*/
//}

function CalcularDef1(posicion) {
    let End = posicion * 4;//pilla solo era usar matematica y usted quejandose de los calculos jejejejej matematica basica- ing otra cosita para la ruta esta 
    let Start = End - 2;


    let Calculator = 1;//aqui se haran los calculos para pasarlos al ultimo ideal, lo inicio en 1 porque si multiplicamos cero * algo = cero siempre, si fuera suma o resta puede incio en 0
    for (var i = Start; i < End; i++) {
        let Ideal1 = $('#Ideal1_' + i).val();
        let CalculatorTemp = parseFloat(Ideal1 == "" ? 1/*0*/ : Ideal1);// cambio el 0 por 1 como te digo 0*algo=0;
        Calculator = Calculator * CalculatorTemp;//aqui es multiplicacion???si
    }
    //let Ideal1 = $('#Ideal1_' + posicion).val();//se comenta porque esto ria estatico
    //let Ideal2 = $('#Ideal1_' + posicion).val();
    

    /*let resultado = parseFloat(Ideal2 == "" ? 0 : Ideal2) * parseFloat(Ideal1 == "" ? 0 : Ideal1);
     * se comenta se hace calculo en linea 623*/

    $('#Ideal1_' + End).val(Calculator);


}



function CalcularDef2(posicion) {
    let End = posicion * 4; 
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal2 = $('#Ideal2_' + i).val();
        let CalculatorTemp = parseFloat(Ideal2 == "" ? 1 : Ideal2);
        Calculator = Calculator * CalculatorTemp;
    }
   

    $('#Ideal2_' + End).val(Calculator);


}


function CalcularDef3(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal3 = $('#Ideal3_' + i).val();
        let CalculatorTemp = parseFloat(Ideal3 == "" ? 1 : Ideal3);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal3_' + End).val(Calculator);


}

function CalcularDef4(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal4 = $('#Ideal4_' + i).val();
        let CalculatorTemp = parseFloat(Ideal4 == "" ? 1 : Ideal4);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal4_' + End).val(Calculator);

}
function CalcularDef5(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal5 = $('#Ideal5_' + i).val();
        let CalculatorTemp = parseFloat(Ideal5 == "" ? 1 : Ideal5);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal5_' + End).val(Calculator);

}
function CalcularDef6(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal6 = $('#Ideal6_' + i).val();
        let CalculatorTemp = parseFloat(Ideal6 == "" ? 1 : Ideal6);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal6_' + End).val(Calculator);

}
function CalcularDef7(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal7 = $('#Ideal7_' + i).val();
        let CalculatorTemp = parseFloat(Ideal7 == "" ? 1 : Ideal7);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal7_' + End).val(Calculator);

}
function CalcularDef8(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal8 = $('#Ideal8_' + i).val();
        let CalculatorTemp = parseFloat(Ideal8 == "" ? 1 : Ideal8);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal8_' + End).val(Calculator);

}
function CalcularDef9(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal9 = $('#Ideal9_' + i).val();
        let CalculatorTemp = parseFloat(Ideal9 == "" ? 1 : Ideal9);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal9_' + End).val(Calculator);

}
function CalcularDef10(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal10 = $('#Ideal10_' + i).val();
        let CalculatorTemp = parseFloat(Ideal10 == "" ? 1 : Ideal10);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal10_' + End).val(Calculator);

}
function CalcularDef11(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal11 = $('#Ideal11_' + i).val();
        let CalculatorTemp = parseFloat(Ideal11 == "" ? 1 : Ideal11);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal11_' + End).val(Calculator);

}
function CalcularDef12(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal12 = $('#Ideal12_' + i).val();
        let CalculatorTemp = parseFloat(Ideal12 == "" ? 1 : Ideal12);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal12_' + End).val(Calculator);

}
function CalcularDef13(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal13 = $('#Ideal13_' + i).val();
        let CalculatorTemp = parseFloat(Ideal13 == "" ? 1 : Ideal13);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal13_' + End).val(Calculator);

}
function CalcularDef14(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal14 = $('#Ideal14_' + i).val();
        let CalculatorTemp = parseFloat(Ideal14 == "" ? 1 : Ideal14);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal14_' + End).val(Calculator);

}
function CalcularDef15(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal15 = $('#Ideal15_' + i).val();
        let CalculatorTemp = parseFloat(Ideal15 == "" ? 1 : Ideal15);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal15_' + End).val(Calculator);

}
function CalcularDef16(posicion) {
    let End = posicion * 4;
    let Start = End - 2;


    let Calculator = 1;
    for (var i = Start; i < End; i++) {
        let Ideal16 = $('#Ideal16_' + i).val();
        let CalculatorTemp = parseFloat(Ideal16 == "" ? 1 : Ideal16);
        Calculator = Calculator * CalculatorTemp;
    }


    $('#Ideal16_' + End).val(Calculator);

}

function CargarElemtosTabla() {
    let Microciclo1Select = $("#NombrePrincipal").val();
    AgregarRow(Microciclo1Select, 1);
    contadorNombrePrincipal++;//cuento cuando se agrega un nombre principal
    let Arrayelemento = ["Vol.Ideal", "Vol. % Real", "Vol. Ejecuta"]
    for (var i = 0; i < Arrayelemento.length; i++) {
        AgregarRow(Arrayelemento[i], 2)
    }

}