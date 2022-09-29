using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class CategoriaController : Controller
    {
        // GET: Categoria
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaCategoria()
        {
            return View();
        }
        public struct ObjCategoria
        {
            public Categoria CategoriaDeport { get; set; }



        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }


        [HttpGet]
        public JsonResult GetListCategoria()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var PlanCategoriaExiste = db.Categoria.ToList().OrderByDescending(o => o.IdCategoria);

                foreach (var item in PlanCategoriaExiste)
                {



                }
                ret.objeto = new { DepoListResul = PlanCategoriaExiste };


            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]
        public JsonResult GetCategoriaById(int IdCategoriaDepor)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var CategoriaUpdate = db.Categoria.FirstOrDefault(w => w.IdCategoria == IdCategoriaDepor);
                if (CategoriaUpdate != null)
                {
                }


                ret.objeto = CategoriaUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }




        [HttpPost]
        public JsonResult Agregar(ObjCategoria a)
        {
            Respuesta Retorno = new Respuesta();

      

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    db.Categoria.Add(a.CategoriaDeport);

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
        public JsonResult Actualizar(ObjCategoria a)
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

                        var DeporteExiste = db.Categoria.FirstOrDefault(w => w.IdCategoria == a.CategoriaDeport.IdCategoria);
                        if (DeporteExiste != null)
                        {


                            DeporteExiste.NomCategoria = a.CategoriaDeport.NomCategoria;
                            DeporteExiste.Deporte = a.CategoriaDeport.Deporte;
                            DeporteExiste.DescripcionCategoria = a.CategoriaDeport.DescripcionCategoria;


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
                Retorno.mensaje = "Error al agregar ficha";
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
        public static List<Categoria> ListCategoria()
        {
            List<Categoria> ListCategoria = new List<Categoria>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                ListCategoria = db.Categoria.ToList().OrderByDescending(o => o.IdCategoria).ToList();

            }

            return ListCategoria;
        }
    }
}
