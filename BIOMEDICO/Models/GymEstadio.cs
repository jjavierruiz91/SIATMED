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
    
    public partial class GymEstadio
    {
        public int IdGymEstadio { get; set; }
        public string DeporteGymEstadio { get; set; }
        public string CategoriaGymEstadio { get; set; }
        public string TelefonoGymEstadio { get; set; }
        public string EntrenadorGymEstadio { get; set; }
        public Nullable<System.TimeSpan> HoraInicioGymEstadio { get; set; }
        public Nullable<System.TimeSpan> HoraFinalGymEstadio { get; set; }
        public Nullable<System.DateTime> FechaGymEstadio { get; set; }
        public string FirmaEntrenador { get; set; }
        public string UsuarioRegistro { get; set; }
        public Nullable<System.DateTime> FechaRegistro { get; set; }
    }
}
