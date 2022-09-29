using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class PlanGraficoController : Controller
    {
        // GET: PlanGrafico
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaPlanGrafico()
        {
            return View();
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }

        public struct ObjPlanGrafico
        {
            public PlanGrafico PlanGraficoDeport { get; set; }
            public List<PlanGraficoDatos> PlanGraficoDatosDeport { get; set; }




        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }



        [HttpGet]
        public JsonResult GetListPlanGrafico()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var PlanGraficoExiste = db.PlanGrafico.ToList().OrderByDescending(o => o.IdPlanGrafico);

                foreach (var item in PlanGraficoExiste)
                {
                    item.PlanGraficoDatos = db.PlanGraficoDatos.Where(w => w.IdPlanGrafico == item.IdPlanGrafico).ToList();



                }
                ret.objeto = new { DepoListResul = PlanGraficoExiste };


            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetPlanGraficoExisteById(int IdPlanGrafico)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var PlanGraficoUpdate = db.PlanGrafico.FirstOrDefault(w => w.IdPlanGrafico == IdPlanGrafico);
                if (PlanGraficoUpdate != null)
                {
                    PlanGraficoUpdate.PlanGraficoDatos = db.PlanGraficoDatos.Where(w => w.IdPlanGrafico == PlanGraficoUpdate.IdPlanGrafico).ToList();
                }


                ret.objeto = PlanGraficoUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjPlanGrafico a)
        {
            Respuesta Retorno = new Respuesta();

            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    //a.Depor = db.Deportistas.Where(w => w.CodRol == a.CodRol).FirstOrDefault();
                    a.PlanGraficoDeport.FechaRegistro = DateTime.Now;
                    a.PlanGraficoDeport.UsuarioRegistra = Utilidades.ActiveUser.NomUsuario;
                    //a.EntrenadoresDeport.Imagen = SaveImagenFile(a.EntrenadoresDeport.Imagen, a.EntrenadoresDeport.NumeroIdentificacionEntrenador.ToString() + ".jpg");
                    db.PlanGrafico.Add(a.PlanGraficoDeport);
                    db.SaveChanges();
                    var Id = a.PlanGraficoDeport.IdPlanGrafico;

                    //ADD ID TO TABLE DATAFAMILIA
                    a.PlanGraficoDatosDeport.ForEach(w => w.IdPlanGrafico = Id);
                    a.PlanGraficoDatosDeport.ForEach(s => s.PlanGrafico = db.PlanGrafico.FirstOrDefault(w => w.IdPlanGrafico == Id));

                    ////add id to tabla ocupation

                    db.PlanGraficoDatos.AddRange(a.PlanGraficoDatosDeport);
                    db.SaveChanges();

                    if (Id > 0)
                    {
                        Retorno.mensaje = "Guardado";

                    }
                    else
                    {
                        Retorno.Error = true;
                        Retorno.mensaje = "No se pudo guardar";
                    }

                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar ficha tecnica";
            }
            return Json(Retorno, JsonRequestBehavior.AllowGet);
        }


        //[HttpPost]
        ////[ValidateAntiForgeryToken]
        //public JsonResult Actualizar(ObjMesociclo a)
        //{
        //    Respuesta Retorno = new Respuesta();
        //    //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
        //    //if (!ModelState.IsValid)
        //    //    Retorno.mensaje="Datos invalidos";

        //    try
        //    {

        //        using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

        //        {
        //            try
        //            {
        //                var MesocicloExiste = db.Mesociclo.FirstOrDefault(w => w.IdMesociclo == a.MesocicloDeport.IdMesociclo);
        //                if (MesocicloExiste != null)
        //                {
        //                    MesocicloExiste.Deporte = a.MesocicloDeport.Deporte;
        //                    MesocicloExiste.Deportista = a.MesocicloDeport.Deportista;
        //                    MesocicloExiste.Agrupacion = a.MesocicloDeport.Agrupacion;
        //                    MesocicloExiste.Categoria = a.MesocicloDeport.Categoria;
        //                    MesocicloExiste.Mesociclo1 = a.MesocicloDeport.Mesociclo1;
        //                    MesocicloExiste.TipoMesociclo = a.MesocicloDeport.TipoMesociclo;
        //                    MesocicloExiste.Microciclo = a.MesocicloDeport.Microciclo;
        //                    MesocicloExiste.ObjetivosFisicos = a.MesocicloDeport.ObjetivosFisicos;
        //                    MesocicloExiste.ObjetivosTacticos = a.MesocicloDeport.ObjetivosTacticos;


        //                    db.SaveChanges();

        //                }


        //                var MesocicloDatosExiste = db.MesocicloDatos.FirstOrDefault(w => w.IdMesociclo == a.MesocicloDeport.IdMesociclo);
        //                if (MesocicloDatosExiste != null)
        //                {
        //                    MesocicloDatosExiste.NombreElemento = a.MesocicloDatosDeport.NombreElemento.string;
        //                    MesocicloDatosExiste.ApeMadre = a.DataFamiliar.ApeMadre;
        //                    //MesocicloDatosExiste.TipoDocumento = a.DataFamiliar.TipoDocumento;
        //                    //MesocicloDatosExiste.NumDocumento = a.DataFamiliar.NumDocumento;
        //                    MesocicloDatosExiste.Direccion = a.DataFamiliar.Direccion;
        //                    MesocicloDatosExiste.Barrio = a.DataFamiliar.Barrio;
        //                    MesocicloDatosExiste.Celular = a.DataFamiliar.Celular;
        //                    MesocicloDatosExiste.Ocupacion = a.DataFamiliar.Ocupacion;
        //                    MesocicloDatosExiste.NomPadre = a.DataFamiliar.NomPadre;
        //                    //MesocicloDatosExiste.TipoPadre = a.DataFamiliar.TipoPadre;
        //                    //MesocicloDatosExiste.NumPadre = a.DataFamiliar.NumPadre;
        //                    MesocicloDatosExiste.DireccionPadre = a.DataFamiliar.DireccionPadre;
        //                    MesocicloDatosExiste.BarrioPadre = a.DataFamiliar.BarrioPadre;
        //                    MesocicloDatosExiste.CelularPadre = a.DataFamiliar.CelularPadre;
        //                    MesocicloDatosExiste.OcupacionPadre = a.DataFamiliar.OcupacionPadre;
        //                    MesocicloDatosExiste.OcupacionPadre = a.DataFamiliar.OcupacionPadre;
        //                    MesocicloDatosExiste.Deportistas = Deportistaexiste;
        //                    NombreElemento: $('#NombreElemento_' + i + '').val(),
        //        Microciclo1: $('#Microciclo1').val(),
        //        Microciclo2: $('#Microciclo2').val(),
        //        Microciclo3: $('#Microciclo3').val(),
        //        Microciclo4: $('#Microciclo4').val(),
        //        Plan1: $('#Plan1_' + i + '').val(),
        //        Plan2: $('#Plan2_' + i + '').val(),
        //        Plan3: $('#Plan3_' + i + '').val(),
        //        Plan4: $('#Plan4_' + i + '').val(),
        //        Real1: $('#Real1_' + i + '').val(),
        //        Real2: $('#Real2_' + i + '').val(),
        //        Real3: $('#Real3_' + i + '').val(),
        //        Real4: $('#Real4_' + i + '').val(),
        //        Dif1: $('#Dif1_' + i + '').val(),
        //        Dif2: $('#Dif2_' + i + '').val(),
        //        Dif3: $('#Dif3_' + i + '').val(),
        //        Dif4: $('#Dif4_' + i + '').val(),
        //        Porcentaje1: $('#Porcentaje1_' + i + '').val(),
        //        Porcentaje2: $('#Porcentaje2_' + i + '').val(),
        //        Porcentaje3: $('#Porcentaje3_' + i + '').val(),
        //        Porcentaje4: $('#Porcentaje4_' + i + '').val(),
        //        resultadoPLaneado: $('#Plateado_' + i + '').val(),
        //        resultadoRealizado: $('#Realizado_' + i + '').val(),
        //                    db.SaveChanges();

        //                }



        //                Retorno.Error = false;
        //                Retorno.mensaje = "Actualizado";

        //            }
        //            catch (Exception ex)
        //            {
        //                Retorno.Error = true;
        //                Retorno.mensaje = "Error al Actualizar";
        //            }


        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        String Error = ex.Message;
        //        //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
        //        Retorno.Error = true;
        //        Retorno.mensaje = "Error al agregar deportistas";
        //    }
        //    return Json(Retorno);
        //}


    
    }
}