//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BIOMEDICO.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class GymColiseo
    {
        public int IdGymColiseo { get; set; }
        public string DeporteGymColiseo { get; set; }
        public string CategoriaGymColiseo { get; set; }
        public string TelefonoGymColiseo { get; set; }
        public string EntrenadorGymColiseo { get; set; }
        public Nullable<System.TimeSpan> HoraInicioGymColiseo { get; set; }
        public Nullable<System.TimeSpan> HoraFinalGymColiseo { get; set; }
        public Nullable<System.DateTime> FechaGymColiseo { get; set; }
        public string FirmaEntrenador { get; set; }
        public string UsuarioRegistro { get; set; }
        public Nullable<System.DateTime> FechaRegistro { get; set; }
    }
}
