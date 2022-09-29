var ObjEntrenadores = {
    EntrenadoresDeport: {},//{objetos} llaves y [array] corchetes
    EstudiosEntrenadoresDeport: {}
   
}
         
var validadorFormDeportista = [];
var IsUpdate = false;
var IdEntrenadoresData = 0;
var IdEstudiosEntrenador = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdEntrenadoresData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdEntrenadoresData > 0) {
        IsUpdate = true;
    }
    esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveEntrenadores').html('Atras')
        Get_Data(LlenarCampos, '/Entrenadores/GetEntrenadoresById?IdEntrenadoresDepor=' + IdEntrenadoresData);
        visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveEntrenadores').html('Actualizar')
        Get_Data(LlenarCampos, '/Entrenadores/GetEntrenadoresById?IdEntrenadoresDepor=' + IdEntrenadoresData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});

//function ValidarCedula() {
//    let Cedula = $('#NumIdentificacion').val();
//    Get_Data(MostrarAlerta, '/Deportista/BuscarDeportista?Identificacion=' + Cedula)
//}
function MostrarAlerta(data) {
    if (data != null || data != undefined) {
        swal({
            title: "Atención",
            text: "El Entrenador Ya Se Encuentra Registrado",
            type: "warning",
            /*showCancelButton: true,*/
            /*   confirmButtonClass: "btn-danger",*/
            confirmButtonText: "Ok",
        });
    }

}


