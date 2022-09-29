var ObjVisitaCompetencia = {
    VisitaCompetenciasDeport: {},//{objetos} llaves y [array] corchetes
    EvaluacionVisitaCompetenciaDeport: {},
    EvaluacionEquipoVisitaCompetenciaDeport: {}
}



var validadorFormDeportista = [];
var IsUpdate = false;
var IdVisitaCompetenciaData = 0;
var IdEvaluacionVisitaCompetencia = 0;
var IdEvaluacionEquipo = 0;
var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdVisitaCompetenciaData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdVisitaCompetenciaData>0 ) {
        IsUpdate = true;
    }
    if (VerDetalles == "SI") {
        $('#SaveVisitaComptencia').html('Atras')
        Get_Data(LlenarCampos, '/VisitaCompetencias/GetVisitaCompetenciaById?IdVisitaCompetencia=' + IdVisitaCompetenciaData);
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveVisitaComptencia').html('Actualizar')
        Get_Data(LlenarCampos, '/VisitaCompetencias/GetVisitaCompetenciaById?IdVisitaCompetencia=' + IdVisitaCompetenciaData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");
   
});





function LlenarCampos(data) {
   
    $('#TorneoVisitaCompetencia').val(data.objeto.TorneoVisitaCompetencia);
    $('#FechaInicioEvento').val(data.objeto.FechaInicioEvento);
    $('#FechaFinalEvento').val(data.objeto.FechaFinalEvento);
    $('#FechaSalidaEvento').val(data.objeto.FechaSalidaEvento);
    $('#FechaRegresoEvento').val(data.objeto.FechaRegresoEvento);
    $('#EquipoDeportista').val(data.objeto.EquipoDeportista);
    $('#DeporteVisitaCompetencia').val(data.objeto.DeporteVisitaCompetencia);
    $('#CategoriaVisitaCompetencia').val(data.objeto.CategoriaVisitaCompetencia);
    $('#AgrupacionVisitaCompetencia').val(data.objeto.AgrupacionVisitaCompetencia);
    $('#EntrenadorVisitaCompetencia').val(data.objeto.EntrenadorVisitaCompetencia);
    $('#NumeroEquiposVisitaCompetencia').val(data.objeto.NumeroEquiposVisitaCompetencia);
    $('#AsistentesEventoVisitaCompetencia').val(data.objeto.AsistentesEventoVisitaCompetencia);
    $('#TecnicosEventoVisitaCompetencia').val(data.objeto.TecnicosEventoVisitaCompetencia);
    $('#SistemaCompetenciaVisitaCompetencia').val(data.objeto.SistemaCompetenciaVisitaCompetencia);
    $('#CombatesVisitaCompetencia').val(data.objeto.CombatesVisitaCompetencia);
    $('#SemifinalFinalVisitaCompetencia').val(data.objeto.SemifinalFinalVisitaCompetencia);
    $('#MedalleroDeportista').val(data.objeto.MedalleroDeportista);
    $('#MedallaOroDeportista').val(data.objeto.MedallaOroDeportista);
    $('#MedallaPlataDeportista').val(data.objeto.MedallaPlataDeportista);
    $('#MedallaBronceDeportista').val(data.objeto.MedallaBronceDeportista);
    $('#MedalleroEquipo').val(data.objeto.MedalleroEquipo);
    $('#MedallaOroEquipo').val(data.objeto.MedallaOroEquipo);
    $('#MedallaPlataEquipo').val(data.objeto.MedallaPlataEquipo);
    $('#MedallaBronceEquipo').val(data.objeto.MedallaBronceEquipo);
    $('#ObservacionesPositivas').val(data.objeto.ObservacionesPositivas);
  
                            
                                                                                                            ObservacionesNegativas: $('#ObservacionesNegativas').val(),
    ////DATOS 

    IdEvaluacionVisitaCompetencia = data.objeto.EvaluacionVisitaCompetencia[0].IdEvaluacionVisitaCompetencia;
    $('#LugarEntrenamiento').val(data.objeto.EvaluacionVisitaCompetencia[0].LugarEntrenamiento);
    $('#AtencionMedica').val(data.objeto.EvaluacionVisitaCompetencia[0].AtencionMedica);
    $('#EscenariosDeportivos').val(data.objeto.EvaluacionVisitaCompetencia[0].EscenariosDeportivos);
    $('#Uniformidad').val(data.objeto.EvaluacionVisitaCompetencia[0].Uniformidad);
    $('#ComportamientoArbitral').val(data.objeto.EvaluacionVisitaCompetencia[0].ComportamientoArbitral);
    $('#TransporteInterno').val(data.objeto.EvaluacionVisitaCompetencia[0].TransporteInterno);
    $('#Alimentacion').val(data.objeto.EvaluacionVisitaCompetencia[0].Alimentacion);
    $('#Hospedaje').val(data.objeto.EvaluacionVisitaCompetencia[0].Hospedaje);
    $('#CalificacionRegular').val(data.objeto.EvaluacionVisitaCompetencia[0].CalificacionRegular);
    $('#hospedajeDelegacion').val(data.objeto.EvaluacionVisitaCompetencia[0].hospedajeDelegacion);
    $('#AlimentacionDelegacion').val(data.objeto.EvaluacionVisitaCompetencia[0].AlimentacionDelegacion);
    $('#EmpresaTransporte').val(data.objeto.EvaluacionVisitaCompetencia[0].EmpresaTransporte);
    $('#DuracionViajeIda').val(data.objeto.EvaluacionVisitaCompetencia[0].DuracionViajeIda);
    $('#DuracionViajeVuelta').val(data.objeto.EvaluacionVisitaCompetencia[0].DuracionViajeVuelta);
    $('#ViajeIdaComoFue').val(data.objeto.EvaluacionVisitaCompetencia[0].ViajeIdaComoFue);
    $('#ViajeRegresoComoFue').val(data.objeto.EvaluacionVisitaCompetencia[0].ViajeRegresoComoFue);

    //DATOS 

    IdEvaluacionEquipo = data.objeto.EvaluacionEquipoVisitaCompetencia[0].IdEvaluacionEquipo;
    $('#Disciplinado').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].Disciplinado);
    $('#Combativo').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].Combativo);
    $('#Adaptacion').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].Adaptacion);
    $('#Responsabilidad').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].Responsabilidad);
    $('#EvaluacionregularEquipo').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].EvaluacionregularEquipo);
    $('#ProblemasDocumentacion').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].ProblemasDocumentacion);
    $('#PreparacionFisica').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].PreparacionFisica);
    $('#PreparacionTecnica').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].PreparacionTecnica);
    $('#PreparacionTactica').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].PreparacionTactica);
    $('#PreparacionMental').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].PreparacionMental);
    $('#EvaluacionPreparacion').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].EvaluacionPreparacion);
    $('#FirmaEntrenador').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].FirmaEntrenador);
    $('#FirmaMetodologo').val(data.objeto.EvaluacionEquipoVisitaCompetencia[0].FirmaMetodologo);

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
    document.getElementById("SaveVisitaComptencia").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
   // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdVisitaCompetencia = 0;
        if (IsUpdate) {
            IdVisitaCompetencia = IdVisitaCompetenciaData;
        }
        //console.log(await toBase64(file));
        ObjVisitaCompetencia = {
            VisitaCompetenciasDeport: {
                IdVisitaCompetencia: IdVisitaCompetencia,
                TorneoVisitaCompetencia: $('#TorneoVisitaCompetencia').val(),
                FechaInicioEvento: $('#FechaInicioEvento').val(),
                FechaFinalEvento: $('#FechaFinalEvento').val(),
                FechaSalidaEvento: $('#FechaSalidaEvento').val(),
                FechaRegresoEvento: $('#FechaRegresoEvento').val(),
                EquipoDeportista: $('#EquipoDeportista').val(),
                DeporteVisitaCompetencia: $('#DeporteVisitaCompetencia').val(),
                CategoriaVisitaCompetencia: $('#CategoriaVisitaCompetencia').val(),
                AgrupacionVisitaCompetencia: $('#AgrupacionVisitaCompetencia').val(),
                EntrenadorVisitaCompetencia: $('#EntrenadorVisitaCompetencia').val(),
                NumeroEquiposVisitaCompetencia: $('#NumeroEquiposVisitaCompetencia').val(),
                AsistentesEventoVisitaCompetencia: $('#AsistentesEventoVisitaCompetencia').val(),
                TecnicosEventoVisitaCompetencia: $('#TecnicosEventoVisitaCompetencia').val(),
                SistemaCompetenciaVisitaCompetencia: $('#SistemaCompetenciaVisitaCompetencia').val(),
                CombatesVisitaCompetencia: $('#CombatesVisitaCompetencia').val(),
                SemifinalFinalVisitaCompetencia: $('#SemifinalFinalVisitaCompetencia').val(),
                MedalleroDeportista: $('#MedalleroDeportista').val(),
                MedallaOroDeportista: $('#MedallaOroDeportista').val(),
                MedallaPlataDeportista: $('#MedallaPlataDeportista').val(),
                MedallaBronceDeportista: $('#MedallaBronceDeportista').val(),
                MedalleroEquipo: $('#MedalleroEquipo').val(),
                MedallaOroEquipo: $('#MedallaOroEquipo').val(),
                MedallaPlataEquipo: $('#MedallaPlataEquipo').val(),
                MedallaBronceEquipo: $('#MedallaBronceEquipo').val(),
                ObservacionesPositivas: $('#ObservacionesPositivas').val(),
                ObservacionesNegativas: $('#ObservacionesNegativas').val(),
                
            },//End obj Visita
            EvaluacionVisitaCompetenciaDeport: {

                IdEvaluacionVisitaCompetencia: IdEvaluacionVisitaCompetencia,
                LugarEntrenamiento: $('#LugarEntrenamiento').val(),
                AtencionMedica: $('#AtencionMedica').val(),
                EscenariosDeportivos: $('#EscenariosDeportivos').val(),
                Uniformidad: $('#Uniformidad').val(),
                ComportamientoArbitral: $('#ComportamientoArbitral').val(),
                TransporteInterno: $('#TransporteInterno').val(),
                Alimentacion: $('#Alimentacion').val(),
                Hospedaje: $('#Hospedaje').val(),
                CalificacionRegular: $('#CalificacionRegular').val(),
                hospedajeDelegacion: $('#hospedajeDelegacion').val(),
                AlimentacionDelegacion: $('#AlimentacionDelegacion').val(),
                EmpresaTransporte: $('#EmpresaTransporte').val(),
                DuracionViajeIda: $('#DuracionViajeIda').val(),
                DuracionViajeVuelta: $('#DuracionViajeVuelta').val(),
                ViajeIdaComoFue: $('#ViajeIdaComoFue').val(),
                ViajeRegresoComoFue: $('#ViajeRegresoComoFue').val(),
                IdVisitaCompetencia: $('#IdEvaluacionVisitaCompetencia').val(),

            },
            EvaluacionEquipoVisitaCompetenciaDeport: {

                IdEvaluacionEquipo: IdEvaluacionEquipo,
                Disciplinado: $('#Disciplinado').val(),
                Combativo: $('#Combativo').val(),
                Adaptacion: $('#Adaptacion').val(),
                Responsabilidad: $('#Responsabilidad').val(),
                EvaluacionregularEquipo: $('#EvaluacionregularEquipo').val(),
                ProblemasDocumentacion: $('#ProblemasDocumentacion').val(),
                PreparacionFisica: $('#PreparacionFisica').val(),
                PreparacionTecnica: $('#PreparacionTecnica').val(),
                PreparacionTactica: $('#PreparacionTactica').val(),
                PreparacionMental: $('#PreparacionMental').val(),
                EvaluacionPreparacion: $('#EvaluacionPreparacion').val(),
                FirmaEntrenador: $('#FirmaEntrenador').val(),
                FirmaMetodologo: $('#FirmaMetodologo').val(),
        IdEvaluacionEquipo: $('#IdVisitaCompetencia').val(),
            }
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/VisitaCompetencias/Actualizar', ObjVisitaCompetencia, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/VisitaCompetencias/Agregar', ObjVisitaCompetencia, 'Guardado');

           // LimpiarFormulario()
        }

    } 

    
  
}

function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../VisitaCompetencias/ListaVisitaCompetenciaDeportiva?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/VisitaCompetencias/GetListVisitaCompetencia');
}


