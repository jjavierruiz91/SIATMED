using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class CronogramaActividadesController : Controller
    {
        // GET: CronogramaActividades
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaCronogramaActividades()
        {
            return View();
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }

        public struct ObjCronogramaActividades
        {
            public CronogramaActividades CronogramaActividadesDeport { get; set; }




        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }



        [HttpGet]
        public JsonResult GetListCronogramaActividades()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var CronogramaActividadesExiste = db.CronogramaActividades.ToList().OrderByDescending(o => o.IdCronogramaActividadesSemanales);

                foreach (var item in CronogramaActividadesExiste)
                {



                }
                ret.objeto = new { DepoListResul = CronogramaActividadesExiste };


            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetCronogramaActividadesExisteById(int IdCronogramaActividadesSemanales)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var CronogramaActividadesUpdate = db.CronogramaActividades.FirstOrDefault(w => w.IdCronogramaActividadesSemanales == IdCronogramaActividadesSemanales);


                ret.objeto = CronogramaActividadesUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjCronogramaActividades a)
        {
            Respuesta Retorno = new Respuesta();

            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    //a.Depor = db.Deportistas.Where(w => w.CodRol == a.CodRol).FirstOrDefault();
                    a.CronogramaActividadesDeport.FechaRegistro = DateTime.Now;
                    a.CronogramaActividadesDeport.Usuarioregistro = Utilidades.ActiveUser.NomUsuario;
                    //a.EntrenadoresDeport.Imagen = SaveImagenFile(a.EntrenadoresDeport.Imagen, a.EntrenadoresDeport.NumeroIdentificacionEntrenador.ToString() + ".jpg");
                    db.CronogramaActividades.Add(a.CronogramaActividadesDeport);
                    db.SaveChanges();
                    var Id = a.CronogramaActividadesDeport.IdCronogramaActividadesSemanales;

                    

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
        //public JsonResult Actualizar(ObjDeportista a)
        //{
        //    Respuesta Retorno = new Respuesta();
        //    //JsonConvert.DeserializeObject<List<ObjDeportista>>(a);
        //    //if (!ModelState.IsValid)
        //    //    Retorno.mensaje="Datos invalidos";

        //    try
        //    {

        //        using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

        //        {
        //            a.Deport.Imagen = SaveImagenFile(a.Deport.Imagen, a.Deport.NumIdentificacion.ToString() + ".jpg");
        //            try
        //            {
        //                var Deportistaexiste = db.Deportistas.FirstOrDefault(w => w.IdDeportista == a.Deport.IdDeportista);
        //                if (Deportistaexiste != null)
        //                {
        //                    Deportistaexiste.TipoIdentificacion = a.Deport.TipoIdentificacion;
        //                    Deportistaexiste.NumIdentificacion = a.Deport.NumIdentificacion;
        //                    Deportistaexiste.PrimerNombre = a.Deport.PrimerNombre;
        //                    Deportistaexiste.SegundoNombre = a.Deport.SegundoNombre;
        //                    Deportistaexiste.PrimerApellido = a.Deport.PrimerApellido;
        //                    Deportistaexiste.SegundoApellido = a.Deport.SegundoApellido;
        //                    Deportistaexiste.Imagen = a.Deport.Imagen;
        //                    Deportistaexiste.Edad = a.Deport.Edad;
        //                    Deportistaexiste.Genero = a.Deport.Genero;
        //                    Deportistaexiste.GrupoSanguineo = a.Deport.GrupoSanguineo;
        //                    //Deportistaexiste.Eps = a.Deport.Eps;
        //                    //Deportistaexiste.CorreoDeportista = a.Deport.CorreoDeportista;
        //                    //Deportistaexiste.Deporte = a.Deport.Deporte;
        //                    //Deportistaexiste.FechaNacimiento = a.Deport.FechaNacimiento;
        //                    //Deportistaexiste.DepartamentoNacimiento = a.Deport.DepartamentoNacimiento;
        //                    //Deportistaexiste.MunicipioNacimiento = a.Deport.MunicipioNacimiento;
        //                    //Deportistaexiste.GrupoEtareo = a.Deport.GrupoEtareo;
        //                    //Deportistaexiste.CondicionPoblacion = a.Deport.CondicionPoblacion;
        //                    //Deportistaexiste.Telefono = a.Deport.Telefono;
        //                    //Deportistaexiste.NivelEstudio = a.Deport.NivelEstudio;
        //                    //Deportistaexiste.PaisResidencia = a.Deport.PaisResidencia;
        //                    //Deportistaexiste.DepartamentoResidencia = a.Deport.DepartamentoResidencia;
        //                    //Deportistaexiste.MunicipioResidencia = a.Deport.MunicipioResidencia;
        //                    //Deportistaexiste.BarrioResidencia = a.Deport.BarrioResidencia;
        //                    //Deportistaexiste.TipoEtnia = a.Deport.TipoEtnia;
        //                    ////Deportistaexiste.ZonaInfluencia = a.Deport.ZonaInfluencia;
        //                    ////Deportistaexiste.EntidadPrestadora = a.Deport.EntidadPrestadora;
        //                    //Deportistaexiste.NombreMonitor = a.Deport.NombreMonitor;
        //                    //Deportistaexiste.NombreGrupo = a.Deport.NombreGrupo;
        //                    //Deportistaexiste.EstadoCivil = a.Deport.EstadoCivil;
        //                    //Deportistaexiste.IdDeportista = a.Deport.IdDeportista;

        //                    db.SaveChanges();

        //                }


        //                var FamilianDepoexiste = db.DatosFamiliares.FirstOrDefault(w => w.IdDeportista == a.Deport.IdDeportista);
        //                if (FamilianDepoexiste != null)
        //                {
        //                    FamilianDepoexiste.NomMadre = a.DataFamiliar.NomMadre;
        //                    FamilianDepoexiste.ApeMadre = a.DataFamiliar.ApeMadre;
        //                    //FamilianDepoexiste.TipoDocumento = a.DataFamiliar.TipoDocumento;
        //                    //FamilianDepoexiste.NumDocumento = a.DataFamiliar.NumDocumento;
        //                    FamilianDepoexiste.Direccion = a.DataFamiliar.Direccion;
        //                    FamilianDepoexiste.Barrio = a.DataFamiliar.Barrio;
        //                    FamilianDepoexiste.Celular = a.DataFamiliar.Celular;
        //                    FamilianDepoexiste.Ocupacion = a.DataFamiliar.Ocupacion;
        //                    FamilianDepoexiste.NomPadre = a.DataFamiliar.NomPadre;
        //                    //FamilianDepoexiste.TipoPadre = a.DataFamiliar.TipoPadre;
        //                    //FamilianDepoexiste.NumPadre = a.DataFamiliar.NumPadre;
        //                    FamilianDepoexiste.DireccionPadre = a.DataFamiliar.DireccionPadre;
        //                    FamilianDepoexiste.BarrioPadre = a.DataFamiliar.BarrioPadre;
        //                    FamilianDepoexiste.CelularPadre = a.DataFamiliar.CelularPadre;
        //                    FamilianDepoexiste.OcupacionPadre = a.DataFamiliar.OcupacionPadre;
        //                    FamilianDepoexiste.OcupacionPadre = a.DataFamiliar.OcupacionPadre;
        //                    FamilianDepoexiste.Deportistas = Deportistaexiste;
        //                    db.SaveChanges();

        //                }

        //                var OcupacionDepoexiste = db.Ocupacion.FirstOrDefault(w => w.IdDeportista == a.Deport.IdDeportista);
        //                if (OcupacionDepoexiste != null)
        //                {
        //                    //OcupacionDepoexiste.Ocupacion1 = a.Ocupation.Ocupacion1;
        //                    OcupacionDepoexiste.NivelEducativo = a.Ocupation.NivelEducativo;
        //                    //OcupacionDepoexiste.Institucion = a.Ocupation.Institucion;
        //                    //OcupacionDepoexiste.TelefonoInstitucion = a.Ocupation.TelefonoInstitucion;
        //                    //OcupacionDepoexiste.DirectorGrado = a.Ocupation.DirectorGrado;
        //                    OcupacionDepoexiste.Peso = a.Ocupation.Peso;
        //                    OcupacionDepoexiste.Estatura = a.Ocupation.Estatura;
        //                    OcupacionDepoexiste.TallaCamisa = a.Ocupation.TallaCamisa;
        //                    OcupacionDepoexiste.TallaPantalon = a.Ocupation.TallaPantalon;
        //                    OcupacionDepoexiste.TallaCalzado = a.Ocupation.TallaCalzado;
        //                    OcupacionDepoexiste.TallaSudadera = a.Ocupation.TallaSudadera;
        //                    OcupacionDepoexiste.NumeroHijos = a.Ocupation.NumeroHijos;
        //                    OcupacionDepoexiste.Deportistas = Deportistaexiste;
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