using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class DeporteController : Controller
    {
        // GET: Deporte
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaDeporte()
        {
            return View();
        }
        public struct ObjDeporte
        {
            public Deporte DeporteDeport { get; set; }



        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }



        [HttpGet]
        public JsonResult GetListDeporte()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var DeporteDeport = db.Deporte.ToList().OrderByDescending(o => o.IdDeporte);
                foreach (var item in DeporteDeport)
                {

                }

                ret.objeto = DeporteDeport; //ocupacion = DAtosocupacion };//, datosFamiliar=DatosFamiliar };

                //result = JsonConvert.SerializeObject(ret, Formatting.Indented,
                //new JsonSerializerSettings
                //{
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetDeporteById(int IdDeporteDepor)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var DeporteUpdate = db.Deporte.FirstOrDefault(w => w.IdDeporte == IdDeporteDepor);
                if (DeporteUpdate != null)
                {
                }


                ret.objeto = DeporteUpdate;



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
        public JsonResult Agregar(ObjDeporte a)
        {
            Respuesta Retorno = new Respuesta();

            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            //          public struct 
            //{
            //    public Nutricion NutricionDeport { get; set; }
            //    public AnamnesisNutricion AnamnesisNutriDeport { get; set; }

            //    public SeguimientoNutricion SeguimientoNutriDeport { get; set; }

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    db.Deporte.Add(a.DeporteDeport);

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
        //var IdCita = a.ControlNutricionDeport.IdMedicina;
        //db.SaveChanges();
        //        var Id = a.ControlNutricionDeport.IdMedicina;

        //        //ADD ID TO TABLE DATAFAMILIA


        //        var CitasDeportistaExiste = db.CitasMedicas.FirstOrDefault(w => w.IdCitaMedica == IdCita);
        //        if (CitasDeportistaExiste != null)
        //        {

        //            CitasDeportistaExiste.EstadoCitas = "FINALIZADA";

        //            db.SaveChanges();
        //        }

        //        db.SaveChanges();

        //        if (Id > 0)
        //        {
        //            Retorno.Error = false;
        //            Retorno.mensaje = "Guardado";

        //        }
        //        else
        //        {
        //            Retorno.Error = true;
        //            Retorno.mensaje = "No se pudo guardar";
        //        }
        //    }
        //    }
        //    catch (Exception ex)
        //    {
        //        String Error = ex.Message;
        //        //ModelState.AddModelError("", "Error al agregar deportistas" + ex.Message);
        //        Retorno.Error = true;
        //        Retorno.mensaje = "Error al agregar";
        //    }
        //    return Json(Retorno, JsonRequestBehavior.AllowGet);
        //}

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Actualizar(ObjDeporte a)
        {
            Respuesta Retorno = new Respuesta();
            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    try
                    {

                        var DeporteExiste = db.Deporte.FirstOrDefault(w => w.IdDeporte == a.DeporteDeport.IdDeporte);
                        if (DeporteExiste != null)
                        {


                            DeporteExiste.CodDeporte = a.DeporteDeport.CodDeporte;
                            DeporteExiste.NombreDeporte = a.DeporteDeport.NombreDeporte;


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
                //ModelState.AddModelError("", "Error al agregar deporte" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar deporte";
            }
            return Json(Retorno);
        }


        //[HttpGet]
        //    public JsonResult Eliminar(int idControlNutri)
        //    {
        //        Respuesta respuesta = new Respuesta();
        //        using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

        //        {
        //            try
        //            {
        //                var ControlNutriDepoExiste = db.ControlNutricion.FirstOrDefault(w => w.IdControlNutri == idControlNutri);
        //                if (ControlNutriDepoExiste != null)
        //                {
        //                    db.ControlNutricion.Remove(ControlNutriDepoExiste);

        //                    db.SaveChanges();
        //                    respuesta.Error = false;
        //                }
        //            }
        //            catch (Exception ex)
        //            {
        //                respuesta.mensaje = ex.Message;
        //                respuesta.Error = true;
        //            }


        //        }

        //        return Json(respuesta, JsonRequestBehavior.AllowGet);
        //    }

        ////public static string SaveImagenFile(string AnexosNutricion, string NameFile)
        ////{
        ////    string Respuesta = "";
        ////    try
        ////    {
        ////        if (!string.IsNullOrEmpty(AnexosNutricion))
        ////        {
        ////            AnexosNutricion = AnexosNutricion.Split(',')[1];
        ////        }
        ////        var filePath = "";
        ////        filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/images/Nutricion");

        ////        byte[] fileBytes = Convert.FromBase64String(AnexosNutricion);
        ////        string imgPath = Path.Combine(filePath, NameFile);

        ////        if (System.IO.File.Exists(imgPath))
        ////            System.IO.File.Delete(imgPath);

        ////        System.IO.File.WriteAllBytes(imgPath, fileBytes);
        ////        Respuesta = imgPath;
        ////    }
        ////    catch (Exception ex)
        ////    {
        ////        return Respuesta = "";
        ////    }

        ////    return Respuesta;
        ////}
        ///
        public static List<Deporte> ListDeporte()
        {
            List<Deporte> listaDeportes = new List<Deporte>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                listaDeportes = db.Deporte.ToList().OrderByDescending(o => o.IdDeporte).ToList();

            }

            return listaDeportes;
        }
    }
}
