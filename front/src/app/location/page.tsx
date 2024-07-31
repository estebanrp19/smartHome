import Link from "next/link";

function location () {
      return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.141340647267!2d-74.02871378821435!3d4.745481795209817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8f81d873ab8b%3A0x333bf586c1e6830b!2sCl.%20167d%20%238-58%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1719417133746!5m2!1ses!2sco"
                className="w-full h-full"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Nuestra Ubicación</h2>
                <p className="text-muted-foreground">
                  Visítanos en nuestro local en el norte de la ciudad.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <p>Calle 167D #8-58, Bogotá, Colombia</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default location