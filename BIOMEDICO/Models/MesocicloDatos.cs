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
    
    public partial class MesocicloDatos
    {
        public int IdMesocicloDatos { get; set; }
        public string NombreElemento { get; set; }
        public string Microciclo1 { get; set; }
        public string Microciclo2 { get; set; }
        public string Microciclo3 { get; set; }
        public string Microciclo4 { get; set; }
        public string Plan1 { get; set; }
        public string Plan2 { get; set; }
        public string Plan3 { get; set; }
        public string Plan4 { get; set; }
        public string Real1 { get; set; }
        public string Real2 { get; set; }
        public string Real3 { get; set; }
        public string Real4 { get; set; }
        public string Dif1 { get; set; }
        public string Dif2 { get; set; }
        public string Dif3 { get; set; }
        public string Dif4 { get; set; }
        public string Porcentaje1 { get; set; }
        public string Porcentaje2 { get; set; }
        public string Porcentaje3 { get; set; }
        public string Porcentaje4 { get; set; }
        public string resultadoPLaneado { get; set; }
        public string resultadoRealizado { get; set; }
        public Nullable<int> IdMesociclo { get; set; }

        public virtual Mesociclo Mesociclo { get; set; } = new Mesociclo();
    }
}
