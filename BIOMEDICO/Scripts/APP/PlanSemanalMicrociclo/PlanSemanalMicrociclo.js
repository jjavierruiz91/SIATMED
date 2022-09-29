var ObjPlanSemanalMicrociclo = {
    PlanSemanalMicrocicloDeport: {} ,//{objetos} llaves y [array] corchetes
    PlanSemanalDiasDeport: {}
   
}
let ArrayTabla = [];


    
var validadorFormDeportista = [];
var IsUpdate = false;
var IdPlanSemanalData = 0;
var IdPlanSemanalDiasDatos = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdPlanSemanalData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdPlanSemanalData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SavePlanSemanalMicrociclo').html('Atras')
        Get_Data(LlenarCampos, '/PlanSemanalMicrociclo/GetPlanSemanalMicrocicloById?IdPlanSemanal=' + IdPlanSemanalData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SavePlanSemanalMicrociclo').html('Actualizar')
        Get_Data(LlenarCampos, '/PlanSemanalMicrociclo/GetPlanSemanalMicrocicloById?IdPlanSemanal=' + IdPlanSemanalData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {
   

    $('#IdPlanSemanal').val(data.objeto.IdPlanSemanal);
    $('#DeportePlan').val(data.objeto.DeportePlan);
    $('#Deportista').val(data.objeto.Deportista);
    $('#EntrenadorPlan').val(data.objeto.EntrenadorPlan);
    $('#Agrupacion').val(data.objeto.Agrupacion);
    $('#MicroCicloNum').val(data.objeto.MicroCicloNum);
    $('#TipoMicroCiclo').val(data.objeto.TipoMicroCiclo);
    $('#MesoCiclo').val(data.objeto.MesoCiclo);
    $('#TipoMesociclo').val(data.objeto.TipoMesociclo);
    $('#ObjetivosFisicos').val(data.objeto.ObjetivosFisicos);
    $('#ObjetivosTecnicos').val(data.objeto.ObjetivosTecnicos);
    $('#ElementosMicrociclo').val(data.objeto.ElementosMicrociclo);
    $('#HoraInicioPlan').val(data.objeto.HoraInicioPlan);
    $('#HoraFinalPlan').val(data.objeto.HoraFinalPlan);
    $('#FechaMicrociclo').val(JSONDateconverter(data.objeto.FechaMicrociclo));

    $('#FuerzaMaxLunes').val(data.objeto.FuerzaMaxLunes);
    $('#FuerzaMaxMartes').val(data.objeto.FuerzaMaxMartes);
    $('#FuerzaMaxMiercoles').val(data.objeto.FuerzaMaxMiercoles);
    $('#FuerzaMaxJueves').val(data.objeto.FuerzaMaxJueves);
    $('#FuerzaMaxViernes').val(data.objeto.FuerzaMaxViernes);
    $('#FuerzaMaxSabado').val(data.objeto.FuerzaMaxSabado);
    $('#FuerzaMaxDomingo').val(data.objeto.FuerzaMaxDomingo);
    $('#FuerzaExplosivaLunes').val(data.objeto.FuerzaExplosivaLunes);
    $('#FuerzaExplosivaMartes').val(data.objeto.FuerzaExplosivaMartes);
    $('#FuerzaExplosivaMiercoles').val(data.objeto.FuerzaExplosivaMiercoles);
    $('#FuerzaExplosivaJueves').val(data.objeto.FuerzaExplosivaJueves);
    $('#FuerzaExplosivaViernes').val(data.objeto.FuerzaExplosivaViernes);
    $('#FuerzaExplosivaSabado').val(data.objeto.FuerzaExplosivaSabado);
    $('#FuerzaExplosivaDomingo').val(data.objeto.FuerzaExplosivaDomingo);
    $('#FuerzaResistenciaLunes').val(data.objeto.FuerzaResistenciaLunes);
    $('#FuerzaResistenciaMartes').val(data.objeto.FuerzaResistenciaMartes);
    $('#FuerzaResistenciaMiercoles').val(data.objeto.FuerzaResistenciaMiercoles);
    $('#FuerzaResistenciaJueves').val(data.objeto.FuerzaResistenciaJueves);
    $('#FuerzaResistenciaViernes').val(data.objeto.FuerzaResistenciaViernes);
    $('#FuerzaResistenciaSabado').val(data.objeto.FuerzaResistenciaSabado);
    $('#FuerzaResistenciaDomingo').val(data.objeto.FuerzaResistenciaDomingo);
    $('#ResistenciaAerobicaLunes').val(data.objeto.ResistenciaAerobicaLunes);
    $('#ResistenciaAerobicaMartes').val(data.objeto.ResistenciaAerobicaMartes);
    $('#ResistenciaAerobicaMiercoles').val(data.objeto.ResistenciaAerobicaMiercoles);
    $('#ResistenciaAerobicaJueves').val(data.objeto.ResistenciaAerobicaJueves);
    $('#ResistenciaAerobicaViernes').val(data.objeto.ResistenciaAerobicaViernes);
    $('#ResistenciaAerobicaSabado').val(data.objeto.ResistenciaAerobicaSabado);
    $('#ResistenciaAerobicaDomingo').val(data.objeto.ResistenciaAerobicaDomingo);
    $('#ResistenciaAnaerobicaLunes').val(data.objeto.ResistenciaAnaerobicaLunes);
    $('#ResistenciaAnaerobicaMartes').val(data.objeto.ResistenciaAnaerobicaMartes);
    $('#ResistenciaAnaerobicaMiercoles').val(data.objeto.ResistenciaAnaerobicaMiercoles);
    $('#ResistenciaAnaerobicaJueves').val(data.objeto.ResistenciaAnaerobicaJueves);
    $('#ResistenciaAnaerobicaViernes').val(data.objeto.ResistenciaAnaerobicaViernes);
    $('#ResistenciaAnaerobicaSabado').val(data.objeto.ResistenciaAnaerobicaSabado);
    $('#ResistenciaAnaerobicaDomingo').val(data.objeto.ResistenciaAnaerobicaDomingo);
    $('#TecnicaLunes').val(data.objeto.TecnicaLunes);
    $('#TecnicaMartes').val(data.objeto.TecnicaMartes);
    $('#TecnicaMiercoles').val(data.objeto.TecnicaMiercoles);
    $('#TecnicaJueves').val(data.objeto.TecnicaJueves);
    $('#TecnicaViernes').val(data.objeto.TecnicaViernes);
    $('#TecnicaSabado').val(data.objeto.TecnicaSabado);
    $('#TecnicaDomingo').val(data.objeto.TecnicaDomingo);
    $('#TacticaLunes').val(data.objeto.TacticaLunes);
    $('#TacticaMartes').val(data.objeto.TacticaMartes);
    $('#TacticaMiercoles').val(data.objeto.TacticaMiercoles);
    $('#TacticaJueves').val(data.objeto.TacticaJueves);
    $('#TacticaViernes').val(data.objeto.TacticaViernes);
    $('#TacticaSabado').val(data.objeto.TacticaSabado);
    $('#TacticaDomingo').val(data.objeto.TacticaDomingo);
    $('#TeoricaLunes').val(data.objeto.TeoricaLunes);
    $('#TeoricaMartes').val(data.objeto.TeoricaMartes);
    $('#TeoricaMiercoles').val(data.objeto.TeoricaMiercoles);
    $('#TeoricaJueves').val(data.objeto.TeoricaJueves);
    $('#TeoricaViernes').val(data.objeto.TeoricaViernes);
    $('#TeoricaSabado').val(data.objeto.TeoricaSabado);
    $('#TeoricaDomingo').val(data.objeto.TeoricaDomingo);
    $('#MentalLunes').val(data.objeto.MentalLunes);
    $('#MentalMartes').val(data.objeto.MentalMartes);
    $('#MentalMiercoles').val(data.objeto.MentalMiercoles);
    $('#MentalJueves').val(data.objeto.MentalJueves);
    $('#MentalViernes').val(data.objeto.MentalViernes);
    $('#MentalSabado').val(data.objeto.MentalSabado);
    $('#MentalDomingo').val(data.objeto.MentalDomingo);
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
    document.getElementById("SavePlanSemanalMicrociclo").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdPlanSemanal = 0;
        if (IsUpdate) {
            IdPlanSemanal = IdPlanSemanalData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjPlanSemanalMicrociclo.PlanSemanalMicrocicloDeport = {
            
                IdPlanSemanal: IdPlanSemanal,
                DeportePlan: $('#DeportePlan').val(),
                Deportista: $('#Deportista').val(),
                EntrenadorPlan: $('#EntrenadorPlan').val(),
                Agrupacion: $('#Agrupacion').val(),
                Categoria: $('#Categoria').val(),
                MicroCicloNum: $('#MicroCicloNum').val(),
                TipoMicroCiclo: $('#TipoMicroCiclo').val(),
                MesoCiclo: $('#MesoCiclo').val(),
                TipoMesociclo: $('#TipoMesociclo').val(),
                ObjetivosFisicos: $('#ObjetivosFisicos').val(),
                ObjetivosTecnicos: $('#ObjetivosTecnicos').val(),
                ElementosMicrociclo: $('#ElementosMicrociclo').val(),
                HoraInicioPlan: $('#HoraInicioPlan').val(),
                HoraFinalPlan: $('#HoraFinalPlan').val(),
                FechaMicrociclo: $('#FechaMicrociclo').val(),

                }
            for(var i = 1; i <= contadortabla; i++) {
                let objTempTabla = {

                IdPlanSemanalDiasDatos: IdPlanSemanalDiasDatos,
                ElementoSemanalDias: $('#ElementoSemanalDias_' + i + '').val(),
                LunesSemanalDias: $('#LunesSemanalDias_' + i + '').val(),
                MartesSemanalDias: $('#MartesSemanalDias_' + i + '').val(),
                MiercolesSemanalDias: $('#MiercolesSemanalDias_' + i + '').val(),
                JuevesSemanalDias: $('#JuevesSemanalDias_' + i + '').val(),
                ViernesSemanalDias: $('#ViernesSemanalDias_' + i + '').val(),
                SabadoSemanalDias: $('#SabadoSemanalDias_' + i + '').val(),
                DomingoSemanalDias: $('#DomingoSemanalDias_' + i + '').val(),
                IdPlanSemanal: $('#IdPlanSemanalDiasDatos').val(),
            }

            ArrayTabla.push(objTempTabla);
        }

        ObjPlanSemanalMicrociclo.PlanSemanalDiasDeport   = ArrayTabla;

        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/PlanSemanalMicrociclo/Actualizar', ObjPlanSemanalMicrociclo, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/PlanSemanalMicrociclo/Agregar', ObjPlanSemanalMicrociclo, 'Guardado');

            // LimpiarFormulario()
        }

    }
}
    





