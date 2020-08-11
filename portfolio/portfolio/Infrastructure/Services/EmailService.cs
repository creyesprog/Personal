using portfolio.Infrastructure.Database.Models;
using portfolio.Infrastructure.Repositories.Interfaces;
using portfolio.Infrastructure.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace portfolio.Infrastructure.Services
{
    public class EmailService : IEmailService
    {
        private readonly IContactMeRepository contactMeRepository;

        public EmailService(IContactMeRepository contactMeRepository)
        {
            this.contactMeRepository = contactMeRepository;
        }

        public bool CreateContactMe(string email, string name, string message)
        {
            ContactMe newContactMe = new ContactMe()
            {
                Email = email,
                Name = name,
                Message = message
            };

            contactMeRepository.InsertContactMe(newContactMe);

            return contactMeRepository.SaveChanges();
        }
    }
}
