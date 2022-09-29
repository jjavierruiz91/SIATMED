var ObjAnalisisMacroCiclo = {
    AnalisisMacrocicloDepor: {},//{objetos} llaves y [array] corchetes
    PlanAnalisisMacroDepor: {},
    ObjetivosMacrocicloDepor: {}
}

var validadorFormDeportista = [];
var IsUpdate = false;
var IdMacroAnteriorData  = 0;
var IdPlanMacrociclo = 0;
var IdObjetivosMacrociclo = 0;
var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdMacroAnteriorData  = getQueryVariable('IdAnalis');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdMacroAnteriorData  > 0) {
        IsUpdate = true;
    }
    if (VerDetalles == "SI") {
        $('#SaveAnalisMacrociclo').html('Atras')
        Get_Data(LlenarCampos, '/AnalisisMacroCiclo/GetAnalisisMacroCicloById?IdAnalisMacro=' + IdMacroAnteriorData );
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveAnalisMacrociclo').html('Actualizar')
        Get_Data(LlenarCampos, '/AnalisisMacroCiclo/GetAnalisisMacroCicloById?IdAnalisMacro=' + IdMacroAnteriorData );
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});





function LlenarCampos(data) {


    $('#TipoIdentificacion').val(data.objeto.TipoIdentificacion);
    $('#NumIdentificacion').val(data.objeto.NumIdentificacion);
    $('#EstadoDeportista').val(data.objeto.EstadoDeportista);
    $('#PrimerNombre').val(data.objeto.PrimerNombre);
    $('#SegundoNombre').val(data.objeto.SegundoNombre);
    $('#PrimerApellido').val(data.objeto.PrimerApellido);
    $('#SegundoApellido').val(data.objeto.SegundoApellido);
    /* $('#Imagen').val(data.objeto.Imagen);*/
    $('#Edad').val(data.objeto.Edad.trim());
    $('#Genero').val(data.objeto.Genero);
    $('#GrupoSanguineo').val(data.objeto.GrupoSanguineo);
    $('#Eps').val(data.objeto.Eps);
    $('#CorreoDeportista').val(data.objeto.CorreoDeportista);
    $('#Deporte').val(data.objeto.Deporte);
    $('#FechaNacimiento').val(JSONDateconverter(data.objeto.FechaNacimiento));
    $('#PaisNacimiento').val(data.objeto.PaisNacimiento);
    $('#DepartamentoNacimiento').val(data.objeto.DepartamentoNacimiento);
    $('#MunicipioNacimiento').val(data.objeto.MunicipioNacimiento);
    $('#GrupoEtareo').val(data.objeto.GrupoEtareo);
    $('#CondicionPoblacion').val(data.objeto.CondicionPoblacion);
    $('#Telefono').val(data.objeto.Telefono.trim());
    $('#NivelEstudio').val(data.objeto.NivelEstudio);
    $('#PaisResidencia').val(data.objeto.PaisResidencia);
    $('#DepartamentoResidencia').val(data.objeto.DepartamentoResidencia);
    $('#MunicipioResidencia').val(data.objeto.MunicipioResidencia);
    $('#BarrioResidencia').val(data.objeto.BarrioResidencia);
    $('#DireccionResidencia').val(data.objeto.DireccionResidencia);
    $('#TipoEtnia').val(data.objeto.TipoEtnia);
    $('#ZonaInfluencia').val(data.objeto.ZonaInfluencia);
    $('#EntidadPrestadora').val(data.objeto.EntidadPrestadora);
    $('#NombreMonitor').val(data.objeto.NombreMonitor);
    $('#NombreGrupo').val(data.objeto.NombreGrupo);
    //FechaServicio:$('#NumIdentificacion').val(data.objeto.NumIdentificacion); Tomados del server
    $('#EstadoCivil').val(data.objeto.EstadoCivil);
    $('#UsuarioCreacion').val(data.objeto.UsuarioCreacion);

    ////DATOS FAMILIARES

    IdObjetivosMacrociclo = data.objeto.DatosFamiliares[0].IdPlanMacrociclo;
    $('#NomMadre').val(data.objeto.DatosFamiliares[0].NomMadre);
    $('#ApeMadre').val(data.objeto.DatosFamiliares[0].ApeMadre);
    $('#TipoDocumento').val(data.objeto.DatosFamiliares[0].TipoDocumento);
    $('#NumDocumento').val(data.objeto.DatosFamiliares[0].NumDocumento);
    $('#Direccion').val(data.objeto.DatosFamiliares[0].Direccion);
    $('#Barrio').val(data.objeto.DatosFamiliares[0].Barrio);
    $('#Celular').val(data.objeto.DatosFamiliares[0].Celular);
    $('#Ocupacion').val(data.objeto.DatosFamiliares[0].Ocupacion);
    $('#NomPadre').val(data.objeto.DatosFamiliares[0].NomPadre);
    $('#ApePadre').val(data.objeto.DatosFamiliares[0].ApePadre);
    $('#TipoPadre').val(data.objeto.DatosFamiliares[0].TipoPadre);
    $('#NumPadre').val(data.objeto.DatosFamiliares[0].NumPadre);
    $('#DireccionPadre').val(data.objeto.DatosFamiliares[0].DireccionPadre);
    $('#BarrioPadre').val(data.objeto.DatosFamiliares[0].BarrioPadre);
    $('#CelularPadre').val(data.objeto.DatosFamiliares[0].CelularPadre);
    $('#OcupacionPadre').val(data.objeto.DatosFamiliares[0].OcupacionPadre);

    //DATOS OCUPACION
    IdPlanMacrociclo = data.objeto.Ocupacion[0].IdPlanMacrociclo;
    $('#Ocupacion1').val(data.objeto.Ocupacion[0].Ocupacion1);
    $('#NivelEducativo').val(data.objeto.Ocupacion[0].NivelEducativo);
    $('#NivelEducativo').val(data.objeto.Ocupacion[0].NivelEducativo);
    $('#Institucion').val(data.objeto.Ocupacion[0].Institucion);
    $('#TelefonoInstitucion').val(data.objeto.Ocupacion[0].TelefonoInstitucion);
    $('#DirectorGrado').val(data.objeto.Ocupacion[0].DirectorGrado);
    $('#Peso').val(data.objeto.Ocupacion[0].Peso);
    $('#Estatura').val(data.objeto.Ocupacion[0].Estatura);
    $('#TallaCamisa').val(data.objeto.Ocupacion[0].TallaCamisa);
    $('#TallaPantalon').val(data.objeto.Ocupacion[0].TallaPantalon);
    $('#TallaCalzado').val(data.objeto.Ocupacion[0].TallaCalzado);
    $('#TallaSudadera').val(data.objeto.Ocupacion[0].TallaSudadera);
    $('#NumeroHijos').val(data.objeto.Ocupacion[0].NumeroHijos);

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
    document.getElementById("SaveAnalisMacrociclo").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdMacroAnterior = 0;
        if (IsUpdate) {
            IdMacroAnterior = IdMacroAnteriorData ;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjAnalisisMacroCiclo = {
            AnalisisMacrocicloDepor: {
                IdMacroAnterior: IdMacroAnterior,
                NumIdentificacionDeportist: $('#NumIdentificacionDeportist').val(),
                NombreDeportist: $('#NombreDeportist').val(),
                Entrenador: $('#Entrenador').val(),
                Deporte: $('#Deporte').val(),
                Agrupacion: $('#Agrupacion').val(),
                Categoria: $('#Categoria').val(),
                Modalidad: $('#Modalidad').val(),
                Genero: $('#Genero').val(),
                Año: $('#Año').val(),
                Mes: $('#Mes').val(),
                Metodologo: $('#Metodologo').val(),
                FechaEvaluacion: $('#FechaEvaluacion').val(),
                ObjetivoGeneral: $('#ObjetivoGeneral').val(),
                ObjetivosEspecificos: $('#ObjetivosEspecificos').val(),
                PreparacionFisica: $('#PreparacionFisica').val(),
                PreparacionTecnica: $('#PreparacionTecnica').val(),
                PreparacionTactica: $('#PreparacionTactica').val(),
                ResultadosCompetencia: $('#ResultadosCompetencia').val(),
                PronosticoMacrociclo: $('#PronosticoMacrociclo').val(),

                //FechaCreacion:$('#NumIdentificacion').val(),Tomados del server
            },//End obj AnalisisMacroCiclo
            PlanAnalisisMacroDepor: {

                IdPlanMacrociclo: IdPlanMacrociclo,
                CompetenciaPrincipal: $('#CompetenciaPrincipal').val(),
                TipoPlanificacion: $('#TipoPlanificacion').val(),
                NumMacrociclo: $('#NumMacrociclo').val(),
                FechaInicioMacro: $('#FechaInicioMacro').val(),
                FechaFinMacro: $('#FechaFinMacro').val(),
                SedeCompetencia: $('#SedeCompetencia').val(),
                EscenarioMacro: $('#EscenarioMacro').val(),
                CondicionesClimaticas: $('#CondicionesClimaticas').val(),
                ObjetivosNuevaCompetencia: $('#ObjetivosNuevaCompetencia').val(),
                ObjetivosEspecificosNuevaCompetencia: $('#ObjetivosEspecificosNuevaCompetencia').val(),
                PronosticoCompetencia: $('#PronosticoCompetencia').val(),
                TareasMesociclos: $('#TareasMesociclos').val(),
                PeriodoPreparatorio: $('#PeriodoPreparatorio').val(),
                MesosicloGeneral: $('#MesosicloGeneral').val(),
                MesosicloEspecial: $('#MesosicloEspecial').val(),
                MesosicloCompeticion: $('#MesosicloCompeticion').val(),
                TareaMesosicloGeneral: $('#TareaMesosicloGeneral').val(),
                TareaMesosicloEspecial: $('#TareaMesosicloEspecial').val(),
                TareaMesosicloCompeticion: $('#TareaMesosicloCompeticion').val(),
                Capacidades01: $('#Capacidades01').val(),
                Capacidades02: $('#Capacidades02').val(),
                Capacidades03: $('#Capacidades03').val(),
                Capacidades04: $('#Capacidades04').val(),
                Capacidades05: $('#Capacidades05').val(),
                Capacidades06: $('#Capacidades06').val(),
                Capacidades07: $('#Capacidades07').val(),
                Capacidades08: $('#Capacidades08').val(),
                Capacidades09: $('#Capacidades09').val(),
                Capacidades10: $('#Capacidades10').val(),
                Metodos01: $('#Metodos01').val(),
                Metodos02: $('#Metodos02').val(),
                Metodos03: $('#Metodos03').val(),
                Metodos04: $('#Metodos04').val(),
                Metodos05: $('#Metodos05').val(),
                Metodos06: $('#Metodos06').val(),
                Metodos07: $('#Metodos07').val(),
                Metodos08: $('#Metodos08').val(),
                Metodos09: $('#Metodos09').val(),
                Metodos10: $('#Metodos10').val(),
                Medios01: $('#Medios01').val(),
                Medios02: $('#Medios02').val(),
                Medios03: $('#Medios03').val(),
                Medios04: $('#Medios04').val(),
                Medios05: $('#Medios05').val(),
                Medios06: $('#Medios06').val(),
                Medios07: $('#Medios07').val(),
                Medios08: $('#Medios08').val(),
                Medios09: $('#Medios09').val(),
                Medios10: $('#Medios10').val(),
                RecursosHumanos: $('#RecursosHumanos').val(),
                RecursosFisicos: $('#RecursosFisicos').val(),
                Recursosfinancieros: $('#Recursosfinancieros').val(),
                RecursoDeportivo: $('#RecursoDeportivo').val(),
                DisponibleHumanos: $('#DisponibleHumanos').val(),
                DisponibleFisicos: $('#DisponibleFisicos').val(),
                DisponibleFinanciero: $('#DisponibleFinanciero').val(),
                DisponibleDeportivo: $('#DisponibleDeportivo').val(),
                IdMacroAnterior: $('#IdMacroAnterior').val(),

            },
            ObjetivosMacrocicloDepor: {

                IdObjetivosMacrociclo: IdObjetivosMacrociclo,
                ObjetivosHumanos: $('#ObjetivosHumanos').val(),
                ObjetivosFisicos: $('#ObjetivosFisicos').val(),
                ObjetivosFinancieros: $('#ObjetivosFinancieros').val(),
                ObjetivosDeportivos: $('#ObjetivosDeportivos').val(),
                MedicinaDelDeporte: $('#MedicinaDelDeporte').val(),
                MesocicloHumano: $('#MesocicloHumano').val(),
                MesocicloFisico: $('#MesocicloFisico').val(),
                MesocicloFinanciero: $('#MesocicloFinanciero').val(),
                MesocicloDeportivo: $('#MesocicloDeportivo').val(),
                MesocicloDeporte: $('#MesocicloDeporte').val(),
                PropuestoHumano: $('#PropuestoHumano').val(),
                PropuestoFisico: $('#PropuestoFisico').val(),
                PropuestoFinanciero: $('#PropuestoFinanciero').val(),
                PropuestoDeportivo: $('#PropuestoDeportivo').val(),
                PropuestoDeporte: $('#PropuestoDeporte').val(),
                DistribucionMacrociclo: $('#DistribucionMacrociclo').val(),
                PreparacionMacrociclo: $('#PreparacionMacrociclo').val(),
                CompetenciaMacrociclo: $('#CompetenciaMacrociclo').val(),
                DiasTrabajoMacrociclo: $('#DiasTrabajoMacrociclo').val(),
                OtrosDiasMacrociclo: $('#OtrosDiasMacrociclo').val(),
                AcumulacionMacrociclo: $('#AcumulacionMacrociclo').val(),
                TransformacionMacrocilo: $('#TransformacionMacrocilo').val(),
                RealizacionMacrociclo: $('#RealizacionMacrociclo').val(),
                IdMacroAnterior: $('#IdMacroAnterior').val(),
            }
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/AnalisisMacroCiclo/Actualizar', ObjAnalisisMacroCiclo, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/AnalisisMacroCiclo/Agregar', ObjAnalisisMacroCiclo, 'Guardado');

            // LimpiarFormulario()
        }

    }



}

function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../AnalisisMacroCiclo/ListAnalisisMacroCiclo?opcion=" + OpcionDeporte;
    }
}


function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/AnalisisMacroCiclo/GetListAnalisisMacroCiclo');
}


