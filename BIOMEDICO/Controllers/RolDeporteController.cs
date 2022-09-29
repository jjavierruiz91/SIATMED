using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class RolDeporteController : Controller
    {
        // GET: RolDeporte
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaRolDeporte()
        {
            return View();
        }
        public struct ObjIdRolDeporte
        {
            public RolDeporte RolDeporteDeport { get; set; }



        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }



        [HttpGet]
        public JsonResult GetListRolDeporte()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var DeporteDeport = db.RolDeporte.ToList().OrderByDescending(o => o.IdRolDeporte);
                foreach (var item in DeporteDeport)
                {

                }

                ret.objeto = DeporteDeport; 

            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetRolDeporteById(int IdRolDeporte)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var DeporteUpdate = db.RolDeporte.FirstOrDefault(w => w.IdRolDeporte == IdRolDeporte);
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
        public JsonResult Agregar(ObjIdRolDeporte a)
        {
            Respuesta Retorno = new Respuesta();

            

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    db.RolDeporte.Add(a.RolDeporteDeport);

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
        public JsonResult Actualizar(ObjIdRolDeporte a)
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

                        var DeporteExiste = db.RolDeporte.FirstOrDefault(w => w.IdRolDeporte == a.RolDeporteDeport.IdRolDeporte);
                        if (DeporteExiste != null)
                        {


                            DeporteExiste.NombreDeporte = a.RolDeporteDeport.NombreDeporte;
                            DeporteExiste.NomRol = a.RolDeporteDeport.NomRol;


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


      
        public static List<Deporte> ListDeporte()
        {
            List<Deporte> listaDeportes = new List<Deporte>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                listaDeportes = db.Deporte.ToList().OrderByDescending(o => o.IdDeporte).ToList();

            }

            return listaDeportes;
        }

        public static List<Rol> ListRoles()
        {
            List<Rol> listaRol = new List<Rol>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                listaRol = db.Rol.ToList().OrderByDescending(o => o.CodRol).ToList();

            }

            return listaRol;
        }


        public static List<RolDeporte> ListRolDeporte()
        {
            List<RolDeporte> ListRolDeporte = new List<RolDeporte>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                var userOn = Utilidades.ActiveUser;
                userOn.Rol = db.Rol.FirstOrDefault(w => w.CodRol == userOn.CodRol);
                ListRolDeporte = db.RolDeporte.Where(w=>w.NomRol== userOn.Rol.NomRol).ToList().OrderByDescending(o => o.IdRolDeporte).ToList();

            }

            return ListRolDeporte;
        }
    }
}
