using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class EntrenamientoMensualController : Controller
    {
        // GET: EntrenamientoMensual
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaEntrenamientoMensual()
        {
            return View();
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }

        public struct ObjPlanEntrenamiento
        {
            public PlanEntrenamientoMensual PlanEntrenamientoDeport { get; set; }
            



        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }

        

        [HttpGet]
        public JsonResult GetListAnalisMacroMensual()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var AnalisMacroExiste = db.PlanEntrenamientoMensual.ToList().OrderByDescending(o => o.IdPlanEntrenamientoMensual);

                ret.objeto = new { DepoListResul = AnalisMacroExiste };


            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetPlanEntrenamientoById(int IdPlanEntrenaminetoDepor)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var EntrenamientoUpdate = db.PlanEntrenamientoMensual.FirstOrDefault(w => w.IdPlanEntrenamientoMensual == IdPlanEntrenaminetoDepor);


                ret.objeto = EntrenamientoUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjPlanEntrenamiento a)
        {
            Respuesta Retorno = new Respuesta();

            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    //a.Depor = db.Deportistas.Where(w => w.CodRol == a.CodRol).FirstOrDefault();
                    a.PlanEntrenamientoDeport.FechaRegistra = DateTime.Now;
                    a.PlanEntrenamientoDeport.UsuarioRegistra = Utilidades.ActiveUser.NomUsuario;
                    //a.EntrenadoresDeport.Imagen = SaveImagenFile(a.EntrenadoresDeport.Imagen, a.EntrenadoresDeport.NumeroIdentificacionEntrenador.ToString() + ".jpg");
                    db.PlanEntrenamientoMensual.Add(a.PlanEntrenamientoDeport);
                    db.SaveChanges();
                    var Id = a.PlanEntrenamientoDeport.IdPlanEntrenamientoMensual;

                    ////ADD ID TO TABLE DATAFAMILIA
                    //a.EstudiosEntrenadoresDeport.IdEntrenadores = Id;
                    //a.EstudiosEntrenadoresDeport.Entrenadores = db.Entrenadores.FirstOrDefault(w => w.IdEntrenadores == Id);

                    ////add id to tabla ocupation

                    //db.EstudiosEntrenadores.Add(a.EstudiosEntrenadoresDeport);
                    //db.SaveChanges();

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


        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Actualizar(ObjPlanEntrenamiento a)
        {
            Respuesta Retorno = new Respuesta();
            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    //a.Deport.Imagen = SaveImagenFile(a.Deport.Imagen, a.Deport.NumIdentificacion.ToString() + ".jpg");
                    try
                    {
                        var PlanEntrenamientoExiste = db.PlanEntrenamientoMensual.FirstOrDefault(w => w.IdPlanEntrenamientoMensual == a.PlanEntrenamientoDeport.IdPlanEntrenamientoMensual);
                        if (PlanEntrenamientoExiste != null)
                        {
                            PlanEntrenamientoExiste.NumIdentificacionDeportista = a.PlanEntrenamientoDeport.NumIdentificacionDeportista;
                            PlanEntrenamientoExiste.NombreDeportista = a.PlanEntrenamientoDeport.NombreDeportista;
                            PlanEntrenamientoExiste.Entrenador = a.PlanEntrenamientoDeport.Entrenador;
                            PlanEntrenamientoExiste.Deporte = a.PlanEntrenamientoDeport.Deporte;
                            PlanEntrenamientoExiste.Agrupacion = a.PlanEntrenamientoDeport.Agrupacion;
                            PlanEntrenamientoExiste.Categoria = a.PlanEntrenamientoDeport.Categoria;
                            PlanEntrenamientoExiste.Modalidad = a.PlanEntrenamientoDeport.Modalidad;
                            PlanEntrenamientoExiste.Mes = a.PlanEntrenamientoDeport.Mes;
                            PlanEntrenamientoExiste.Año = a.PlanEntrenamientoDeport.Año;
                            PlanEntrenamientoExiste.Metodologo = a.PlanEntrenamientoDeport.Metodologo;
                            PlanEntrenamientoExiste.FechaEntregaActa = a.PlanEntrenamientoDeport.FechaEntregaActa;
                            PlanEntrenamientoExiste.Preparacionfisica = a.PlanEntrenamientoDeport.Preparacionfisica;
                            PlanEntrenamientoExiste.PreparacionTecnica = a.PlanEntrenamientoDeport.PreparacionTecnica;
                            PlanEntrenamientoExiste.PreparacionTactica = a.PlanEntrenamientoDeport.PreparacionTactica;
                            PlanEntrenamientoExiste.ObjetivosParciales = a.PlanEntrenamientoDeport.ObjetivosParciales;
                            PlanEntrenamientoExiste.FirmaEntrenador = a.PlanEntrenamientoDeport.FirmaEntrenador;
                            PlanEntrenamientoExiste.FirmaMetodologo = a.PlanEntrenamientoDeport.FirmaMetodologo;
                            PlanEntrenamientoExiste.Metodologo = a.PlanEntrenamientoDeport.Metodologo;
                            PlanEntrenamientoExiste.Metodologo = a.PlanEntrenamientoDeport.Metodologo;
                            PlanEntrenamientoExiste.Metodologo = a.PlanEntrenamientoDeport.Metodologo;

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
                //ModelState.AddModelError("", "Error al agregar plan entrenamiento" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar plan entrenamiento";
            }
            return Json(Retorno);
        }

        //[HttpGet]
        //public JsonResult Eliminar(int idDep)
        //{
        //    Respuesta respuesta = new Respuesta();
        //    using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

        //    {
        //        try
        //        {
        //            var Depoexiste = db.Deportistas.FirstOrDefault(w => w.IdDeportista == idDep);
        //            if (Depoexiste != null)
        //            {
        //                var OcupacionDepoexiste = db.Ocupacion.FirstOrDefault(w => w.IdDeportista == idDep);
        //                if (OcupacionDepoexiste != null)
        //                {
        //                    db.Ocupacion.Remove(OcupacionDepoexiste);
        //                }
        //                var FamilianDepoexiste = db.DatosFamiliares.FirstOrDefault(w => w.IdDeportista == idDep);
        //                if (FamilianDepoexiste != null)
        //                {
        //                    db.DatosFamiliares.Remove(FamilianDepoexiste);
        //                }

        //                db.Deportistas.Remove(Depoexiste);
        //                db.SaveChanges();
        //                respuesta.Error = false;
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            respuesta.mensaje = ex.Message;
        //            respuesta.Error = true;
        //        }


        //    }

        //    return Json(respuesta, JsonRequestBehavior.AllowGet);
        //}
        //public static string SaveImagenFile(string Imagen, string NameFile)
        //{
        //    string Respuesta = "";
        //    try
        //    {
        //        if (!string.IsNullOrEmpty(Imagen))
        //        {
        //            Imagen = Imagen.Substring(23);
        //        }
        //        var filePath = "";
        //        filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/images/Entrenadores");

        //        byte[] fileBytes = Convert.FromBase64String(Imagen);
        //        string imgPath = Path.Combine(filePath, NameFile);

        //        if (System.IO.File.Exists(imgPath))
        //            System.IO.File.Delete(imgPath);

        //        System.IO.File.WriteAllBytes(imgPath, fileBytes);
        //        Respuesta = imgPath;
        //    }
        //    catch (Exception ex)
        //    {
        //        return Respuesta = "";
        //    }

        //    return Respuesta;
        //}
    }
}