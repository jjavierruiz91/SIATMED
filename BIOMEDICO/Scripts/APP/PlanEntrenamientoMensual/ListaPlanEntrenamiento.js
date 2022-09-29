var TablaPlanEntrenamiento = [];
let OpcionDeporte = "";
$(document).ready(function () {
    OpcionDeporte = getQueryVariable('opcion');
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    RenderTable('datatable-PlanEntrenamiento', [0, 1, 2, 3, 4, 5, 6,7
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

    TablaPlanEntrenamiento = $('#datatable-PlanEntrenamiento').DataTable();
    Get_Data(CargarTabla, '/EntrenamientoMensual/GetListAnalisMacroMensual')

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
    TablaPlanEntrenamiento.clear().draw();
    let DataPlanEntrenamiento = data.objeto.DepoListResul;
    if (DataPlanEntrenamiento.length > 0) {
        DataPlanEntrenamiento = DataPlanEntrenamiento.filter(w => w.Deporte == OpcionDeporte);
    }
    console.log(DataPlanEntrenamiento);
    $.each(DataPlanEntrenamiento, function (index, item) {
        TablaPlanEntrenamiento.row.add([
            item.NumIdentificacionDeportista,
            item.NombreDeportista,
            item.Entrenador,
            //item.NombreMonitor + " " + item.PrimerApellido,
            item.Deporte,
            item.Agrupacion,
            item.Categoria,
            item.Modalidad,
            /*item.FechaNacimientoEntrenador != null ? JSONDateconverter(item.FechaNacimientoEntrenador) : '',*/
      


            //'<i class="btn btn-danger btn-group-sm icon-trash" title="Eliminar" onclick="Eliminar(' + item.IdDeportista + ')" ></i>&ensp;' +
            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizarEntrenadoresData(' + item.IdPlanEntrenamientoMensual + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdPlanEntrenamientoMensual + ')" ></i>&ensp;' +
            '<i class="btn btn-warning btn-group-sm icon-shredder" title="PDF" onclick="VerPdfMerge(' + item.NumIdentificacion + ')" ></i>&ensp;'


        ]).draw(false);
        //    
        //var FechaNacimiento = TablaEntrenadores.column(6);
        //var PaisNacimiento = TablaEntrenadores.column(7);
        //var DepartamentoNacimiento = TablaEntrenadores.column(8);
        //var MunicipioNacimiento = TablaEntrenadores.column(9);
        //var Edad = TablaEntrenadores.column(10);
        //var Genero = TablaEntrenadores.column(11);
        //var GrupoSanguineo = TablaEntrenadores.column(12);
        //var CorreoDeportista = TablaEntrenadores.column(13);
        //var Deporte = TablaEntrenadores.column(14);
        //var TelefonoFijo = TablaEntrenadores.column(15);
        //var TelefonoMovil = TablaEntrenadores.column(16);
        //var Pasaporte = TablaEntrenadores.column(17);
        //var MunicipioResidencia = TablaEntrenadores.column(18);
        //var BarrioResidencia = TablaEntrenadores.column(19);
        //var DireccionResidencia = TablaEntrenadores.column(20);
        //var EstadoCivil = TablaEntrenadores.column(21);
        ////    var PaisNacimiento= TablaEntrenadores.column(13);
        //    var DepartamentoNacimiento= TablaEntrenadores.column(14);
        //    var MunicipioNacimiento= TablaEntrenadores.column(15);
        //    var GrupoEtareo= TablaEntrenadores.column(16);
        //    var CondicionPoblacion= TablaEntrenadores.column(17);
        //    var Telefono= TablaEntrenadores.column(18);
        //    var NivelEstudio= TablaEntrenadores.column(19);
        //    var PaisResidencia= TablaEntrenadores.column(20);
        //    var DepartamentoResidencia= TablaEntrenadores.column(21);
        //    var MunicipioResidencia= TablaEntrenadores.column(22);
        //    var BarrioResidencia= TablaEntrenadores.column(23);
        //    var DireccionResidencia= TablaEntrenadores.column(24);
        //    var TipoEtnia= TablaEntrenadores.column(25);
        //    var ZonaInfluencia= TablaEntrenadores.column(26);
        //    var EntidadPrestadora= TablaEntrenadores.column(27);
        //    var NombreMonitor= TablaEntrenadores.column(28);
        //    var NombreGrupo= TablaEntrenadores.column(29);
        //    var EstadoCivil= TablaEntrenadores.column(30);
        //    var NomMadre= TablaEntrenadores.column(31);
        //    var ApeMadre= TablaEntrenadores.column(32);
        //    var TipoDocumento= TablaEntrenadores.column(33);
        //    var NumDocumento= TablaEntrenadores.column(34);
        //    var Direccion= TablaEntrenadores.column(35);
        //    var Barrio= TablaEntrenadores.column(36);
        //    var Celular= TablaEntrenadores.column(37);
        //    var Ocupacion= TablaEntrenadores.column(38);
        //    var NomPadre= TablaEntrenadores.column(39);
        //    var ApePadre= TablaEntrenadores.column(40);
        //    var TipoPadre= TablaEntrenadores.column(41);
        //    var NumPadre= TablaEntrenadores.column(42);
        //    var DireccionPadre= TablaEntrenadores.column(43);
        //    var BarrioPadre= TablaEntrenadores.column(44);
        //    var CelularPadre= TablaEntrenadores.column(45);
        //    var OcupacionPadre= TablaEntrenadores.column(46);




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


function ActualizarEntrenadoresData(IdPlanEntrenaminetoDepor) {
    window.location.href = '../EntrenamientoMensual/Agregar?Id=' + IdPlanEntrenaminetoDepor;

}

function DetalleData(IdPlanEntrenaminetoDepor) {
    window.location.href = '../EntrenamientoMensual/Agregar?Id=' + IdPlanEntrenaminetoDepor + "&Viewdetail=SI";

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
                Get_Data(RecargarTabla, '/EntrenamientoMensual/Eliminar?idDep=' + IdDepo);
            }
            else {
                swal.close()
            }
        });

}

function RecargarTabla() {
    Get_Data(CargarTabla, '/EntrenamientoMensual/GetListAnalisMacroMensual')
}

function VerPdf(IdEncTrabj) {
    var formURL = '../Report?tipo=Deport' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}
function VerPdfMerge(IdEncTrabj) {
    var formURL = '../Report/PdfMergerGeneric?tipo=Med' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}