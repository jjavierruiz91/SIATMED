var TablaGymColiseo = [];
let OpcionDeporte = "";
let Agenda = [];
$(document).ready(function () {
    OpcionDeporte = getQueryVariable('opcion');
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    RenderTable('datatable-PlanGymColiseo', [0, 1, 2, 3, 4,5
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

    TablaGymColiseo = $('#datatable-PlanGymColiseo').DataTable();
    Get_Data(CargarTabla, '/GymColiseo/GetListGymColiseo')


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
let DataGymColiseo = [];
function CargarTabla(data) {
    TablaGymColiseo.clear().draw();
    DataGymColiseo = data.objeto.DepoListResul;
    if (DataGymColiseo.length > 0) {
        CargarCalendario();
        DataGymColiseo = DataGymColiseo.filter(w => w.DeporteGymColiseo == OpcionDeporte);
        $('#Deporte').html("Deporte: "+DataGymColiseo[0].DeporteGymColiseo);
    }
    console.log(DataGymColiseo);
    $.each(DataGymColiseo, function (index, item) {
        TablaGymColiseo.row.add([
            item.DeporteGymColiseo,
            item.CategoriaGymColiseo,
            item.EntrenadorGymColiseo,
            item.HoraInicioGymColiseo.Hours + ':' + item.HoraInicioGymColiseo.Minutes + ':' + item.HoraInicioGymColiseo.Seconds,
            item.HoraFinalGymColiseo.Hours + ':' + item.HoraFinalGymColiseo.Minutes + ':' + item.HoraFinalGymColiseo.Seconds,



           

            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizarEntrenadoresData(' + item.IdGymColiseo + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdGymColiseo + ')" ></i>&ensp;' +
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


function ActualizarEntrenadoresData(IdGymColiseo) {
    window.location.href = '../GymColiseo/Agregar?Id=' + IdGymColiseo;

}

function DetalleData(IdGymColiseo) {
    window.location.href = '../GymColiseo/Agregar?Id=' + IdGymColiseo + "&Viewdetail=SI";

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
                Get_Data(RecargarTabla, '/GymColiseo/Eliminar?idDep=' + IdDepo);
            }
            else {
                swal.close()
            }
        });

}

function RecargarTabla() {
    Get_Data(CargarTabla, '/GymColiseo/GetListGymColiseo')
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
    $.each(DataGymColiseo, function (index, item) {
        FechaGymColiseo = JSONDateconverter(item.FechaGymColiseo)
        y = FechaGymColiseo.split('-')[0];
        m = (FechaGymColiseo.split('-')[1]) - 1;
        d = FechaGymColiseo.split('-')[2];

        Agenda.push({
            title: 'AGENDA CON ' + item.EntrenadorGymColiseo,
            start: new Date(y, m, d),
            startEditable: false,
            color: '#2eb1fc',
            id: item.IdGymColiseo

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
            var DataLocal = DataGymColiseo.find(function (elemt) {
                return elemt.IdGymColiseo == item.id;
            })
            $("#ShowInfo div").remove();

            
            let horax = DataLocal.HoraInicioGymColiseo;
            let horafinal = DataLocal.HoraFinalGymColiseo;
            var hora = moment(horax).format('LT');
            var horafin = moment(horafinal).format('LT');

            var hora = moment(hora, "HH:mm").format("hh:mm A");
            var horafin = moment(horafin, "HH:mm").format("hh:mm A");

            var parametros = '<div class="modal-dialog modal-xs" style="z-index:0">' +
                '<div class="modal-content">' +
                '<div class="modal-header text-left">' +
                '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Cerrar</span></button>' +
                '<h3>Horario Entrenamiento Coliseo</h3>' +
                ' </div>' +
                '<div class="modal-body">' +
                '<form id="form-candidato">' +

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Deporte:</strong> <span class="labellabel-primary">' + DataLocal.DeporteGymColiseo + '</span></label>' +
                '</div>' +
                '</div>' +
                '</div>' +

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Nombre Deportista:</strong> ' + DataLocal.CategoriaGymColiseo + '</label>' +
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
                '<label class="control-label text-right"><strong>Fecha Entrenamiento:</strong> ' + JSONDateconverter(DataLocal.FechaGymColiseo) + '</label>' +


                '</div>' +
                ' </div>' +
                '</div>' +

                '<div class="row">' +
                '<div class="col-sm-12">' +
                '<div class="form-group">' +
                '<label class="control-label text-right"><strong>Nombre Entrenador:</strong> ' + DataLocal.EntrenadorGymColiseo + '</label>' +
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

