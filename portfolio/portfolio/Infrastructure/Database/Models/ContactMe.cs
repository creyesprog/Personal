﻿using System;
using System.Collections.Generic;

namespace portfolio.Infrastructure.Database.Models
{
    public partial class ContactMe
    {
        public int ContactMeId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Message { get; set; }
    }
}
