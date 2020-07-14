using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace portfolio.Infrastructure.Models.PartialModels
{
    public class SkillPartialViewModel
    {
        public SkillPartialViewModel(string header, int weight)
        {
            Header = header;
            Weight = weight;
        }

        public string Header { get; set; }
        public int Weight { get; set; }
    }
}
