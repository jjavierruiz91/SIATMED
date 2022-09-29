var ObjAsesoriasEntrenadores = {
    AsesoriasEntrenadoresDeport: {} //{objetos} llaves y [array] corchetes
    
   
}

  
var validadorFormDeportista = [];
var IsUpdate = false;
var IdAsesoriasEntrenaminetoData = 0;
var IdEstudiosEntrenador = 0;

var VerDetalles = 'NO';
let OpcionDeporte = "";
$(document).ready(function () {
    IdAsesoriasEntrenaminetoData = getQueryVariable('Id');
    OpcionDeporte = getQueryVariable('opcion');
    VerDetalles = getQueryVariable('Viewdetail');

    if (IdAsesoriasEntrenaminetoData > 0) {
        IsUpdate = true;
    }
    //esconde_elemento('ImagenDeport')
    if (VerDetalles == "SI") {
        $('#SaveAsesoriasEntrenamiento').html('Atras')
        Get_Data(LlenarCampos, '/AsesoriasEntrenadores/GetAsesoriasEntrenadoresById?IdAsesoriasEntrenadoresDepor=' + IdAsesoriasEntrenaminetoData);
    //    visible_elemento('ImagenDeport')
    }

    if (IsUpdate && VerDetalles == 0) {
        $('#SaveAsesoriasEntrenamiento').html('Actualizar')
        Get_Data(LlenarCampos, '/AsesoriasEntrenadores/GetAsesoriasEntrenadoresById?IdAsesoriasEntrenadoresDepor=' + IdAsesoriasEntrenaminetoData);
    }
    $('#Deporte').val(OpcionDeporte).trigger("change");

});




function LlenarCampos(data) {
   

    $('#IdAsesoriasEntrenadores').val(data.objeto.IdAsesoriasEntrenadores);
    $('#NumIdentificacionDeportistas').val(data.objeto.NumIdentificacionDeportistas);
    $('#Deportista').val(data.objeto.Deportista);
    $('#Entrenador').val(data.objeto.Entrenador);
    $('#Metodologo').val(data.objeto.Metodologo);
    $('#Deporte').val(data.objeto.Deporte);
    $('#Agrupacion').val(data.objeto.Agrupacion);
    $('#Escenarios').val(data.objeto.Escenarios);
   

    $('#FechaAsesorias').val(data.objeto.FechaAsesorias);
    $('#TemasAsesorias').val(data.objeto.TemasAsesorias);
    $('#DesarrolloAsesorias').val(data.objeto.DesarrolloAsesorias);
    $('#ConclusionesAsesorias').val(data.objeto.ConclusionesAsesorias);
    $('#CompromisosAsesorias').val(data.objeto.CompromisosAsesorias);
    $('#Asistentes').val(data.objeto.Asistentes);
    
    $('#FirmaEntrenador').val(data.objeto.FirmaEntrenador);
    $('#FirmaMetodologo').val(data.objeto.FirmaMetodologo);

   
 

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
    document.getElementById("SaveAsesoriasEntrenamiento").disabled = true;
    if (VerDetalles == "SI") {
        Atras();
    }
    else {
        // if (validadorFormDeportista.form()) {
        var test = $('#NumIde').val();
        var IdAsesoriasEntrenadores = 0;
        if (IsUpdate) {
            IdAsesoriasEntrenadores = IdAsesoriasEntrenaminetoData;
        }
        //const file = document.querySelector('#Imagen').files[0];
        //console.log(await toBase64(file));
        ObjAsesoriasEntrenadores = {
            AsesoriasEntrenadoresDeport: {

                IdAsesoriasEntrenadores: IdAsesoriasEntrenadores,
                NumIdentificacionDeportistas: $('#NumIdentificacionDeportistas').val(),
                Deportista: $('#Deportista').val(),
                Entrenador: $('#Entrenador').val(),
                Metodologo: $('#Metodologo').val(),
                Deporte: $('#Deporte').val(),
                Agrupacion: $('#Agrupacion').val(),
                Escenarios: $('#Escenarios').val(),
     
                FechaAsesorias: $('#FechaAsesorias').val(),
                    TemasAsesorias: $('#TemasAsesorias').val(),
                    DesarrolloAsesorias: $('#DesarrolloAsesorias').val(),
                    ConclusionesAsesorias: $('#ConclusionesAsesorias').val(),
                    CompromisosAsesorias: $('#CompromisosAsesorias').val(),
                    Asistentes: $('#Asistentes').val(),
                    FirmaEntrenador: $('#FirmaEntrenador').val(),
                    FirmaMetodologo: $('#FirmaMetodologo').val(),
                      



                    }
            }
            
        }
        let id = 10;


        if (IsUpdate) {
            Save_Data(ActualizarVista, '/AsesoriasEntrenadores/Actualizar', ObjAsesoriasEntrenadores, 'Actualizacion');
        }
        else {
            Save_Data(ActualizarVista, '/AsesoriasEntrenadores/Agregar', ObjAsesoriasEntrenadores, 'Guardado');

            // LimpiarFormulario()
        }

    }





function ActualizarVista(data) {
    if (!data.Error) {
        window.location.href = "../AsesoriasEntrenadores/ListaAsesoriasEntrenadores?opcion=" + OpcionDeporte;
    }
}




function RecargarDataUpdate(data) {
    SwalErrorMsj(data.mensaje, '/AsesoriasEntrenadores/GetListAsesoriasEntrenadores');
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
