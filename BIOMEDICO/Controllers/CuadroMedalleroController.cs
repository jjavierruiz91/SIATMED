using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class CuadroMedalleroController : Controller
    {
        // GET: CuadroMedallero
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PanelMedallero()
        {
            return View();
        }
        public ActionResult ListaCuadroMedallero()
        {
            return View();
        }
        public struct ObjCuadroMedallero
        {
            public CuadroMedallero CuadroMedalleroDeport { get; set; }



        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }



        [HttpGet]
        public JsonResult GetListCuadroMedallero()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var CuadroMedalleroDeport = db.CuadroMedallero.ToList().OrderByDescending(o => o.IdCuadroMedallero);
                foreach (var item in CuadroMedalleroDeport)
                {

                }

                ret.objeto = CuadroMedalleroDeport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
                //new JsonSerializerSettings
                //{
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetCuadroMedalleroDeportById(int IdCuadroMedalleroDepor)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var CuadroMedalleroUpdate = db.CuadroMedallero.FirstOrDefault(w => w.IdCuadroMedallero == IdCuadroMedalleroDepor);
                if (CuadroMedalleroUpdate != null)
                {
                }


                ret.objeto = CuadroMedalleroUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }




        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjCuadroMedallero a)
        {
            Respuesta Retorno = new Respuesta();

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    a.CuadroMedalleroDeport.FechaCreacion = DateTime.Now;
                    a.CuadroMedalleroDeport.UsuarioCreacion = Utilidades.ActiveUser.NomUsuario;
                    db.CuadroMedallero.Add(a.CuadroMedalleroDeport);

                    db.SaveChanges();



                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar";
            }
            return Json(Retorno, JsonRequestBehavior.AllowGet);
        }
        

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Actualizar(ObjCuadroMedallero a)
        {
            Respuesta Retorno = new Respuesta();
           

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    try
                    {

                        var DeporteExiste = db.CuadroMedallero.FirstOrDefault(w => w.IdCuadroMedallero == a.CuadroMedalleroDeport.IdCuadroMedallero);
                        if (DeporteExiste != null)
                        {


                            DeporteExiste.DeporteMedallero = a.CuadroMedalleroDeport.DeporteMedallero;
                            DeporteExiste.MedallaOro = a.CuadroMedalleroDeport.MedallaOro;
                            DeporteExiste.MedallaPlata = a.CuadroMedalleroDeport.MedallaPlata;
                            DeporteExiste.MedallaBronce = a.CuadroMedalleroDeport.MedallaBronce;
                            DeporteExiste.CategoriaMedallero = a.CuadroMedalleroDeport.CategoriaMedallero;
                            DeporteExiste.EventoMedallero = a.CuadroMedalleroDeport.EventoMedallero;
                            DeporteExiste.FechaMedallero = a.CuadroMedalleroDeport.FechaMedallero;
                            DeporteExiste.PruebaMedallero = a.CuadroMedalleroDeport.PruebaMedallero;
                            DeporteExiste.Marca = a.CuadroMedalleroDeport.Marca;


                            db.SaveChanges();



                        }

                        Retorno.Error = false;
                        Retorno.mensaje = "Actualizado";


                    }
                    catch (Exception ex)
                    {
                        Retorno.Error = true;
                        Retorno.mensaje = "Error al Actualizar";
                    }




                }
            }
            catch (Exception ex)
            {
                String Error = ex.Message;
                //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar deporte";
            }
            return Json(Retorno);
        }


    
      
    }
}
