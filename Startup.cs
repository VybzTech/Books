using Books.Repository;

namespace Books
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddControllers();
      services.AddTransient<IBooksRepository>();
    }
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      //SHOW DEVELOPER ERROR IF IN DEVELOPMENT MODE
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      // ROUTING MIDDLEWARE
      app.UseRouting();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });

      /*
      //SOME CODE TO SHOW ORDER OF EXECUTION
      // app.Use(async (context, next) =>
      // {
      //   await context.Response.WriteAsync("Hello this is a Test from Use - I \n");
      //   await next();
      //   await context.Response.WriteAsync("Hello this is a Test from Use - II \n");
      // });
*/
      app.Run(async context =>
        {
          await context.Response.WriteAsync("Hello this is a Run Test \n I am Working Now !!!!");
        });
    }
  }
}