function LlenarCampos(data) {
    let rutaimg = SetUrlForQueryLocal('/images/Entrenadores/' + data.objeto.NumeroIdentificacionEntrenador + ".jpg");
    //document.getElementById("ImagenDeport") = rutaimg;
    $("#ImagenDeport").attr("src", rutaimg);

    $('#TipoIdentificacionEntrenador').val(data.objeto.TipoIdentificacionEntrenador);
    $('#NumeroIdentificacionEntrenador').val(data.objeto.NumeroIdentificacionEntrenador);
    $('#EstadoEntrenador').val(data.objeto.EstadoEntrenador);
    $('#PrimerNombreEntrenador').val(data.objeto.PrimerNombreEntrenador);
    $('#SegundoNombreEntrenador').val(data.objeto.SegundoNombreEntrenador);
    $('#PrimerApellidoEntrenador').val(data.objeto.PrimerApellidoEntrenador);
    $('#Segundoapellidoentrenador').val(data.objeto.Segundoapellidoentrenador);
    /* $('#Imagen').val(data.objeto.Imagen);*/
    $('#EdadEntrenador').val(data.objeto.EdadEntrenador);
    $('#GeneroEntrenador').val(data.objeto.GeneroEntrenador);
    $('#GrupoSanguineoEntrenador').val(data.objeto.GrupoSanguineoEntrenador);
    $('#EpsEntrenador').val(data.objeto.EpsEntrenador);
    $('#CorreoEntrenador').val(data.objeto.CorreoEntrenador);
    $('#DeporteEntrenador').val(data.objeto.DeporteEntrenador);
    $('#FechaNacimientoEntrenador').val(JSONDateconverter(data.objeto.FechaNacimientoEntrenador));
    
    $('#TelefonoEntrenador').val(data.objeto.TelefonoEntrenador);
    $('#DireccionEntrenador').val(data.objeto.DireccionEntrenador);
    $('#BarrioEntrenador').val(data.objeto.BarrioEntrenador);
    $('#EstadoCivilEntrenador').val(data.objeto.EstadoCivilEntrenador);
    
    $('#NivelEstudioEntrenador').val(data.objeto.NivelEstudioEntrenador);
    
    


    ////DATOS ESTUDIOS ENTRENADOR

    IdEstudiosEntrenador = data.objeto.EstudiosEntrenadores[0].IdEstudiosEntrenador;
    $('#EstudiosEntrenador').val(data.objeto.EstudiosEntrenadores[0].EstudiosEntrenador);
    $('#CursosEntrenador').val(data.objeto.EstudiosEntrenadores[0].CursosEntrenador);
    $('#RecordsEntrenador').val(data.objeto.EstudiosEntrenadores[0].RecordsEntrenador);
    $('#InvestigacionesEntrenador').val(data.objeto.EstudiosEntrenadores[0].InvestigacionesEntrenador);
    $('#LibrosEntrenadores').val(data.objeto.EstudiosEntrenadores[0].LibrosEntrenadores);
    $('#ExperienciasEntrenador').val(data.objeto.EstudiosEntrenadores[0].ExperienciasEntrenador);
    $('#AñosExperienciaEntrenador').val(data.objeto.EstudiosEntrenadores[0].AñosExperienciaEntrenador);
    $('#ClubDeportivoEntrenador').val(data.objeto.EstudiosEntrenadores[0].ClubDeportivoEntrenador);


   

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
    document.getElementById("SaveEntrenadores").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdEntrenadores = 0;
        if (IsUpdate) {
            IdEntrenadores = IdEntrenadoresData;
        }
        const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjEntrenadores = {
            EntrenadoresDeport: {

                IdEntrenadores: IdEntrenadores,
                TipoIdentificacionEntrenador: $('#TipoIdentificacionEntrenador').val(),
                NumeroIdentificacionEntrenador: $('#NumeroIdentificacionEntrenador').val(),
                EstadoEntrenador: $('#EstadoEntrenador').val(),
                PrimerNombreEntrenador: $('#PrimerNombreEntrenador').val(),
                SegundoNombreEntrenador: $('#SegundoNombreEntrenador').val(),
                PrimerApellidoEntrenador: $('#PrimerApellidoEntrenador').val(),
                Segundoapellidoentrenador: $('#Segundoapellidoentrenador').val(),
                GeneroEntrenador: $('#GeneroEntrenador').val(),
                Imagen: file == undefined ? "" : await toBase64(file),
                GrupoSanguineoEntrenador: $('#GrupoSanguineoEntrenador').val(),
                EpsEntrenador: $('#EpsEntrenador').val(),
                CorreoEntrenador: $('#CorreoEntrenador').val(),
                FechaNacimientoEntrenador: $('#FechaNacimientoEntrenador').val(),

                DeporteEntrenador: $('#DeporteEntrenador').val(),
                NivelEstudioEntrenador: $('#NivelEstudioEntrenador').val(),
                TelefonoEntrenador: $('#TelefonoEntrenador').val(),
                DireccionEntrenador: $('#DireccionEntrenador').val(),
                BarrioEntrenador: $('#BarrioEntrenador').val(),
                EstadoCivilEntrenador: $('#EstadoCivilEntrenador').val(),
                EdadEntrenador: $('#EdadEntrenador').val(),

               
            },//End obj Entrenador
            EstudiosEntrenadoresDeport: {

                IdEstudiosEntrenador: IdEstudiosEntrenador,
                EstudiosEntrenador: $('#EstudiosEntrenador').val(),
                CursosEntrenador: $('#CursosEntrenador').val(),
                RecordsEntrenador: $('#RecordsEntrenador').val(),
                InvestigacionesEntrenador: $('#InvestigacionesEntrenador').val(),
                LibrosEntrenadores: $('#LibrosEntrenadores').val(),
                ExperienciasEntrenador: $('#ExperienciasEntrenador').val(),
                AñosExperienciaEntrenador: $('#AñosExperienciaEntrenador').val(),
                ClubDeportivoEntrenador: $('#ClubDeportivoEntrenador').val(),
               
                IdEntrenadores: $('#IdEstudiosEntrenador').val(),

            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/Entrenadores/Actualizar', ObjEntrenadores, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/Entrenadores/Agregar', ObjEntrenadores, 'Guardado');

            // LimpiarFormulario()
        }

    }



}

function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../Entrenadores/ListaEntrenadores?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/Entrenadores/GetListEntrenadores');
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
