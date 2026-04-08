import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="ltr">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto" style={{ maxWidth: 800 }}>
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/90">
            Triggerio
          </Link>
        </div>
      </header>

      <main className="mx-auto px-6 py-12" style={{ maxWidth: 800 }}>
        <h1 className="mb-2 text-3xl font-bold text-left">Terms of Service</h1>
        <p className="mb-10 text-sm text-muted-foreground text-left">Effective Date: April 8, 2026</p>

        <p className="mb-8 text-base leading-relaxed text-muted-foreground text-left">
          These Terms of Service ("Terms") govern your use of Triggerio ("Platform"), operated by Triggerio ("we," "us," or "our"). By accessing or using the Platform, you agree to be bound by these Terms.
        </p>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">1. Use of the Platform</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            You may use Triggerio solely for lawful marketing automation purposes. You agree not to use the Platform to send unsolicited messages, violate any applicable laws, or infringe on the rights of others.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">2. Your Account</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">3. Your Data</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            You retain full ownership of all data you upload or create within the Platform. We process your data solely to provide the services you have requested.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">4. Acceptable Use</h2>
          <p className="mb-3 text-base leading-relaxed text-muted-foreground text-left">You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground text-left">
            <li>Use the Platform for spam or unsolicited communications</li>
            <li>Attempt to gain unauthorized access to any part of the Platform</li>
            <li>Use the Platform in any way that violates Meta, Instagram, or Facebook platform policies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">5. Service Availability</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            We strive to maintain high availability but do not guarantee uninterrupted access. We reserve the right to perform maintenance or updates that may temporarily affect service availability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">6. Termination</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            We reserve the right to suspend or terminate accounts that violate these Terms, with or without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">7. Limitation of Liability</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            Triggerio shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">8. Changes to Terms</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            We may update these Terms from time to time. Continued use of the Platform after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-left">9. Contact</h2>
          <div className="text-base leading-relaxed text-muted-foreground text-left">
            <p>For questions about these Terms, contact us at:</p>
            <p>
              <a href="mailto:contact@triggerio.io" className="text-primary hover:underline">contact@triggerio.io</a>
            </p>
            <p>
              <a href="https://triggerio.io" className="text-primary hover:underline">triggerio.io</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-6">
        <div className="mx-auto text-center text-sm text-muted-foreground" style={{ maxWidth: 800 }}>
          <a href="https://auth.triggerio.io" className="text-primary hover:underline">
            Back to Triggerio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
