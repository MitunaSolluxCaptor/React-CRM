using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Text.Json;
using Newtonsoft.Json;
using React_CRM.Classes.Db;
using React_CRM.Classes.Db.Data;

namespace React_CRM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private ApplicationContext db;
        public AccountController(ApplicationContext context)
        {
            db = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post(object body)
        {
            var userAutorizeData = getUserAuthenticateData(body.ToString());
            if (userAutorizeData == null)
            {
                return BadRequest();
            }

            User user = GetUserFromDB(userAutorizeData);
            if (user == null)
            {
                return Ok("Неверный логин или пароль.");
            }

            await Authenticate(user.Name);
            return Ok();
        }

        protected User GetUserFromDB(UserAuthenticateData userAuthenticateData)
        {
            var user = db.Users.FirstOrDefault(u =>
                u.Login == userAuthenticateData.login &&
                u.Password == userAuthenticateData.password);

            if (user != null)
            {
                return user;
            }

            return null;
        }

        protected UserAuthenticateData getUserAuthenticateData(string body)
        {
            //var loginData = JsonConvert.DeserializeObject<RequestBody>(body.ToString());
            //var base64EncodedBytes = Convert.FromBase64String(loginData.auth);
            var base64EncodedBytes = Convert.FromBase64String(body);
            var authenticateData = System.Text.Encoding.UTF8.GetString(base64EncodedBytes);

            if (string.IsNullOrEmpty(authenticateData))
            {
                return null;
            }

            UserAuthenticateData userAuthenticateData = new UserAuthenticateData()
            {
                login = authenticateData.Split("/")[0],
                password = authenticateData.Split("/")[1]
            };

            return userAuthenticateData;
        }

        private async Task Authenticate(string userName)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
            };
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok();
        }

        public class RequestBody
        {
            public string? auth { get; set; }
        }

        public class UserAuthenticateData
        {
            public string? login { get; set; }
            public string? password { get; set; }
        }
    }
}
