var ObjDeportista = {
    Deport: {},//{objetos} llaves y [array] corchetes
    DataFamiliar: {},
    Ocupation: {}
}
var validadorFormDeportista = [];
var IsUpdate = false;
var idDeportistaData = 0;
var IdOcupacion = 0;
var IdDatosfamiliares = 0;
var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    idDeportistaData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (idDeportistaData>0 ) {
        IsUpdate = true;
    }
    esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveDeport').html('Atras')
        Get_Data(LlenarCampos, '/Deportista/GetDeportistaById?Iddepor=' + idDeportistaData);
        visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveDeport').html('Actualizar')
        Get_Data(LlenarCampos, '/Deportista/GetDeportistaById?Iddepor=' + idDeportistaData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");
   
});

function ValidarCedula() {
    let Cedula = $('#NumIdentificacion').val();
    Get_Data(MostrarAlerta, '/Deportista/BuscarDeportista?Identificacion=' + Cedula)
}
function MostrarAlerta(data) {
    if (data != null || data != undefined) {
        swal({
            title: "Atención",
            text: "El Deportista Ya Se Encuentra Registrado",
            type: "warning",
            /*showCancelButton: true,*/
            /*   confirmButtonClass: "btn-danger",*/
            confirmButtonText: "Ok",
        });
    }

}


