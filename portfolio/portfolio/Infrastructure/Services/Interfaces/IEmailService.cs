namespace portfolio.Infrastructure.Services.Interfaces
{
    public interface IEmailService
    {
        bool CreateContactMe(string email, string name, string message);
    }
}