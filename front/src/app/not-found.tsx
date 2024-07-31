import Link from "next/link";

function notFound () {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 text-center">
        <div className="mx-auto max-w-md space-y-4">
          <h1 className="text-9xl font-bold text-[#588157]">404</h1>
          <p className="text-2xl font-medium text-muted-foreground">
            Oops, la página que buscas no existe.
          </p>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#588157] px-6 text-sm text-white font-medium text-primary-foreground shadow transition-colors hover:bg-[#588157]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Go back home
          </Link>
        </div>
      </div>
    );
}

export default notFound;