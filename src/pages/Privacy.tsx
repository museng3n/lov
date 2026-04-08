import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/90">
            Triggerio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last updated: April 2026</p>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">What we collect</h2>
          <ul className="list-disc space-y-1 ps-6 text-muted-foreground">
            <li>Account info (name, email, password)</li>
            <li>Contact data you upload</li>
            <li>Usage data and logs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">How we use it</h2>
          <ul className="list-disc space-y-1 ps-6 text-muted-foreground">
            <li>To run the service you signed up for</li>
            <li>To send emails on your behalf</li>
            <li>To show you analytics</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">Who sees your data</h2>
          <ul className="list-disc space-y-1 ps-6 text-muted-foreground">
            <li>We never sell your data</li>
            <li>We use: MongoDB (storage), Render (hosting), Vercel (frontend)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">Your rights</h2>
          <ul className="list-disc space-y-1 ps-6 text-muted-foreground">
            <li>Request your data</li>
            <li>Delete your account</li>
            <li>Unsubscribe anytime</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            <a href="mailto:contact@triggerio.io" className="text-primary hover:underline">
              contact@triggerio.io
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-6">
        <div className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
          <a href="https://auth.triggerio.io" className="text-primary hover:underline">
            Back to Triggerio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
