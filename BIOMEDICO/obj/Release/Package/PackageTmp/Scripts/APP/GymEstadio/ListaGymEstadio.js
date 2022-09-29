var TablaGymEstadio = [];
let OpcionDeporte = "";
let Agenda = [];
$(document).ready(function () {
    OpcionDeporte = getQueryVariable('opcion');
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    RenderTable('datatable-PlanGymColiseo', [0, 1, 2, 3, 4,5,6
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

    TablaGymEstadio = $('#datatable-PlanGymColiseo').DataTable();
    Get_Data(CargarTabla, '/GymEstadio/GetListGymEstadio')


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
let DataGymEstadio = [];
function CargarTabla(data) {
    TablaGymEstadio.clear().draw();
    DataGymEstadio = data.objeto.DepoListResul;
    if (DataGymEstadio.length > 0) {
        CargarCalendario();
        DataGymEstadio = DataGymEstadio.filter(w => w.DeporteGymEstadio == OpcionDeporte);
        $('#Deporte').html("Deporte: "+DataGymEstadio[0].DeporteGymEstadio);
    }
    console.log(DataGymEstadio);
    $.each(DataGymEstadio, function (index, item) {
        TablaGymEstadio.row.add([
            item.DeporteGymEstadio,
            item.CategoriaGymEstadio,
            item.TelefonoGymEstadio,
            item.EntrenadorGymEstadio,
            item.HoraInicioGymEstadio.Hours + ':' + item.HoraInicioGymEstadio.Minutes + ':' + item.HoraInicioGymEstadio.Seconds,
            item.HoraFinalGymEstadio.Hours + ':' + item.HoraFinalGymEstadio.Minutes + ':' + item.HoraFinalGymEstadio.Seconds,
            


           

            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizarEntrenadoresData(' + item.IdGymEstadio + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdGymEstadio + ')" ></i>&ensp;' +
            '<i class="btn btn-warning btn-group-sm icon-shredder" title="PDF" onclick="VerPdfMerge(' + item.NumIdentificacion + ')" ></i>&ensp;'


        ]).draw(false);
        



    });
}


function ActualizarEntrenadoresData(IdGymEstadio) {
    window.location.href = '../GymEstadio/Agregar?Id=' + IdGymEstadio;

}

function DetalleData(IdGymEstadio) {
    window.location.href = '../GymEstadio/Agregar?Id=' + IdGymEstadio + "&Viewdetail=SI";

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
                Get_Data(RecargarTabla, '/GymEstadio/Eliminar?idDep=' + IdDepo);
            }
            else {
                swal.close()
            }
        });

}

function RecargarTabla() {
    Get_Data(CargarTabla, '/GymEstadio/GetListGymEstadio')
}

function VerPdf(IdEncTrabj) {
    var formURL = '../Report?tipo=Deport' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}
function VerPdfMerge(IdEncTrabj) {
    var formURL = '../Report/PdfMergerGeneric?tipo=Med' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}

function CargarCalendario() {
    $.each(DataGymEstadio, function (index, item) {
        FechaGymEstadio = JSONDateconverter(item.FechaGymEstadio)
        y = FechaGymEstadio.split('-')[0];
        m = (FechaGymEstadio.split('-')[1]) - 1;
        d = FechaGymEstadio.split('-')[2];

        Agenda.push({
            title: 'AGENDA CON ' + item.EntrenadorGymEstadio,
            start: new Date(y, m, d),
            startEditable: false,
            color: '#2eb1fc',
            id: item.IdGymEstadio

        });

    })
    PintarCalendar();
}

function PintarCalendar() {
    //ShowLoading();

    /* initialize the external events
     -----------------------------------------------------------------*/
    $('#external-events div.external-event').each(function () {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 1111999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });
    });


    /* initialize the calendar
     -----------------------------------------------------------------*/
    $('#calendar').fullCalendar({
        lang: 'es',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'

        },
        displayEventTime: false,
        editable: false,
        events: Agenda,
        eventClick: function (item) {
            var DataLocal = DataGymEstadio.find(function (elemt) {
                return elemt.IdGymEstadio == item.id;
            })
            $("#ShowInfo div").remove();

            
            
            let horax = DataLocal.HoraInicioGymEstadio;
            let horafinal = DataLocal.HoraFinalGymEstadio;
            var hora = moment(horax).format('LT');
            var horafin = moment(horafinal).format('LT');

            var hora = moment(hora, "HH:mm").format("hh:mm A");
            var horafin = moment(horafin, "HH:mm").format("hh:mm A");

            var parametros = '<div class="modal-dialog modal-xs" style="z-index:0">' +
                '<div class="modal-content">' +
                '<div class="modal-header text-left">' +
                '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Cerrar</span></button>' +
                '<h3>Horario Entrenamiento Estadio</h3>' +
                ' </div>' +
                '<div class="modal-body">' +
                '<form id="form-candidato">' +

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Deporte:</strong> <span class="labellabel-primary">' + DataLocal.DeporteGymEstadio + '</span></label>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Categoria:</strong> ' + DataLocal.CategoriaGymEstadio + '</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
              
                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Hora Inicio:</strong> ' + hora + '</label>' +
                '</div>' +
                ' </div>' +
                '</div>' +

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Hora final:</strong> ' + horafin + '</label>' +
                '</div>' +
                ' </div>' +
                '</div>' +
               
               

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Fecha Entrenamiento:</strong> ' + JSONDateconverter(DataLocal.FechaGymEstadio) + '</label>' +


                '</div>' +
                ' </div>' +
                '</div>' +

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Nombre Entrenador:</strong> ' + DataLocal.EntrenadorGymEstadio + '</label>' +
                '</div>' +
                ' </div>' +
                '</div>' +

                

                '<input type="hidden" id="HidC" name="HidC" class="form-control">' +
                '</form>' +
                '</div>' +

                '<div class="modal-footer text-center">' +
                '<button type="button" class="btn btn-white" data-dismiss="modal">Cerrar</button>' +
                '</div>' +
                '</div>' +
                '</div>';

            $('#ShowInfo').append(parametros);
            $('#ShowInfo').modal('show');

        }


    });
}

