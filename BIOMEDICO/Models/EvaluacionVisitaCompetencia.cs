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
    
    public partial class EvaluacionVisitaCompetencia
    {
        public int IdEvaluacionVisitaCompetencia { get; set; }
        public string LugarEntrenamiento { get; set; }
        public string AtencionMedica { get; set; }
        public string EscenariosDeportivos { get; set; }
        public string Uniformidad { get; set; }
        public string ComportamientoArbitral { get; set; }
        public string TransporteInterno { get; set; }
        public string Alimentacion { get; set; }
        public string Hospedaje { get; set; }
        public string CalificacionRegular { get; set; }
        public string hospedajeDelegacion { get; set; }
        public string AlimentacionDelegacion { get; set; }
        public string EmpresaTransporte { get; set; }
        public string DuracionViajeIda { get; set; }
        public string DuracionViajeVuelta { get; set; }
        public string ViajeIdaComoFue { get; set; }
        public string ViajeRegresoComoFue { get; set; }
        public Nullable<int> IdVisitaCompetencia { get; set; }

        public virtual VisitaCompetencias VisitaCompetencias { get; set; } = new VisitaCompetencias();
    }
}