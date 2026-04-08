import { Link } from "react-router-dom";

const Terms = () => {
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
        <h1 className="mb-2 text-3xl font-bold">Terms of Service</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last updated: April 2026</p>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">By using Triggerio you agree to</h2>
          <ul className="list-disc space-y-1 ps-6 text-muted-foreground">
            <li>Use the platform legally and responsibly</li>
            <li>Not send spam or unsolicited emails</li>
            <li>Keep your account credentials secure</li>
            <li>You own your data, we just process it</li>
            <li>We can suspend accounts that violate these terms</li>
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

export default Terms;
