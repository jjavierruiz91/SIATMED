using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class EntrenadoresController : Controller
    {
        // GET: Entrenadores
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaEntrenadores()
        {
            return View();
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }

        public struct ObjEntrenadores
        {
            public Entrenadores EntrenadoresDeport { get; set; }
            public EstudiosEntrenadores EstudiosEntrenadoresDeport { get; set; }
         


        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }

        //[HttpGet]
        //public JsonResult BuscarDeportista(long Identificacion)
        //{
        //    var DatosdEportista = new Deportistas();
        //    using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
        //    {
        //        DatosdEportista = db.Deportistas.FirstOrDefault(w => w.NumIdentificacion == Identificacion);
        //    }
        //    return Json(DatosdEportista, JsonRequestBehavior.AllowGet);
        //}
        //[HttpGet]
        //public JsonResult GetDeportistaPorSexo()
        //{
        //    List<Deportistas> DatosdEportista = new List<Deportistas>();
        //    using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
        //    {
        //        DatosdEportista = db.Deportistas.ToList();
        //    }
        //    return Json(DatosdEportista, JsonRequestBehavior.AllowGet);
        //}

        [HttpGet]
        public JsonResult GetListEntrenadores()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var Entrenadoresist = db.Entrenadores.ToList().OrderByDescending(o => o.IdEntrenadores);
               
                foreach (var item in Entrenadoresist)
                {
                    item.EstudiosEntrenadores = db.EstudiosEntrenadores.Where(w => w.IdEntrenadores == item.IdEntrenadores).ToList();



                }
                ret.objeto = new { DepoListResul = Entrenadoresist };


            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetEntrenadoresById(int IdEntrenadoresDepor)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var EntrenadoresUpdate = db.Entrenadores.FirstOrDefault(w => w.IdEntrenadores == IdEntrenadoresDepor);
                if (EntrenadoresUpdate != null)
                {
                    EntrenadoresUpdate.EstudiosEntrenadores = db.EstudiosEntrenadores.Where(w => w.IdEntrenadores == EntrenadoresUpdate.IdEntrenadores).ToList();
                }


                ret.objeto = EntrenadoresUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjEntrenadores a)
        {
            Respuesta Retorno = new Respuesta();

            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    //a.Depor = db.Deportistas.Where(w => w.CodRol == a.CodRol).FirstOrDefault();
                    a.EntrenadoresDeport.FechaCreacion = DateTime.Now;
                    a.EntrenadoresDeport.UsuarioCreacion = Utilidades.ActiveUser.NomUsuario;
                    a.EntrenadoresDeport.Imagen = SaveImagenFile(a.EntrenadoresDeport.Imagen, a.EntrenadoresDeport.NumeroIdentificacionEntrenador.ToString() + ".jpg");
                    db.Entrenadores.Add(a.EntrenadoresDeport);
                    db.SaveChanges();
                    var Id = a.EntrenadoresDeport.IdEntrenadores;

                    //ADD ID TO TABLE DATAFAMILIA
                    a.EstudiosEntrenadoresDeport.IdEntrenadores = Id;
                    a.EstudiosEntrenadoresDeport.Entrenadores = db.Entrenadores.FirstOrDefault(w => w.IdEntrenadores == Id);

                    //add id to tabla ocupation

                    db.EstudiosEntrenadores.Add(a.EstudiosEntrenadoresDeport);
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
                Retorno.mensaje = "Error al agregar deportistas";
            }
            return Json(Retorno, JsonRequestBehavior.AllowGet);
        }

        

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Actualizar(ObjEntrenadores a)
        {
            Respuesta Retorno = new Respuesta();
            //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {
                    a.EntrenadoresDeport.Imagen = SaveImagenFile(a.EntrenadoresDeport.Imagen, a.EntrenadoresDeport.NumeroIdentificacionEntrenador.ToString() + ".jpg");
                    try
                    {
                        var EntrenadorExiste = db.Entrenadores.FirstOrDefault(w => w.IdEntrenadores == a.EntrenadoresDeport.IdEntrenadores);
                        if (EntrenadorExiste != null)
                        {
                            EntrenadorExiste.TipoIdentificacionEntrenador = a.EntrenadoresDeport.TipoIdentificacionEntrenador;
                            EntrenadorExiste.NumeroIdentificacionEntrenador = a.EntrenadoresDeport.NumeroIdentificacionEntrenador;
                            EntrenadorExiste.EstadoEntrenador = a.EntrenadoresDeport.EstadoEntrenador;
                            EntrenadorExiste.PrimerNombreEntrenador = a.EntrenadoresDeport.PrimerNombreEntrenador;
                            EntrenadorExiste.SegundoNombreEntrenador = a.EntrenadoresDeport.SegundoNombreEntrenador;
                            EntrenadorExiste.PrimerApellidoEntrenador = a.EntrenadoresDeport.PrimerApellidoEntrenador;
                            EntrenadorExiste.Segundoapellidoentrenador = a.EntrenadoresDeport.Segundoapellidoentrenador;
                            EntrenadorExiste.GeneroEntrenador = a.EntrenadoresDeport.GeneroEntrenador;
                            EntrenadorExiste.GrupoSanguineoEntrenador = a.EntrenadoresDeport.GrupoSanguineoEntrenador;
                            EntrenadorExiste.EpsEntrenador = a.EntrenadoresDeport.EpsEntrenador;
                            EntrenadorExiste.CorreoEntrenador = a.EntrenadoresDeport.CorreoEntrenador;
                            EntrenadorExiste.FechaNacimientoEntrenador = a.EntrenadoresDeport.FechaNacimientoEntrenador;
                            EntrenadorExiste.DeporteEntrenador = a.EntrenadoresDeport.DeporteEntrenador;
                            EntrenadorExiste.TelefonoEntrenador = a.EntrenadoresDeport.TelefonoEntrenador;
                            EntrenadorExiste.DireccionEntrenador = a.EntrenadoresDeport.CorreoEntrenador;
                            EntrenadorExiste.DireccionEntrenador = a.EntrenadoresDeport.DireccionEntrenador;
                            EntrenadorExiste.BarrioEntrenador = a.EntrenadoresDeport.BarrioEntrenador;
                            EntrenadorExiste.EstadoCivilEntrenador = a.EntrenadoresDeport.EstadoCivilEntrenador;
                            EntrenadorExiste.EdadEntrenador = a.EntrenadoresDeport.EdadEntrenador;
                            EntrenadorExiste.NivelEstudioEntrenador = a.EntrenadoresDeport.NivelEstudioEntrenador;
                            
                            EntrenadorExiste.Imagen = a.EntrenadoresDeport.Imagen;

        db.SaveChanges();

                        }


                        var FamiliaEntrenadorExiste = db.EstudiosEntrenadores.FirstOrDefault(w => w.IdEntrenadores == a.EntrenadoresDeport.IdEntrenadores);
                        if (FamiliaEntrenadorExiste != null)
                        {
                            FamiliaEntrenadorExiste.EstudiosEntrenador = a.EstudiosEntrenadoresDeport.EstudiosEntrenador;
                            FamiliaEntrenadorExiste.CursosEntrenador = a.EstudiosEntrenadoresDeport.CursosEntrenador;
                            FamiliaEntrenadorExiste.RecordsEntrenador = a.EstudiosEntrenadoresDeport.RecordsEntrenador;
                            FamiliaEntrenadorExiste.InvestigacionesEntrenador = a.EstudiosEntrenadoresDeport.InvestigacionesEntrenador;
                            FamiliaEntrenadorExiste.LibrosEntrenadores = a.EstudiosEntrenadoresDeport.LibrosEntrenadores;
                            FamiliaEntrenadorExiste.ExperienciasEntrenador = a.EstudiosEntrenadoresDeport.ExperienciasEntrenador;
                            FamiliaEntrenadorExiste.AñosExperienciaEntrenador = a.EstudiosEntrenadoresDeport.AñosExperienciaEntrenador;
                            FamiliaEntrenadorExiste.ClubDeportivoEntrenador = a.EstudiosEntrenadoresDeport.ClubDeportivoEntrenador;
                        
                            FamiliaEntrenadorExiste.Entrenadores = EntrenadorExiste;

                               
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
                //ModelState.AddModelError("", "Error al agregar entrenadores" + ex.Message);
                Retorno.Error = true;
                Retorno.mensaje = "Error al agregar entrenador";
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
        public static string SaveImagenFile(string Imagen, string NameFile)
        {
            string Respuesta = "";
            try
            {
                if (!string.IsNullOrEmpty(Imagen))
                {
                    Imagen = Imagen.Substring(23);
                }
                var filePath = "";
                filePath = System.Web.Hosting.HostingEnvironment.MapPath("~/images/Entrenadores");

                byte[] fileBytes = Convert.FromBase64String(Imagen);
                string imgPath = Path.Combine(filePath, NameFile);

                if (System.IO.File.Exists(imgPath))
                    System.IO.File.Delete(imgPath);

                System.IO.File.WriteAllBytes(imgPath, fileBytes);
                Respuesta = imgPath;
            }
            catch (Exception ex)
            {
                return Respuesta = "";
            }

            return Respuesta;
        }
    }
}