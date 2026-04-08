import { useState } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isAr ? "rtl" : "ltr"}>
      <header className="sticky top-0 z-10 border-b border-border bg-background px-6 py-4">
        <div className="mx-auto flex items-center justify-between" style={{ maxWidth: 800 }}>
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/90">
            Triggerio
          </Link>
          <div className="flex gap-1 rounded-lg bg-primary/10 p-1">
            <button
              onClick={() => setLang("ar")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                isAr ? "bg-primary text-white" : "text-primary hover:bg-primary/5"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                !isAr ? "bg-primary text-white" : "text-primary hover:bg-primary/5"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto px-6 py-10 pb-20" style={{ maxWidth: 800 }}>
        <h1 className="mb-2 text-3xl font-bold text-primary">
          {isAr ? "شروط الاستخدام" : "Terms of Service"}
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          {isAr ? "آخر تحديث: 8 أبريل 2026" : "Effective Date: April 8, 2026"}
        </p>

        {/* Intro */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? <>تحكم شروط الاستخدام هذه ("الشروط") استخدامك لمنصة <strong>Triggerio</strong> ("المنصة")، التي تديرها Triggerio ("نحن" أو "لنا"). باستخدامك للمنصة أو وصولك إليها، فإنك توافق على الالتزام بهذه الشروط.</>
              : <>These Terms of Service ("Terms") govern your use of <strong>Triggerio</strong> ("Platform"), operated by Triggerio ("we," "us," or "our"). By accessing or using the Platform, you agree to be bound by these Terms.</>
            }
          </p>
        </div>

        {/* 1. Use of the Platform */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "1. استخدام المنصة" : "1. Use of the Platform"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "يجوز لك استخدام Triggerio فقط لأغراض أتمتة التسويق المشروعة. أنت توافق على عدم استخدام المنصة لإرسال رسائل غير مرغوب فيها، أو انتهاك أي قوانين سارية، أو التعدي على حقوق الآخرين."
              : "You may use Triggerio solely for lawful marketing automation purposes. You agree not to use the Platform to send unsolicited messages, violate any applicable laws, or infringe on the rights of others."
            }
          </p>
        </div>

        {/* 2. Your Account */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "2. حسابك" : "2. Your Account"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث تحت حسابك."
              : "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account."
            }
          </p>
        </div>

        {/* 3. Your Data */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "3. بياناتك" : "3. Your Data"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "تحتفظ بالملكية الكاملة لجميع البيانات التي تقوم بتحميلها أو إنشائها داخل المنصة. نحن نعالج بياناتك فقط لتقديم الخدمات التي طلبتها."
              : "You retain full ownership of all data you upload or create within the Platform. We process your data solely to provide the services you have requested."
            }
          </p>
        </div>

        {/* 4. Acceptable Use */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "4. الاستخدام المقبول" : "4. Acceptable Use"}
          </h2>
          <p className="mb-2 text-[15px] leading-[1.8] text-foreground">
            {isAr ? "أنت توافق على عدم:" : "You agree not to:"}
          </p>
          <ul className="mt-2 space-y-1.5 ps-6 list-disc text-[15px] leading-[1.8] text-foreground">
            {isAr ? (
              <>
                <li>استخدام المنصة لإرسال رسائل غير مرغوب فيها أو اتصالات غير مطلوبة</li>
                <li>محاولة الوصول غير المصرح به إلى أي جزء من المنصة</li>
                <li>استخدام المنصة بأي شكل ينتهك سياسات منصات Meta أو Instagram أو Facebook</li>
              </>
            ) : (
              <>
                <li>Use the Platform for spam or unsolicited communications</li>
                <li>Attempt to gain unauthorized access to any part of the Platform</li>
                <li>Use the Platform in any way that violates Meta, Instagram, or Facebook platform policies</li>
              </>
            )}
          </ul>
        </div>

        {/* 5. Service Availability */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "5. توفر الخدمة" : "5. Service Availability"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "نسعى للحفاظ على توفر عالٍ للخدمة لكننا لا نضمن وصولاً دون انقطاع. نحتفظ بالحق في إجراء صيانة أو تحديثات قد تؤثر مؤقتاً على توفر الخدمة."
              : "We strive to maintain high availability but do not guarantee uninterrupted access. We reserve the right to perform maintenance or updates that may temporarily affect service availability."
            }
          </p>
        </div>

        {/* 6. Termination */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "6. الإنهاء" : "6. Termination"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "نحتفظ بالحق في تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط، مع أو بدون إشعار مسبق."
              : "We reserve the right to suspend or terminate accounts that violate these Terms, with or without notice."
            }
          </p>
        </div>

        {/* 7. Limitation of Liability */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "7. تحديد المسؤولية" : "7. Limitation of Liability"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "لا تتحمل Triggerio المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدامك للمنصة."
              : "Triggerio shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform."
            }
          </p>
        </div>

        {/* 8. Changes to Terms */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "8. التغييرات على الشروط" : "8. Changes to Terms"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "قد نحدّث هذه الشروط من وقت لآخر. استمرارك في استخدام المنصة بعد التغييرات يعني قبولك للشروط المحدّثة."
              : "We may update these Terms from time to time. Continued use of the Platform after changes constitutes acceptance of the updated Terms."
            }
          </p>
        </div>

        {/* 9. Contact */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "9. تواصل معنا" : "9. Contact"}
          </h2>
          <p className="mb-3 text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "إذا كان لديك أي أسئلة حول هذه الشروط، تواصل معنا:"
              : "For questions about these Terms, contact us at:"
            }
          </p>
          <div className="rounded-lg bg-primary/10 p-4 text-[15px] leading-[1.8]">
            <p className="font-semibold">Triggerio</p>
            <p>
              {isAr ? "البريد الإلكتروني: " : "Email: "}
              <a href="mailto:contact@triggerio.io" className="font-semibold text-primary hover:underline">contact@triggerio.io</a>
            </p>
            <p>
              {isAr ? "الموقع: " : "Website: "}
              <a href="https://triggerio.io" className="font-semibold text-primary hover:underline">triggerio.io</a>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Triggerio. All rights reserved. | جميع الحقوق محفوظة
      </footer>
    </div>
  );
};

export default Terms;
