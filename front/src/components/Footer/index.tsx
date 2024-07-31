import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col min-h-[30dvh]">
      <main className="flex-1" />
      <div className="bg-[#f3f4f6] p-6 md:py-12 w-full">
        <div className="container max-w-7xl mx-auto flex flex-col items-center gap-4 text-sm">
          <p className="text-[#588157] font-medium">© SmartHome 2024 - Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Política de Privacidad
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Contacto
            </Link>
            <Link
              href="/location"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              ¿Cómo llegar?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
