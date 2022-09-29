var TablaUnidadEntrenamiento = [];
let OpcionDeporte = "";
$(document).ready(function () {
    OpcionDeporte = getQueryVariable('opcion');
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    RenderTable('datatable-UnidadEntrenamiento', [0, 1, 2, 3, 4, 5, 6, 7
    ], null, {
        "paging": true,
        "ordering": false,
        "info": true,
        "searching": true,

        "dom": '<"top"flB>rt<"bottom"ip><"clear">',
        //dom: 'frtip',

        buttons: [
            {
                extend: 'excelHtml5',
                text: " <b>&ensp;<i class=' icon-download4 position-left'></i></b> Excel ",
                filename: "CitasMedicas",
                titleAttr: 'Excel',
            },
            //{
            //    extend: 'pdfHtml5',
            //    text: " <b>&ensp;<i class=' icon-download4 position-left'></i></b> PDF ",
            //    filename: "CitasMedicas",
            //    titleAttr: 'Excel',
            //},

        ]
    });

    TablaUnidadEntrenamiento = $('#datatable-UnidadEntrenamiento').DataTable();
    Get_Data(CargarTabla, '/UnidadEntrenamiento/GetListEntrenamiento')

});

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

function CargarTabla(data) {
    TablaUnidadEntrenamiento.clear().draw();
    let DataUnidadEntrenamiento = data.objeto.DepoListResul;
    if (DataUnidadEntrenamiento.length > 0) {
        DataUnidadEntrenamiento = DataUnidadEntrenamiento.filter(w => w.Deporte == OpcionDeporte);
    }
    console.log(DataUnidadEntrenamiento);
    $.each(DataUnidadEntrenamiento, function (index, item) {
        TablaUnidadEntrenamiento.row.add([
            item.NombreEntrenador,
            item.Deporte,
            item.Agrupacion,
            //item.NombreMonitor + " " + item.PrimerApellido,
            item.Categoria,
            item.Modalidad,
            item.ObjetivosSesion,
            item.NumMesociclo,
        
            //item.TelefonoFijo,
            //item.TelefonoMovil,
            //item.Pasaporte,
            //item.MunicipioResidencia,
            //item.BarrioResidencia,
            //item.DireccionResidencia,
            //item.EstadoCivil,
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].Peso : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].Estatura : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].TallaCamisa : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].TallaPantalon : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].TallaCalzado : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].TallaSudadera : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].NomPadre : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].ApePadre : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].CelularPadre : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].DireccionPadre : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].BarrioPadre : "",
            //item.CorreoDeportista,
            //item.GrupoSanguineo,
            //item.Eps,

            //item.NombreMonitor,
            //item.EstadoCivil,
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].NomMadre:"",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].ApeMadre:"",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].TipoDocumento:"",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].NumDocumento:"",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].Direccion:"",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].Barrio:"",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].Celular : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].Ocupacion : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].TipoPadre : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].NumPadre : "",
            //item.DatosFamiliares.length > 0 ? item.DatosFamiliares[0].OcupacionPadre: "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].Ocupacion1:"",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].NivelEducativo : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].Institucion : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].TelefonoInstitucion : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].DirectorGrado : "",
            //item.Ocupacion.length > 0 ? item.Ocupacion[0].NumeroHijos : "",



            //'<i class="btn btn-danger btn-group-sm icon-trash" title="Eliminar" onclick="Eliminar(' + item.IdDeportista + ')" ></i>&ensp;' +
            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizarEntrenadoresData(' + item.IdUnidadEntrenamiento + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdUnidadEntrenamiento + ')" ></i>&ensp;' +
            '<i class="btn btn-warning btn-group-sm icon-shredder" title="PDF" onclick="VerPdfMerge(' + item.NumIdentificacion + ')" ></i>&ensp;'


        ]).draw(false);
        //    
        //var FechaNacimiento = TablaUnidadEntrenamiento.column(6);
        //var PaisNacimiento = TablaUnidadEntrenamiento.column(7);
        //var DepartamentoNacimiento = TablaUnidadEntrenamiento.column(8);
        //var MunicipioNacimiento = TablaUnidadEntrenamiento.column(9);
        //var Edad = TablaUnidadEntrenamiento.column(10);
        //var Genero = TablaUnidadEntrenamiento.column(11);
        //var GrupoSanguineo = TablaUnidadEntrenamiento.column(12);
        //var CorreoDeportista = TablaUnidadEntrenamiento.column(13);
        //var Deporte = TablaUnidadEntrenamiento.column(14);
        //var TelefonoFijo = TablaUnidadEntrenamiento.column(15);
        //var TelefonoMovil = TablaUnidadEntrenamiento.column(16);
        //var Pasaporte = TablaUnidadEntrenamiento.column(17);
        //var MunicipioResidencia = TablaUnidadEntrenamiento.column(18);
        //var BarrioResidencia = TablaUnidadEntrenamiento.column(19);
        //var DireccionResidencia = TablaUnidadEntrenamiento.column(20);
        //var EstadoCivil = TablaUnidadEntrenamiento.column(21);
        ////    var PaisNacimiento= TablaUnidadEntrenamiento.column(13);
        //    var DepartamentoNacimiento= TablaUnidadEntrenamiento.column(14);
        //    var MunicipioNacimiento= TablaUnidadEntrenamiento.column(15);
        //    var GrupoEtareo= TablaUnidadEntrenamiento.column(16);
        //    var CondicionPoblacion= TablaUnidadEntrenamiento.column(17);
        //    var Telefono= TablaUnidadEntrenamiento.column(18);
        //    var NivelEstudio= TablaUnidadEntrenamiento.column(19);
        //    var PaisResidencia= TablaUnidadEntrenamiento.column(20);
        //    var DepartamentoResidencia= TablaUnidadEntrenamiento.column(21);
        //    var MunicipioResidencia= TablaUnidadEntrenamiento.column(22);
        //    var BarrioResidencia= TablaUnidadEntrenamiento.column(23);
        //    var DireccionResidencia= TablaUnidadEntrenamiento.column(24);
        //    var TipoEtnia= TablaUnidadEntrenamiento.column(25);
        //    var ZonaInfluencia= TablaUnidadEntrenamiento.column(26);
        //    var EntidadPrestadora= TablaUnidadEntrenamiento.column(27);
        //    var NombreMonitor= TablaUnidadEntrenamiento.column(28);
        //    var NombreGrupo= TablaUnidadEntrenamiento.column(29);
        //    var EstadoCivil= TablaUnidadEntrenamiento.column(30);
        //    var NomMadre= TablaUnidadEntrenamiento.column(31);
        //    var ApeMadre= TablaUnidadEntrenamiento.column(32);
        //    var TipoDocumento= TablaUnidadEntrenamiento.column(33);
        //    var NumDocumento= TablaUnidadEntrenamiento.column(34);
        //    var Direccion= TablaUnidadEntrenamiento.column(35);
        //    var Barrio= TablaUnidadEntrenamiento.column(36);
        //    var Celular= TablaUnidadEntrenamiento.column(37);
        //    var Ocupacion= TablaUnidadEntrenamiento.column(38);
        //    var NomPadre= TablaUnidadEntrenamiento.column(39);
        //    var ApePadre= TablaUnidadEntrenamiento.column(40);
        //    var TipoPadre= TablaUnidadEntrenamiento.column(41);
        //    var NumPadre= TablaUnidadEntrenamiento.column(42);
        //    var DireccionPadre= TablaUnidadEntrenamiento.column(43);
        //    var BarrioPadre= TablaUnidadEntrenamiento.column(44);
        //    var CelularPadre= TablaUnidadEntrenamiento.column(45);
        //    var OcupacionPadre= TablaUnidadEntrenamiento.column(46);




        //FechaNacimiento.visible(false);
        //PaisNacimiento.visible(false);
        //DepartamentoNacimiento.visible(false);
        //MunicipioNacimiento.visible(false);
        //Edad.visible(false);
        //Genero.visible(false);
        //GrupoSanguineo.visible(false);
        //CorreoDeportista.visible(false);
        //Deporte.visible(false);
        //PaisNacimiento.visible(false);
        //DepartamentoNacimiento.visible(false);
        //MunicipioNacimiento.visible(false);
        //TelefonoFijo.visible(false);
        //TelefonoMovil.visible(false);
        //Pasaporte.visible(false);
        //MunicipioResidencia.visible(false);
        //BarrioResidencia.visible(false);
        //DireccionResidencia.visible(false);
        //EstadoCivil.visible(false);




    });
}


function ActualizarEntrenadoresData(IdUnidadEntrenamientoDepor) {
    window.location.href = '../UnidadEntrenamiento/Agregar?Id=' + IdUnidadEntrenamientoDepor;

}

function DetalleData(IdUnidadEntrenamientoDepor) {
    window.location.href = '../UnidadEntrenamiento/Agregar?Id=' + IdUnidadEntrenamientoDepor + "&Viewdetail=SI";

}

function Eliminar(IdDepo) {
    swal({
        title: "Atención",
        text: "¿Estas seguro de eliminar este registro?",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {
                swal.close()
                Get_Data(RecargarTabla, '/UnidadEntrenamiento/Eliminar?idDep=' + IdDepo);
            }
            else {
                swal.close()
            }
        });

}

function RecargarTabla() {
    Get_Data(CargarTabla, '/UnidadEntrenamiento/GetListEntrenamiento')
}

function VerPdf(IdEncTrabj) {
    var formURL = '../Report?tipo=Deport' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}
function VerPdfMerge(IdEncTrabj) {
    var formURL = '../Report/PdfMergerGeneric?tipo=Med' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}