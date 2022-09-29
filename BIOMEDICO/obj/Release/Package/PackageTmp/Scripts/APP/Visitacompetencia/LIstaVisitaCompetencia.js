var TablaVisitacompetencia = [];
let OpcionDeporte = "";
$(document).ready(function () {
    OpcionDeporte = getQueryVariable('opcion');
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    RenderTable('datatable-Visitacompetencia', [0, 1, 2, 3, 4, 5, 6, 7 ], null, {
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
                filename: "VisitasTecnicas",
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

    tablaDeportista = $('#datatable-Visitacompetencia').DataTable();
    Get_Data(CargarTabla, '/VisitaCompetencias/GetListVisitaCompetencia')
    
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
    TablaVisitacompetencia.clear().draw();
    let DataVisitaCompetencia = data.objeto.DepoListResul;
    if (DataVisitaCompetencia.length>0) {
        DataVisitaCompetencia = DataVisitaCompetencia.filter(w => w.Deporte == OpcionDeporte);
    }
    console.log(DataVisitaCompetencia);
    $.each(DataVisitaCompetencia, function (index, item) {
        TablaVisitacompetencia.row.add([
            item.MedalleroDeportista,
            item.MedallaOroDeportista,
            item.MedallaPlataDeportista,
            //item.NombreMonitor + " " + item.PrimerApellido,
            item.MedallaBronceDeportista,
            item.MedalleroEquipo,
            item.MedallaOroEquipo,
            item.MedallaPlataEquipo,
            item.MedallaBronceEquipo,
            
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
            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizardEportistaData(' + item.IdVisitaCompetencia + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdVisitaCompetencia + ')" ></i>&ensp;'+
            '<i class="btn btn-warning btn-group-sm icon-shredder" title="PDF" onclick="VerPdfMerge(' + item.IdVisitaCompetencia + ')" ></i>&ensp;' 


        ]).draw(false);
        ////    
        //var FechaNacimiento = tablaDeportista.column(6);
        //var PaisNacimiento= tablaDeportista.column(7);
        //var DepartamentoNacimiento = tablaDeportista.column(8);
        //var MunicipioNacimiento= tablaDeportista.column(9);
        //var Edad= tablaDeportista.column(10);
        //var Genero= tablaDeportista.column(11);
        //var GrupoSanguineo= tablaDeportista.column(12);
        //var CorreoDeportista= tablaDeportista.column(13);
        //var Deporte= tablaDeportista.column(14);
        //var TelefonoFijo= tablaDeportista.column(15);
        //var TelefonoMovil= tablaDeportista.column(16);
        //var Pasaporte= tablaDeportista.column(17);
        //var MunicipioResidencia= tablaDeportista.column(18);
        //var BarrioResidencia= tablaDeportista.column(19);
        //var DireccionResidencia= tablaDeportista.column(20);
        //var EstadoCivil= tablaDeportista.column(21);
        ////    var PaisNacimiento= tablaDeportista.column(13);
        ////    var DepartamentoNacimiento= tablaDeportista.column(14);
        ////    var MunicipioNacimiento= tablaDeportista.column(15);
        ////    var GrupoEtareo= tablaDeportista.column(16);
        ////    var CondicionPoblacion= tablaDeportista.column(17);
        ////    var Telefono= tablaDeportista.column(18);
        ////    var NivelEstudio= tablaDeportista.column(19);
        ////    var PaisResidencia= tablaDeportista.column(20);
        ////    var DepartamentoResidencia= tablaDeportista.column(21);
        ////    var MunicipioResidencia= tablaDeportista.column(22);
        ////    var BarrioResidencia= tablaDeportista.column(23);
        ////    var DireccionResidencia= tablaDeportista.column(24);
        ////    var TipoEtnia= tablaDeportista.column(25);
        ////    var ZonaInfluencia= tablaDeportista.column(26);
        ////    var EntidadPrestadora= tablaDeportista.column(27);
        ////    var NombreMonitor= tablaDeportista.column(28);
        ////    var NombreGrupo= tablaDeportista.column(29);
        ////    var EstadoCivil= tablaDeportista.column(30);
        ////    var NomMadre= tablaDeportista.column(31);
        ////    var ApeMadre= tablaDeportista.column(32);
        ////    var TipoDocumento= tablaDeportista.column(33);
        ////    var NumDocumento= tablaDeportista.column(34);
        ////    var Direccion= tablaDeportista.column(35);
        ////    var Barrio= tablaDeportista.column(36);
        ////    var Celular= tablaDeportista.column(37);
        ////    var Ocupacion= tablaDeportista.column(38);
        ////    var NomPadre= tablaDeportista.column(39);
        ////    var ApePadre= tablaDeportista.column(40);
        ////    var TipoPadre= tablaDeportista.column(41);
        ////    var NumPadre= tablaDeportista.column(42);
        ////    var DireccionPadre= tablaDeportista.column(43);
        ////    var BarrioPadre= tablaDeportista.column(44);
        ////    var CelularPadre= tablaDeportista.column(45);
        ////    var OcupacionPadre= tablaDeportista.column(46);

           


        //FechaNacimiento.visible(false);
        //PaisNacimiento.visible(false);
        //    DepartamentoNacimiento.visible(false);
        //    MunicipioNacimiento.visible(false);
        //    Edad.visible(false);
        //    Genero.visible(false);
        //    GrupoSanguineo.visible(false);
        //    CorreoDeportista.visible(false);
        //    Deporte.visible(false);
        //    PaisNacimiento.visible(false);
        //    DepartamentoNacimiento.visible(false);
        //    MunicipioNacimiento.visible(false);
        //    TelefonoFijo.visible(false);
        //    TelefonoMovil.visible(false);
        //    Pasaporte.visible(false);
        //    MunicipioResidencia.visible(false);
        //    BarrioResidencia.visible(false);
        //    DireccionResidencia.visible(false);
        //    EstadoCivil.visible(false);
        

       

    });
}


function ActualizardEportistaData(IdVisitaCompetencia) {
    window.location.href = '../VisitaCompetencias/Agregar?Id=' + IdVisitaCompetencia;
    
}

function DetalleData(IdVisitaCompetencia) {
    window.location.href = '../VisitaCompetencias/Agregar?Id=' + IdVisitaCompetencia + "&Viewdetail=SI";

}



function RecargarTabla() {
    Get_Data(CargarTabla, '/VisitaCompetencias/GetListVisitaCompetencia')
}

function VerPdf(IdEncTrabj) {
    var formURL = '../Report?tipo=Deport' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}
function VerPdfMerge(IdEncTrabj) {
    var formURL = '../Report/PdfMergerGeneric?tipo=Med' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}