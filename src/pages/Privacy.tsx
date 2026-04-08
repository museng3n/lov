import { Link } from "react-router-dom";

const Privacy = () => {
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
        <h1 className="mb-2 text-3xl font-bold text-left">Privacy Policy</h1>
        <p className="mb-10 text-sm text-muted-foreground text-left">Effective Date: April 8, 2026</p>

        <p className="mb-8 text-base leading-relaxed text-muted-foreground text-left">
          At Triggerio ("we," "us," or "our"), we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our platform at triggerio.io.
        </p>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">Information We Collect</h2>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground text-left">
            <li>Account information you provide (name, email, password)</li>
            <li>Contact data you import or create within the platform</li>
            <li>Usage data collected automatically (interactions, session data, feature usage)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">How We Use Your Information</h2>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground text-left">
            <li>To operate and improve the Triggerio platform</li>
            <li>To send automated communications on your behalf</li>
            <li>To provide customer support and respond to inquiries</li>
            <li>To analyze usage patterns and enhance platform performance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">Data Sharing</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            We do not sell your personal data. We may share data with trusted third-party service providers who assist in operating our platform, subject to strict confidentiality agreements. All providers are required to handle your data in accordance with applicable privacy laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">Data Security</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security reviews.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">Your Rights</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at{" "}
            <a href="mailto:contact@triggerio.io" className="text-primary hover:underline">contact@triggerio.io</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">Data Retention</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            We retain your data for as long as your account is active or as needed to provide services. Upon account deletion, your data is removed within 30 days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-left">Changes to This Policy</h2>
          <p className="text-base leading-relaxed text-muted-foreground text-left">
            We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-left">Contact</h2>
          <div className="text-base leading-relaxed text-muted-foreground text-left">
            <p>Triggerio</p>
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

export default Privacy;
