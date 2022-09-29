using BIOMEDICO.Clases;
using BIOMEDICO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BIOMEDICO.Controllers
{
    public class MesocicloController : Controller
    {
        // GET: Mesociclo
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ListaMesociclo()
        {
            return View();
        }


        [HttpGet]
        public ActionResult Agregar()
        {

            return View();

        }

        public struct ObjMesociclo
        {
            public Mesociclo MesocicloDeport { get; set; }
            public List<MesocicloDatos> MesocicloDatosDeport { get; set; }




        }

        public struct Respuesta
        {

            public string mensaje { get; set; }
            public bool Error { get; set; }
            public Object objeto { get; set; }

        }



        [HttpGet]
        public JsonResult GetListMesociclo()
        {
            Respuesta ret = new Respuesta();
            string result = "";
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var MesocicloExiste = db.Mesociclo.ToList().OrderByDescending(o => o.IdMesociclo);

                foreach (var item in MesocicloExiste)
                {
                    item.MesocicloDatos = db.MesocicloDatos.Where(w => w.IdMesociclo == item.IdMesociclo).ToList();



                }
                ret.objeto = new { DepoListResul = MesocicloExiste };


            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetMesocicloById(int IdMesociclo)
        {
            Respuesta ret = new Respuesta();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

            {
                var MesocicloUpdate = db.Mesociclo.FirstOrDefault(w => w.IdMesociclo == IdMesociclo);
                if (MesocicloUpdate != null)
                {
                    MesocicloUpdate.MesocicloDatos = db.MesocicloDatos.Where(w => w.IdMesociclo == MesocicloUpdate.IdMesociclo).ToList();
                }


                ret.objeto = MesocicloUpdate;



            }

            return Json(ret, JsonRequestBehavior.AllowGet);
        }



        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Agregar(ObjMesociclo a)
        {
            Respuesta Retorno = new Respuesta();

            //if (!ModelState.IsValid)
            //    Retorno.mensaje="Datos invalidos";

            try
            {

                using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())

                {


                    //a.Depor = db.Deportistas.Where(w => w.CodRol == a.CodRol).FirstOrDefault();
                    a.MesocicloDeport.FechaRegistro = DateTime.Now;
                    a.MesocicloDeport.UsuarioRegistra = Utilidades.ActiveUser.NomUsuario;
                    //a.EntrenadoresDeport.Imagen = SaveImagenFile(a.EntrenadoresDeport.Imagen, a.EntrenadoresDeport.NumeroIdentificacionEntrenador.ToString() + ".jpg");
                    db.Mesociclo.Add(a.MesocicloDeport);
                    db.SaveChanges();
                    var Id = a.MesocicloDeport.IdMesociclo;

                    //ADD ID TO TABLE DATAFAMILIA
                    a.MesocicloDatosDeport.ForEach(w => w.IdMesociclo = Id);
                    a.MesocicloDatosDeport.ForEach(s => s.Mesociclo = db.Mesociclo.FirstOrDefault(w => w.IdMesociclo == Id));

                    ////add id to tabla ocupation

                    db.MesocicloDatos.AddRange(a.MesocicloDatosDeport);
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


        [HttpPost]
        //[ValidateAntiForgeryToken]
        public JsonResult Actualizar(ObjMesociclo a)
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
                        var MesocicloExiste = db.Mesociclo.FirstOrDefault(w => w.IdMesociclo == a.MesocicloDeport.IdMesociclo);
                        if (MesocicloExiste != null)
                        {
                            MesocicloExiste.Deporte = a.MesocicloDeport.Deporte;
                            MesocicloExiste.Deportista = a.MesocicloDeport.Deportista;
                            MesocicloExiste.Agrupacion = a.MesocicloDeport.Agrupacion;
                            MesocicloExiste.Categoria = a.MesocicloDeport.Categoria;
                            MesocicloExiste.Mesociclo1 = a.MesocicloDeport.Mesociclo1;
                            MesocicloExiste.TipoMesociclo = a.MesocicloDeport.TipoMesociclo;
                            MesocicloExiste.Microciclo = a.MesocicloDeport.Microciclo;
                            MesocicloExiste.ObjetivosFisicos = a.MesocicloDeport.ObjetivosFisicos;
                            MesocicloExiste.ObjetivosTacticos = a.MesocicloDeport.ObjetivosTacticos;


                            db.SaveChanges();

                        }
                        foreach (var item in a.MesocicloDatosDeport)
                        {
                            var MesocicloDatosExiste1 = db.MesocicloDatos.FirstOrDefault(w => w.IdMesociclo == a.MesocicloDeport.IdMesociclo);
                            if (MesocicloDatosExiste1 != null)
                            {
                                MesocicloDatosExiste1.NombreElemento = item.NombreElemento;
                
                           MesocicloDatosExiste1.Microciclo1= item.Microciclo1;
                           MesocicloDatosExiste1.Microciclo2= item.Microciclo2;
                           MesocicloDatosExiste1.Microciclo3= item.Microciclo3;
                           MesocicloDatosExiste1.Microciclo4= item.Microciclo4;
                           MesocicloDatosExiste1.Plan1= item.Plan1;
                           MesocicloDatosExiste1.Plan2= item.Plan2;
                           MesocicloDatosExiste1.Plan3= item.Plan3;
                           MesocicloDatosExiste1.Plan4= item.Plan4;
                           MesocicloDatosExiste1.Real1= item.Real1;
                           MesocicloDatosExiste1.Real2= item.Real2;
                           MesocicloDatosExiste1.Real3= item.Real3;
                           MesocicloDatosExiste1.Real4= item.Real4;
                           MesocicloDatosExiste1.Dif1= item.Dif1;
                           MesocicloDatosExiste1.Dif2= item.Dif2;
                           MesocicloDatosExiste1.Dif3= item.Dif3;
                           MesocicloDatosExiste1.Dif4= item.Dif4;
                           MesocicloDatosExiste1.Porcentaje1= item.Porcentaje1;
                           MesocicloDatosExiste1.Porcentaje2= item.Porcentaje2;
                           MesocicloDatosExiste1.Porcentaje3= item.Porcentaje3;
                           MesocicloDatosExiste1.Porcentaje4= item.Porcentaje4;
                           MesocicloDatosExiste1.resultadoPLaneado= item.resultadoPLaneado;
                           MesocicloDatosExiste1.resultadoRealizado= item.resultadoRealizado;
                           MesocicloDatosExiste1.Mesociclo= MesocicloExiste;

                                db.SaveChanges();
                            }
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
                Retorno.mensaje = "Error al actualizar ficha";
            }
            return Json(Retorno);
        }


        public static List<Elemento> ListElemento()
        {
            List<Elemento> ListElemento = new List<Elemento>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                ListElemento = db.Elemento.ToList().OrderBy(o => o.IdElemento).ToList();

            }

            return ListElemento;
        }

        public static List<Microciclo> ListMicrociclo()
        {
            List<Microciclo> ListMicrociclo = new List<Microciclo>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                ListMicrociclo = db.Microciclo.ToList().OrderBy(o => o.IdMicrociclo).ToList();

            }

            return ListMicrociclo;
        }
        public static List<Microciclo> List2Microciclo()
        {
            List<Microciclo> List2Microciclo = new List<Microciclo>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                List2Microciclo = db.Microciclo.ToList().OrderBy(o => o.IdMicrociclo).ToList();

            }

            return List2Microciclo;
        }
        public static List<Microciclo> List3Microciclo()
        {
            List<Microciclo> List3Microciclo = new List<Microciclo>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                List3Microciclo = db.Microciclo.ToList().OrderBy(o => o.IdMicrociclo).ToList();

            }

            return List3Microciclo;
        }
        public static List<Microciclo> List4Microciclo()
        {
            List<Microciclo> List4Microciclo = new List<Microciclo>();
            using (Models.BIOMEDICOEntities5 db = new Models.BIOMEDICOEntities5())
            {
                List4Microciclo = db.Microciclo.ToList().OrderBy(o => o.IdMicrociclo).ToList();

            }

            return List4Microciclo;
        }
    }
}