function contact () {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contáctanos
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Déjanos un mensaje y nos pondremos en contacto contigo a la
                brevedad.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-lg font-medium">Nuestros datos</p>
                <div className="space-y-1">
                  <p>Nombre: SmartHome</p>
                  <p>Correo electrónico: contacto@smarthome.com.co</p>
                  <p>Teléfono: +57 (315) 244 7623</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium">Ubicación</p>
                <p>Calle 167D #8-58, Bogotá, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default contact