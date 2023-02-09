namespace Books
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello, World !");
      CreateHostBuilder(args).Build().Run();
    }
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args).
        ConfigureWebHostDefaults(webHost =>
        {
          webHost.UseStartup<Startup>();
        });

  }
}