function LlenarCampos(data) {
    let rutaimg = SetUrlForQueryLocal( '/images/Deportista/'+ data.objeto.NumIdentificacion + ".jpg");
    //document.getElementById("ImagenDeport") = rutaimg;
    $("#ImagenDeport").attr("src", rutaimg);
   
    $('#TipoIdentificacion').val(data.objeto.TipoIdentificacion);
    $('#NumIdentificacion').val(data.objeto.NumIdentificacion);
    $('#EstadoDeportista').val(data.objeto.EstadoDeportista);
    $('#ProgramaDeportista').val(data.objeto.ProgramaDeportista);

    $('#PrimerNombre').val(data.objeto.PrimerNombre);
    $('#SegundoNombre').val(data.objeto.SegundoNombre);
    $('#PrimerApellido').val(data.objeto.PrimerApellido);
    $('#SegundoApellido').val(data.objeto.SegundoApellido);
   /* $('#Imagen').val(data.objeto.Imagen);*/
    $('#Edad').val(data.objeto.Edad.trim());
    $('#Genero').val(data.objeto.Genero);
    $('#EpsDeportista').val(data.objeto.EpsDeportista);
    $('#GrupoSanguineo').val(data.objeto.GrupoSanguineo);

    $('#CorreoDeportista').val(data.objeto.CorreoDeportista);
    $('#Deporte').val(data.objeto.Deporte);
    $('#FechaNacimiento').val(JSONDateconverter(data.objeto.FechaNacimiento));
    $('#PaisNacimiento').val(data.objeto.PaisNacimiento);
    $('#DepartamentoNacimiento').val(data.objeto.DepartamentoNacimiento);
    $('#MunicipioNacimiento').val(data.objeto.MunicipioNacimiento);
    $('#GrupoEtareo').val(data.objeto.GrupoEtareo);
    $('#CondicionPoblacion').val(data.objeto.CondicionPoblacion);
    $('#TelefonoFijo').val(data.objeto.TelefonoFijo);
    $('#TelefonoMovil').val(data.objeto.TelefonoMovil);
    $('#Pasaporte').val(data.objeto.Pasaporte);
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

    //DATOS OCUPACION
    IdOcupacion = data.objeto.Ocupacion[0].IdOcupacion;
    $('#NivelEducativo').val(data.objeto.Ocupacion[0].NivelEducativo);
    $('#OperacionesDepor').val(data.objeto.Ocupacion[0].OperacionesDepor);
    $('#CualOperacion').val(data.objeto.Ocupacion[0].CualOperacion);
    $('#FracturasDepor').val(data.objeto.Ocupacion[0].FracturasDepor);
    $('#CualFractura').val(data.objeto.Ocupacion[0].CualFractura);
    $('#LesionesDepor').val(data.objeto.Ocupacion[0].LesionesDepor);
    $('#CualLesion').val(data.objeto.Ocupacion[0].CualLesion);
    $('#AlergiasDepor').val(data.objeto.Ocupacion[0].AlergiasDepor);
    $('#CualAlergia').val(data.objeto.Ocupacion[0].CualAlergia);
    $('#EspecialidadCombate').val(data.objeto.Ocupacion[0].EspecialidadCombate);
    $('#AñosActivos').val(data.objeto.Ocupacion[0].AñosActivos);
    $('#ClubDeportivo').val(data.objeto.Ocupacion[0].ClubDeportivo);
    $('#Peso').val(data.objeto.Ocupacion[0].Peso);
    $('#Estatura').val(data.objeto.Ocupacion[0].Estatura);
    $('#TallaCamisa').val(data.objeto.Ocupacion[0].TallaCamisa);
    $('#TallaPantalon').val(data.objeto.Ocupacion[0].TallaPantalon);
    $('#TallaCalzado').val(data.objeto.Ocupacion[0].TallaCalzado);
    $('#TallaSudadera').val(data.objeto.Ocupacion[0].TallaSudadera);
    $('#NumeroHijos').val(data.objeto.Ocupacion[0].NumeroHijos);

    ////DATOS FAMILIARES

    IdDatosfamiliares = data.objeto.DatosFamiliares[0].IdFamiliares;
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
    $('#MarcaTorneos').val(data.objeto.DatosFamiliares[0].MarcaTorneos);
    $('#LugarTorneos').val(data.objeto.DatosFamiliares[0].LugarTorneos);
    $('#FechaTorneros').val(JSONDateconverter(data.objeto.DatosFamiliares[0].FechaTorneros));
    $('#EventosTorneos').val(data.objeto.DatosFamiliares[0].EventosTorneos);
    $('#EntrenadorActual').val(data.objeto.DatosFamiliares[0].EntrenadorActual);
    $('#EmailEntrenador').val(data.objeto.DatosFamiliares[0].EmailEntrenador);
    $('#TelefonoEntrenador').val(data.objeto.DatosFamiliares[0].TelefonoEntrenador);
    $('#LugarEntrenamientoEntrenador').val(data.objeto.DatosFamiliares[0].LugarEntrenamientoEntrenador);
    $('#HorasEntrenamiento').val(data.objeto.DatosFamiliares[0].HorasEntrenamiento);
    $('#DiasEntrenamiento').val(data.objeto.DatosFamiliares[0].DiasEntrenamiento);
    $('#ObservacionesEntrenamiento').val(data.objeto.DatosFamiliares[0].ObservacionesEntrenamiento);
   
  

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
    document.getElementById("SaveDeport").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
   // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdDeportista = 0;
        if (IsUpdate) {
            IdDeportista = idDeportistaData;
        }
        const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjDeportista = {
            Deport: {
                IdDeportista: IdDeportista,
                TipoIdentificacion: $('#TipoIdentificacion').val(),
                NumIdentificacion: $('#NumIdentificacion').val(),
                EstadoDeportista: $('#EstadoDeportista').val(),
                ProgramaDeportista: $('#ProgramaDeportista').val(),
                PrimerNombre: $('#PrimerNombre').val(),
                SegundoNombre: $('#SegundoNombre').val(),
                PrimerApellido: $('#PrimerApellido').val(),
                SegundoApellido: $('#SegundoApellido').val(),
                Imagen: file == undefined ? "" : await toBase64(file),
                Edad: $('#Edad').val(),
                Genero: $('#Genero').val(),
                GrupoSanguineo: $('#GrupoSanguineo').val(),
                EpsDeportista: $('#EpsDeportista').val(),

                CorreoDeportista: $('#CorreoDeportista').val(),
                Deporte: $('#Deporte').val(),
                FechaNacimiento: $('#FechaNacimiento').val(),
                PaisNacimiento: $('#PaisNacimiento').val(),
                DepartamentoNacimiento: $('#DepartamentoNacimiento').val(),
                MunicipioNacimiento: $('#MunicipioNacimiento').val(),
                TelefonoFijo: $('#TelefonoFijo').val(),
                TelefonoMovil: $('#TelefonoMovil').val(),
                Pasaporte: $('#Pasaporte').val(),
                MunicipioResidencia: $('#MunicipioResidencia').val(),
                BarrioResidencia: $('#BarrioResidencia').val(),
                DireccionResidencia: $('#DireccionResidencia').val(),
                EstadoCivil: $('#EstadoCivil').val(),
                UsuarioCreacion: $('#UsuarioCreacion').val(),
                //FechaCreacion:$('#NumIdentificacion').val(),Tomados del server
            },
            Ocupation: {

                IdOcupacion: IdOcupacion,
                NivelEducativo: $('#NivelEducativo').val(),
                OperacionesDepor: $('#OperacionesDepor').val(),
                CualOperacion: $('#CualOperacion').val(),
                FracturasDepor: $('#FracturasDepor').val(),
                CualFractura: $('#CualFractura').val(),
                LesionesDepor: $('#LesionesDepor').val(),
                CualLesion: $('#CualLesion').val(),
                AlergiasDepor: $('#AlergiasDepor').val(),
                CualAlergia: $('#CualAlergia').val(),
                EspecialidadCombate: $('#EspecialidadCombate').val(),
                AñosActivos: $('#AñosActivos').val(),
                ClubDeportivo: $('#ClubDeportivo').val(),
                Peso: $('#Peso').val(),
                Estatura: $('#Estatura').val(),
                TallaCamisa: $('#TallaCamisa').val(),
                TallaPantalon: $('#TallaPantalon').val(),
                TallaCalzado: $('#TallaCalzado').val(),
                TallaSudadera: $('#TallaSudadera').val(),
                NumeroHijos: $('#NumeroHijos').val(),
                IdDeportista: $('#IdDeportista').val(),
            },//End obj Deportista
            DataFamiliar: {

                IdFamiliares: IdDatosfamiliares,
                NomMadre: $('#NomMadre').val(),
                ApeMadre: $('#ApeMadre').val(),
                NumDocumento: $('#NumDocumento').val(),
                Direccion: $('#Direccion').val(),
                Barrio: $('#Barrio').val(),
                Celular: $('#Celular').val(),
                Ocupacion: $('#Ocupacion').val(),
                NomPadre: $('#NomPadre').val(),
                ApePadre: $('#ApePadre').val(),
                NumPadre: $('#NumPadre').val(),
                DireccionPadre: $('#DireccionPadre').val(),
                BarrioPadre: $('#BarrioPadre').val(),
                CelularPadre: $('#CelularPadre').val(),
                OcupacionPadre: $('#OcupacionPadre').val(),
                MarcaTorneos: $('#MarcaTorneos').val(),
                LugarTorneos: $('#LugarTorneos').val(),
                EventosTorneos: $('#EventosTorneos').val(),
                FechaTorneros: $('#FechaTorneros').val(),
                
                EntrenadorActual: $('#EntrenadorActual').val(),
                EmailEntrenador: $('#EmailEntrenador').val(),
                TelefonoEntrenador: $('#TelefonoEntrenador').val(),
                LugarEntrenamientoEntrenador: $('#LugarEntrenamientoEntrenador').val(),
                HorasEntrenamiento: $('#HorasEntrenamiento').val(),
                DiasEntrenamiento: $('#DiasEntrenamiento').val(),
                ObservacionesEntrenamiento: $('#ObservacionesEntrenamiento').val(),
                IdDeportista: $('#IdFamiliares').val(),

            }
           
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/Deportista/Actualizar', ObjDeportista, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/Deportista/Agregar', ObjDeportista, 'Guardado');

           // LimpiarFormulario()
        }

    } 

    
  
}

