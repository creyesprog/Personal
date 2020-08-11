using Microsoft.Extensions.DependencyInjection;
using portfolio.Infrastructure.Database;
using portfolio.Infrastructure.Database.Models;
using portfolio.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace portfolio.Infrastructure.Repositories
{
    public class ContactMeRepository : IContactMeRepository
    {
        private PortfolioContext db { get; }

        public ContactMeRepository(PortfolioContext portfolioContext)
        {
            db = portfolioContext;
        }

        public void InsertContactMe(ContactMe contactMe)
        {
            db.ContactMe.Add(contactMe);
        }

        /// <summary>
        /// Save changes at the end of sending all the requests.
        /// </summary>
        /// <returns></returns>
        public bool SaveChanges()
        {
            bool status;
            try
            {
                status = true;
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                // Add logging here
                status = false;
                Console.WriteLine(ex);
            }
            return status;
        }
    }
}
