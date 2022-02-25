using System;
using System.Collections.Generic;

#nullable disable

namespace Classes.Models
{
    public partial class AnyTable
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }
        public DateTime? Date { get; set; }
        public string Freshness { get; set; }
        public int? Price { get; set; }
        public string Comments { get; set; }
    }
}
