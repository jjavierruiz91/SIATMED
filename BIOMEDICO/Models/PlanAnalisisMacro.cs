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
    
    public partial class PlanAnalisisMacro
    {
        public int IdPlanMacrociclo { get; set; }
        public string CompetenciaPrincipal { get; set; }
        public string TipoPlanificacion { get; set; }
        public string NumMacrociclo { get; set; }
        public Nullable<System.DateTime> FechaInicioMacro { get; set; }
        public Nullable<System.DateTime> FechaFinMacro { get; set; }
        public string SedeCompetencia { get; set; }
        public string EscenarioMacro { get; set; }
        public string CondicionesClimaticas { get; set; }
        public string ObjetivosNuevaCompetencia { get; set; }
        public string ObjetivosEspecificosNuevaCompetencia { get; set; }
        public string PronosticoCompetencia { get; set; }
        public string TareasMesociclos { get; set; }
        public string PeriodoPreparatorio { get; set; }
        public string MesosicloGeneral { get; set; }
        public string MesosicloEspecial { get; set; }
        public string MesosicloCompeticion { get; set; }
        public string TareaMesosicloGeneral { get; set; }
        public string TareaMesosicloEspecial { get; set; }
        public string TareaMesosicloCompeticion { get; set; }
        public string Capacidades01 { get; set; }
        public string Capacidades02 { get; set; }
        public string Capacidades03 { get; set; }
        public string Capacidades04 { get; set; }
        public string Capacidades05 { get; set; }
        public string Capacidades06 { get; set; }
        public string Capacidades07 { get; set; }
        public string Capacidades08 { get; set; }
        public string Capacidades09 { get; set; }
        public string Capacidades10 { get; set; }
        public string Metodos01 { get; set; }
        public string Metodos02 { get; set; }
        public string Metodos03 { get; set; }
        public string Metodos04 { get; set; }
        public string Metodos05 { get; set; }
        public string Metodos06 { get; set; }
        public string Metodos07 { get; set; }
        public string Metodos08 { get; set; }
        public string Metodos09 { get; set; }
        public string Metodos10 { get; set; }
        public string Medios01 { get; set; }
        public string Medios02 { get; set; }
        public string Medios03 { get; set; }
        public string Medios04 { get; set; }
        public string Medios05 { get; set; }
        public string Medios06 { get; set; }
        public string Medios07 { get; set; }
        public string Medios08 { get; set; }
        public string Medios09 { get; set; }
        public string Medios10 { get; set; }
        public string RecursosHumanos { get; set; }
        public string RecursosFisicos { get; set; }
        public string Recursosfinancieros { get; set; }
        public string RecursoDeportivo { get; set; }
        public string DisponibleHumanos { get; set; }
        public string DisponibleFisicos { get; set; }
        public string DisponibleFinanciero { get; set; }
        public string DisponibleDeportivo { get; set; }
        public Nullable<int> IdMacroAnterior { get; set; }

        public virtual AnalisisMacrociclo AnalisisMacrociclo { get; set; } = new AnalisisMacrociclo();
    }
}
