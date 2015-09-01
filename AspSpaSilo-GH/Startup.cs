using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AspSpaSilo_GH.Startup))]
namespace AspSpaSilo_GH
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