function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../PlanSemanalMicrociclo/ListaPlanSemanalMicrociclo?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/PlanSemanalMicrociclo/GetListPlanSemanalMicrociclo');
}

    let contadortabla = 0
    function AgregarRow() {
        contadortabla++;
        let ElemtoSelect = $("#ElementoSemanalDias").val();
       



        let DescripElem = $("#ElementoSemanalDias :selected").text();
        if (ElemtoSelect == "") {
            alert("SEleccione elemento")
            return;
        }
        let FilaTabla = "";
        FilaTabla += '<tr>';


        FilaTabla += '    <td colspan="3">';
        FilaTabla += '        <input class="form-control" id="ElementoSemanalDias_' + contadortabla + '" name="ElementoSemanalDias_' + contadortabla + '" value="' + DescripElem + '" disabled/>';
        FilaTabla += '    </td>';

        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="LunesSemanalDias_' + contadortabla + '" name="LunesSemanalDias_' + contadortabla + '" />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="MartesSemanalDias_' + contadortabla + '" name="MartesSemanalDias_ ' + contadortabla + '" />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="MiercolesSemanalDias_' + contadortabla + '" name="MiercolesSemanalDias_' + contadortabla + '" />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="JuevesSemanalDias_' + contadortabla + '" name="JuevesSemanalDias_' + contadortabla + '" />';
        FilaTabla += '    </td>';



        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="ViernesSemanalDias_' + contadortabla + '" name="ViernesSemanalDias_' + contadortabla + '"  />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="SabadoSemanalDias_' + contadortabla + '" name="SabadoSemanalDias_' + contadortabla + '" />';
        FilaTabla += '    </td>';
        FilaTabla += '    <td colspan="1">';
        FilaTabla += '        <input class="form-control" id="DomingoSemanalDias_' + contadortabla + '" name="DomingoSemanalDias_' + contadortabla + '" />';
        FilaTabla += '    </td>';
        

        FilaTabla += '</tr>';
        $('#PlanillaTable').find('tbody').append(FilaTabla);
        //var table = document.getElementById("");
        //var row = table.getElementsByTagName('tr');
        //for (i = 0; i < row.length; i++) {
        //    row[i].innerHTML = row[i].innerHTML + '<td></td>';
        //}
    }
    