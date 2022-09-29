var TablaCronogramaActividades = [];
let OpcionDeporte = "";
$(document).ready(function () {
    OpcionDeporte = getQueryVariable('opcion');
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    RenderTable('datatable-CronogramActividades', [0, 1, 2, 3, 4, 5, 6,7
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

    TablaCronogramaActividades = $('#datatable-CronogramActividades').DataTable();
    Get_Data(CargarTabla, '/CronogramaActividades/GetListCronogramaActividades')

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
    TablaCronogramaActividades.clear().draw();
    let DataCronogramaActividades = data.objeto.DepoListResul;
    if (DataCronogramaActividades.length > 0) {
        DataCronogramaActividades = DataCronogramaActividades.filter(w => w.DeporteActividadesSemanales == OpcionDeporte);
    }
    console.log(DataCronogramaActividades);
    $.each(DataCronogramaActividades, function (index, item) {
        TablaCronogramaActividades.row.add([
            item.EntrenadorActividadesSemanales,
            item.DeporteActividadesSemanales,
            JSONDateconverter(item.SemanadelActividadesSemanales),
            JSONDateconverter(item.SemanaHastaActividadesSemanales),
            item.ActividadActividadesSemanales,
            item.HoraActividadesSemanales.Hours + ':' + item.HoraActividadesSemanales.Minutes + ':' + item.HoraActividadesSemanales.Seconds,
            JSONDateconverter(item.FechaActividadesSemanales),


            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizarEntrenadoresData(' + item.IdCronogramaActividadesSemanales + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdCronogramaActividadesSemanales + ')" ></i>&ensp;' +
            '<i class="btn btn-warning btn-group-sm icon-shredder" title="PDF" onclick="VerPdfMerge(' + item.NumIdentificacion + ')" ></i>&ensp;'


        ]).draw(false);
       




    });
}


function ActualizarEntrenadoresData(IdAsesoriasEntrenadoresDepor) {
    window.location.href = '../CronogramaActividades/Agregar?Id=' + IdAsesoriasEntrenadoresDepor;

}

function DetalleData(IdAsesoriasEntrenadoresDepor) {
    window.location.href = '../CronogramaActividades/Agregar?Id=' + IdAsesoriasEntrenadoresDepor + "&Viewdetail=SI";

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
                Get_Data(RecargarTabla, '/CronogramaActividades/Eliminar?idDep=' + IdDepo);
            }
            else {
                swal.close()
            }
        });

}

function RecargarTabla() {
    Get_Data(CargarTabla, '/CronogramaActividades/GetListCronogramaActividades')
}

function VerPdf(IdEncTrabj) {
    var formURL = '../Report?tipo=Deport' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}
function VerPdfMerge(IdEncTrabj) {
    var formURL = '../Report/PdfMergerGeneric?tipo=Med' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}