function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../Deportista/ListaDeportista?opcion=" + OpcionDeporte;
    }
}


function LimpiarFormulario()
{
    
    $('#TipoIdentificacion').val('')
    $('#NumIdentificacion').val('')
    $('#EstadoDeportista').val('')
    $('#PrimerNombre').val('')
    $('#SegundoNombre').val('')
    $('#PrimerApellido').val('')
    $('#SegundoApellido').val('')
    $('#Imagen').val('')
    $('#Edad').val('')
    $('#Genero').val('')
    $('#GrupoSanguineo').val('')
    $('#Eps').val('')
    $('#CorreoDeportista').val('')
    $('#Deporte').val('')
    $('#FechaNacimiento').val('')
    $('#PaisNacimiento').val('')
    $('#DepartamentoNacimiento').val('')
    $('#MunicipioNacimiento').val('')
    $('#GrupoEtareo').val('')
    $('#CondicionPoblacion').val('')
    $('#Telefono').val('')
    $('#NivelEstudio').val('')
    $('#PaisResidencia').val('')
    $('#DepartamentoResidencia').val('')
    $('#MunicipioResidencia').val('')
    $('#BarrioResidencia').val('')
    $('#DireccionResidencia').val('')
    $('#TipoEtnia').val('')
    $('#ZonaInfluencia').val('')
    $('#EntidadPrestadora').val('')
    $('#NombreMonitor').val('')
    $('#NombreGrupo').val('')
    $('#NumIdentificacion').val('')
    $('#EstadoCivil').val('')
    $('#UsuarioCreacion').val('')
    $('#NumIdentificacion').val('')
    $('#NomMadre').val('')
    $('#ApeMadre').val('')
    $('#TipoDocumento').val('')
    $('#NumDocumento').val('')
    $('#Direccion').val('')
    $('#Barrio').val('')
    $('#Celular').val('')
    $('#Ocupacion').val('')
    $('#NomPadre').val('')
    $('#ApePadre').val('')
    $('#TipoPadre').val('')
    $('#NumPadre').val('')
    $('#DireccionPadre').val('')
    $('#BarrioPadre').val('')
    $('#CelularPadre').val('')
    $('#OcupacionPadre').val('')
    $('#Ocupacion1').val('')
    $('#NivelEducativo').val('')
    $('#Institucion').val('')
    $('#TelefonoInstitucion').val('')
    $('#DirectorGrado').val('')
    $('#Peso').val('')
    $('#Estatura').val('')
    $('#TallaCamisa').val('')
    $('#TallaPantalon').val('')
    $('#TallaCalzado').val('')
    $('#TallaSudadera').val('')
    $('#NumeroHijos').val('')
   
}

function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/Deportista/GetListdEportista');
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
