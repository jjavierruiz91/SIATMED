var TablaAnalisMacroCiclo = [];
let OpcionDeporte = "";
$(document).ready(function () {
    OpcionDeporte = getQueryVariable('opcion');
    //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    //    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    RenderTable('datatable-AnalisiMacrociclo', [0, 1, 2, 3, 4, 5, 6
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

    TablaAnalisMacroCiclo = $('#datatable-AnalisiMacrociclo').DataTable();
    Get_Data(CargarTabla, '/AnalisisMacroCiclo/GetListAnalisisMacroCiclo')
    
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
    TablaAnalisMacroCiclo.clear().draw();
    let DataDepor = data.objeto.DepoListResul;
    if (DataDepor.length>0) {
        DataDepor = DataDepor.filter(w => w.Deporte == OpcionDeporte);
    }
    console.log(DataDepor);
    $.each(DataDepor, function (index, item) {
         TablaAnalisMacroCiclo.row.add([
             item.NumIdentificacionDeportist,
             item.NombreDeportist,
             item.Entrenador,
            //item.NombreMonitor + " " + item.PrimerApellido,
             item.Deporte,
             item.Agrupacion,
             item.Categoria,
             
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
            '<i class="btn btn-primary btn-group-sm fa fa-pencil-square-o" id="edit_ActEco_' + index + '" title="Modificar" style="fontsize:90px !important" onclick="ActualizardEportistaData(' + item.IdDeportista + ')"></i>&ensp;' +
            '<i class="btn btn-info btn-group-sm icon-magazine" title="Detalle" onclick="DetalleData(' + item.IdDeportista + ')" ></i>&ensp;'+
            '<i class="btn btn-warning btn-group-sm icon-shredder" title="PDF" onclick="VerPdfMerge(' + item.NumIdentificacion + ')" ></i>&ensp;' 


        ]).draw(false);
        //    
        //var FechaNacimiento = TablaAnalisMacroCiclo.column(6);
        //var PaisNacimiento= TablaAnalisMacroCiclo.column(7);
        //var DepartamentoNacimiento = TablaAnalisMacroCiclo.column(8);
        //var MunicipioNacimiento= TablaAnalisMacroCiclo.column(9);
        //var Edad= TablaAnalisMacroCiclo.column(10);
        //var Genero= TablaAnalisMacroCiclo.column(11);
        //var GrupoSanguineo= TablaAnalisMacroCiclo.column(12);
        //var CorreoDeportista= TablaAnalisMacroCiclo.column(13);
        //var Deporte= TablaAnalisMacroCiclo.column(14);
        //var TelefonoFijo= TablaAnalisMacroCiclo.column(15);
        //var TelefonoMovil= TablaAnalisMacroCiclo.column(16);
        //var Pasaporte= TablaAnalisMacroCiclo.column(17);
        //var MunicipioResidencia= TablaAnalisMacroCiclo.column(18);
        //var BarrioResidencia= TablaAnalisMacroCiclo.column(19);
        //var DireccionResidencia= TablaAnalisMacroCiclo.column(20);
        //var EstadoCivil= TablaAnalisMacroCiclo.column(21);
        ////    var PaisNacimiento= TablaAnalisMacroCiclo.column(13);
        ////    var DepartamentoNacimiento= TablaAnalisMacroCiclo.column(14);
        ////    var MunicipioNacimiento= TablaAnalisMacroCiclo.column(15);
        ////    var GrupoEtareo= TablaAnalisMacroCiclo.column(16);
        ////    var CondicionPoblacion= TablaAnalisMacroCiclo.column(17);
        ////    var Telefono= TablaAnalisMacroCiclo.column(18);
        ////    var NivelEstudio= TablaAnalisMacroCiclo.column(19);
        ////    var PaisResidencia= TablaAnalisMacroCiclo.column(20);
        ////    var DepartamentoResidencia= TablaAnalisMacroCiclo.column(21);
        ////    var MunicipioResidencia= TablaAnalisMacroCiclo.column(22);
        ////    var BarrioResidencia= TablaAnalisMacroCiclo.column(23);
        ////    var DireccionResidencia= TablaAnalisMacroCiclo.column(24);
        ////    var TipoEtnia= TablaAnalisMacroCiclo.column(25);
        ////    var ZonaInfluencia= TablaAnalisMacroCiclo.column(26);
        ////    var EntidadPrestadora= TablaAnalisMacroCiclo.column(27);
        ////    var NombreMonitor= TablaAnalisMacroCiclo.column(28);
        ////    var NombreGrupo= TablaAnalisMacroCiclo.column(29);
        ////    var EstadoCivil= TablaAnalisMacroCiclo.column(30);
        ////    var NomMadre= TablaAnalisMacroCiclo.column(31);
        ////    var ApeMadre= TablaAnalisMacroCiclo.column(32);
        ////    var TipoDocumento= TablaAnalisMacroCiclo.column(33);
        ////    var NumDocumento= TablaAnalisMacroCiclo.column(34);
        ////    var Direccion= TablaAnalisMacroCiclo.column(35);
        ////    var Barrio= TablaAnalisMacroCiclo.column(36);
        ////    var Celular= TablaAnalisMacroCiclo.column(37);
        ////    var Ocupacion= TablaAnalisMacroCiclo.column(38);
        ////    var NomPadre= TablaAnalisMacroCiclo.column(39);
        ////    var ApePadre= TablaAnalisMacroCiclo.column(40);
        ////    var TipoPadre= TablaAnalisMacroCiclo.column(41);
        ////    var NumPadre= TablaAnalisMacroCiclo.column(42);
        ////    var DireccionPadre= TablaAnalisMacroCiclo.column(43);
        ////    var BarrioPadre= TablaAnalisMacroCiclo.column(44);
        ////    var CelularPadre= TablaAnalisMacroCiclo.column(45);
        ////    var OcupacionPadre= TablaAnalisMacroCiclo.column(46);

           


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


function ActualizardEportistaData(IdAnalisMacro) {
    window.location.href ='../AnalisisMacroCiclo/Agregar?IdAnalis=' + IdAnalisMacro;
    
}

function DetalleData(IdAnalisMacro) {
    window.location.href = '../AnalisisMacroCiclo/Agregar?IdAnalis=' + IdAnalisMacro + "&Viewdetail=SI";

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
                Get_Data(RecargarTabla, '/AnalisisMacroCiclo/Eliminar?idDep=' + IdDepo);            }
            else {
                swal.close()
            }
        });
    
}

function RecargarTabla() {
    Get_Data(CargarTabla, '/AnalisisMacroCiclo/GetListAnalisisMacroCiclo')
}

function VerPdf(IdEncTrabj) {
    var formURL = '../Report?tipo=Deport' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}
function VerPdfMerge(IdEncTrabj) {
    var formURL = '../Report/PdfMergerGeneric?tipo=Med' + "&IdUser=" + IdEncTrabj;
    window.open(formURL, "_blank");

}