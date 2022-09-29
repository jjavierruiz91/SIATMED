var tablaDeporte = [];
$(document).ready(function () {

    RenderTable('datatable-Deporte', [0, 1, 2,3], null, {
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

    tablaDeporte = $('#datatable-Deporte').DataTable();
    Get_Data(CargarTabla, '/Deporte/GetListDeporte')

});

function CargarTabla(data) {
    tablaDeporte.clear().draw();
    let DeporteDeport = data.objeto;
    console.log(DeporteDeport);
    $.each(DeporteDeport, function (index, item) {
        tablaDeporte.row.add([
            item.IdDeporte,
            item.CodDeporte,
            item.NombreDeporte,
            
            //item.NombreMonitor + " " + item.PrimerApellido,
            /* item.FechaConsulta,*/
            //'<i class=" fa fa-window-close" title="Eliminar" onclick="Eliminar(' + item.IdMedicina + ')" ></i>&ensp;' +
            //'<i class="fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizardEportistaData(' + item.IdMedicina + ')"></i>'

            //'<i class="btn btn-danger btn-group-sm icon-trash" title="Eliminar" onclick="Eliminar(' + item.IdControlNutri + ')" ></i>&ensp;' +
            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizardEportistaData(' + item.IdDeporte + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdDeporte + ')" ></i>&ensp;'
        ]).draw(false);


        //var MediaTardeControl = tablaDeporte.column(6);
        //var CenaControl = tablaDeporte.column(7);
        //var PesoActualControl = tablaDeporte.column(8);
        //var CambiosControl = tablaDeporte.column(9);
        //var NuevoDiagnosticoControl = tablaDeporte.column(10);
        //////var NumIdentificacion = tablaDeporte.column(12);

        //MediaTardeControl.visible(false);
        //CenaControl.visible(false);
        //PesoActualControl.visible(false);
        //CambiosControl.visible(false);
        //NuevoDiagnosticoControl.visible(false);
        //NumIdentificacion.visible(false);



    });
}


function ActualizardEportistaData(IdDeporteDepor) {
    window.location.href = '../Deporte/Agregar?IdDeporteReg=' + IdDeporteDepor  + "&opcion=" +OpcionDeporte;

}
function DetalleData(IdDeporteDepor) {
    window.location.href = '../Deporte/Agregar?IdDeporteReg=' + IdDeporteDepor + "&Viewdetail=SI";

}

//function Eliminar(IdNutriDep) {
//    swal({
//        title: "Atención",
//        text: "¿Estas seguro de eliminar este registro?",
//        type: "warning",
//        showCancelButton: true,
//        confirmButtonClass: "btn-danger",
//        confirmButtonText: "Si",
//        cancelButtonText: "No",
//        closeOnConfirm: false,
//        closeOnCancel: false
//    },
//        function (isConfirm) {
//            if (isConfirm) {
//                swal.close()
//                Get_Data(RecargarTabla, '/Deporte/Eliminar?idControlNutri=' + IdNutriDep);
//            }
//            else {
//                swal.close()
//            }
//        });

//}

function RecargarTabla() {
    Get_Data(CargarTabla, '/Deporte/GetListDeporte')
}
