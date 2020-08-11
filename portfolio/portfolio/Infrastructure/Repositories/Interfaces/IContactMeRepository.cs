using portfolio.Infrastructure.Database.Models;

namespace portfolio.Infrastructure.Repositories.Interfaces
{
    public interface IContactMeRepository
    {
        void InsertContactMe(ContactMe contactMe);
        bool SaveChanges();
    }
}