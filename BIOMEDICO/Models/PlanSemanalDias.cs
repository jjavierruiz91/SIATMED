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
    
    public partial class PlanSemanalDias
    {
        public int IdPlanSemanalDias { get; set; }
        public string ElementoSemanalDias { get; set; }
        public string LunesSemanalDias { get; set; }
        public string MartesSemanalDias { get; set; }
        public string MiercolesSemanalDias { get; set; }
        public string JuevesSemanalDias { get; set; }
        public string ViernesSemanalDias { get; set; }
        public string SabadoSemanalDias { get; set; }
        public string DomingoSemanalDias { get; set; }
        public Nullable<int> IdPlanSemanal { get; set; }

        public virtual PlanSemanalMicrociclo PlanSemanalMicrociclo { get; set; } = new PlanSemanalMicrociclo();
    }
}
