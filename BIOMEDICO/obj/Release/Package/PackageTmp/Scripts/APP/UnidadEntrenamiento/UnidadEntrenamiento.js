var ObjUnidadEntrenamiento = {
    UnidadEntrenamientoDeport: {},//{objetos} llaves y [array] corchetes
    ActividadUnidadEntrenamientoDeport: {}
   
}

      
var validadorFormDeportista = [];
var IsUpdate = false;
var IdUnidadentrenamientoData = 0;
var IdActividadUnidadEntrenamiento = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdUnidadentrenamientoData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdUnidadentrenamientoData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveUnidadEntrenamiento').html('Atras')
        Get_Data(LlenarCampos, '/UnidadEntrenamiento/GetUnidadEntrenamientoById?IdUnidadEntrenamientoDepor=' + IdUnidadentrenamientoData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveUnidadEntrenamiento').html('Actualizar')
        Get_Data(LlenarCampos, '/UnidadEntrenamiento/GetUnidadEntrenamientoById?IdUnidadEntrenamientoDepor=' + IdUnidadentrenamientoData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});


function LlenarCampos(data) {

    $('#NombreEntrenador').val(data.objeto.NombreEntrenador);
    $('#Deporte').val(data.objeto.Deporte);
    $('#Agrupacion').val(data.objeto.Agrupacion);
    $('#Categoria').val(data.objeto.Categoria);
    $('#Modalidad').val(data.objeto.Modalidad);
    $('#FechaSesion').val(data.objeto.FechaSesion);
    $('#HoraInicio').val(data.objeto.HoraInicio);
    $('#HoraFinal').val(data.objeto.HoraFinal);
    $('#ObjetivosSesion').val(data.objeto.ObjetivosSesion);
    $('#NumMesociclo').val(data.objeto.NumMesociclo);
    $('#TipoMicrociclo').val(data.objeto.TipoMicrociclo);
    $('#MetodologoEvaluador').val(data.objeto.MetodologoEvaluador);
    $('#Sesionentrenamiento').val(data.objeto.Sesionentrenamiento);
    $('#UnidadEntrenamiento1').val(data.objeto.UnidadEntrenamiento1);
    $('#ObjetivosEntrenamiento').val(data.objeto.ObjetivosEntrenamiento);
    $('#PlanificaCalentamiento').val(data.objeto.PlanificaCalentamiento);
    $('#CalentamientoGeneral').val(data.objeto.CalentamientoGeneral);
    $('#CalentamientoEspecifico').val(data.objeto.CalentamientoEspecifico);
   
                                            


    ////DATOS ESTUDIOS ENTRENADOR

    IdActividadUnidadEntrenamiento = data.objeto.ActividadUnidadEntrenamiento[0].IdActividadUnidadEntrenamiento;
    $('#AcuerdoObjetivos').val(data.objeto.ActividadUnidadEntrenamiento[0].AcuerdoObjetivos);
    $('#MediosEntrenamientos').val(data.objeto.ActividadUnidadEntrenamiento[0].MediosEntrenamientos);
    $('#ObjetivosMultiples').val(data.objeto.ActividadUnidadEntrenamiento[0].ObjetivosMultiples);
    $('#MaterialAdecuado').val(data.objeto.ActividadUnidadEntrenamiento[0].MaterialAdecuado);
    $('#CompoentesEntrenamientos').val(data.objeto.ActividadUnidadEntrenamiento[0].CompoentesEntrenamientos);
    $('#EvaluaCumplimientoUE').val(data.objeto.ActividadUnidadEntrenamiento[0].EvaluaCumplimientoUE);
    $('#ObjetivosActividadFinal').val(data.objeto.ActividadUnidadEntrenamiento[0].ObjetivosActividadFinal);
    $('#PlanificaActividadFinal').val(data.objeto.ActividadUnidadEntrenamiento[0].PlanificaActividadFinal);

    
    $('#MotivacionObjetivos').val(data.objeto.ActividadUnidadEntrenamiento[0].MotivacionObjetivos);
    $('#DisciplinaAdecuada').val(data.objeto.ActividadUnidadEntrenamiento[0].DisciplinaAdecuada);
    $('#ControlGrupo').val(data.objeto.ActividadUnidadEntrenamiento[0].ControlGrupo);
    $('#RespetoEntrenamiento').val(data.objeto.ActividadUnidadEntrenamiento[0].RespetoEntrenamiento);
    $('#RecomendacionesGenerales').val(data.objeto.ActividadUnidadEntrenamiento[0].RecomendacionesGenerales);
    $('#ObservacionesEntrenadores').val(data.objeto.ActividadUnidadEntrenamiento[0].ObservacionesEntrenadores);
    $('#FirmaEntrenador').val(data.objeto.ActividadUnidadEntrenamiento[0].FirmaEntrenador);
    $('#FirmaMetodologo').val(data.objeto.ActividadUnidadEntrenamiento[0].FirmaMetodologo);
    
                              

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
    document.getElementById("SaveUnidadEntrenamiento").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdUnidadEntrenamiento = 0;
        if (IsUpdate) {
            IdUnidadEntrenamiento = IdUnidadentrenamientoData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjUnidadEntrenamiento = {
            UnidadEntrenamientoDeport: {

                IdUnidadEntrenamiento: IdUnidadEntrenamiento,
                NombreEntrenador: $('#NombreEntrenador').val(),
                Deporte: $('#Deporte').val(),
                Agrupacion: $('#Agrupacion').val(),
                Categoria: $('#Categoria').val(),
                Modalidad: $('#Modalidad').val(),
                FechaSesion: $('#FechaSesion').val(),
                HoraInicio: $('#HoraInicio').val(),
                HoraFinal: $('#HoraFinal').val(),
                ObjetivosSesion: $('#ObjetivosSesion').val(),
                NumMesociclo: $('#NumMesociclo').val(),
                TipoMicrociclo: $('#TipoMicrociclo').val(),
                MetodologoEvaluador: $('#MetodologoEvaluador').val(),
                Sesionentrenamiento: $('#Sesionentrenamiento').val(),
                UnidadEntrenamiento1: $('#UnidadEntrenamiento1').val(),
                ObjetivosEntrenamiento: $('#ObjetivosEntrenamiento').val(),
                PlanificaCalentamiento: $('#PlanificaCalentamiento').val(),
                CalentamientoGeneral: $('#CalentamientoGeneral').val(),
                CalentamientoEspecifico: $('#CalentamientoEspecifico').val(),
     
    

               
            },//End obj Entrenador
            ActividadUnidadEntrenamientoDeport: {

                IdActividadUnidadEntrenamiento: IdActividadUnidadEntrenamiento,
                AcuerdoObjetivos: $('#AcuerdoObjetivos').val(),
                MediosEntrenamientos: $('#MediosEntrenamientos').val(),
                ObjetivosMultiples: $('#ObjetivosMultiples').val(),
                MaterialAdecuado: $('#MaterialAdecuado').val(),
                CompoentesEntrenamientos: $('#CompoentesEntrenamientos').val(),
                PlanificaActividadFinal: $('#PlanificaActividadFinal').val(),
                
                EvaluaCumplimientoUE: $('#EvaluaCumplimientoUE').val(),
                ObjetivosActividadFinal: $('#ObjetivosActividadFinal').val(),
                MotivacionObjetivos: $('#MotivacionObjetivos').val(),
                DisciplinaAdecuada: $('#DisciplinaAdecuada').val(),
                ControlGrupo: $('#ControlGrupo').val(),
                RespetoEntrenamiento: $('#RespetoEntrenamiento').val(),
                RecomendacionesGenerales: $('#RecomendacionesGenerales').val(),
                ObservacionesEntrenadores: $('#ObservacionesEntrenadores').val(),
                FirmaEntrenador: $('#FirmaEntrenador').val(),
                FirmaMetodologo: $('#FirmaMetodologo').val(),
                IdUnidadEntrenamiento: $('#IdActividadUnidadEntrenamiento').val(),

            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/UnidadEntrenamiento/Actualizar', ObjUnidadEntrenamiento, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/UnidadEntrenamiento/Agregar', ObjUnidadEntrenamiento, 'Guardado');

            // LimpiarFormulario()
        }

    }



}

function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../UnidadEntrenamiento/ListaUnidaEntrenamiento?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/UnidadEntrenamiento/GetListEntrenamiento');
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
