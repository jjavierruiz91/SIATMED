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
    
    public partial class EvaluacionEquipoVisitaCompetencia
    {
        public int IdEvaluacionEquipo { get; set; }
        public string Disciplinado { get; set; }
        public string Combativo { get; set; }
        public string Adaptacion { get; set; }
        public string Responsabilidad { get; set; }
        public string EvaluacionregularEquipo { get; set; }
        public string ProblemasDocumentacion { get; set; }
        public string PreparacionFisica { get; set; }
        public string PreparacionTecnica { get; set; }
        public string PreparacionTactica { get; set; }
        public string PreparacionMental { get; set; }
        public string EvaluacionPreparacion { get; set; }
        public string FirmaEntrenador { get; set; }
        public string FirmaMetodologo { get; set; }
        public Nullable<int> IdVisitaCompetencia { get; set; }

        public virtual VisitaCompetencias VisitaCompetencias { get; set; } = new VisitaCompetencias();
    }
}
