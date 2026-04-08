import { useState } from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          {isAr ? "آخر تحديث: 2 مارس 2026" : "Last updated: March 2, 2026"}
        </p>

        {/* 1. Introduction */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "1. مقدمة" : "1. Introduction"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? <>مرحباً بك في <strong>Triggerio</strong>. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيف نجمع معلوماتك ونستخدمها ونحميها عند استخدامك لمنصتنا لأتمتة التسويق عبر وسائل التواصل الاجتماعي.</>
              : <>Welcome to <strong>Triggerio</strong>. We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information when you use our social media marketing automation platform.</>
            }
          </p>
        </div>

        {/* 2. Data We Collect */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "2. البيانات التي نجمعها" : "2. Data We Collect"}
          </h2>
          <p className="mb-2 text-[15px] leading-[1.8] text-foreground">
            {isAr ? "نجمع الأنواع التالية من البيانات:" : "We collect the following types of data:"}
          </p>
          <ul className="mt-2 space-y-1.5 ps-6 list-disc text-[15px] leading-[1.8] text-foreground">
            {isAr ? (
              <>
                <li><strong>بيانات الحساب:</strong> الاسم، البريد الإلكتروني، وكلمة المرور (مشفرة) عند إنشاء حسابك</li>
                <li><strong>بيانات التواصل الاجتماعي:</strong> المعلومات العامة من حساباتك المرتبطة على Facebook وInstagram (الاسم العام، معرف الصفحة، المنشورات العامة)</li>
                <li><strong>بيانات التفاعل:</strong> التعليقات والرسائل والتفاعلات على منشورات صفحاتك المرتبطة</li>
                <li><strong>بيانات الاستخدام:</strong> معلومات حول كيفية استخدامك للمنصة لتحسين خدماتنا</li>
              </>
            ) : (
              <>
                <li><strong>Account Data:</strong> Name, email address, and password (encrypted) when you create your account</li>
                <li><strong>Social Media Data:</strong> Public information from your connected Facebook and Instagram accounts (public name, page ID, public posts)</li>
                <li><strong>Interaction Data:</strong> Comments, messages, and interactions on your connected page posts</li>
                <li><strong>Usage Data:</strong> Information about how you use the platform to improve our services</li>
              </>
            )}
          </ul>
        </div>

        {/* 3. How We Use Your Data */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "3. كيف نستخدم بياناتك" : "3. How We Use Your Data"}
          </h2>
          <p className="mb-2 text-[15px] leading-[1.8] text-foreground">
            {isAr ? "نستخدم بياناتك للأغراض التالية فقط:" : "We use your data solely for the following purposes:"}
          </p>
          <ul className="mt-2 space-y-1.5 ps-6 list-disc text-[15px] leading-[1.8] text-foreground">
            {isAr ? (
              <>
                <li>تشغيل قواعد الأتمتة التي أنشأتها (ردود تلقائية، رسائل خاصة، تصنيف جهات الاتصال)</li>
                <li>إدارة حملاتك التسويقية وجهات اتصالك</li>
                <li>تقديم التحليلات والإحصائيات حول أداء حملاتك</li>
                <li>تحسين المنصة وإصلاح المشكلات التقنية</li>
                <li>التواصل معك بخصوص حسابك وتحديثات الخدمة</li>
              </>
            ) : (
              <>
                <li>Running automation rules you created (auto-replies, direct messages, contact classification)</li>
                <li>Managing your marketing campaigns and contacts</li>
                <li>Providing analytics and statistics about your campaign performance</li>
                <li>Improving the platform and fixing technical issues</li>
                <li>Communicating with you about your account and service updates</li>
              </>
            )}
          </ul>
        </div>

        {/* 4. Data Sharing */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "4. مشاركة البيانات" : "4. Data Sharing"}
          </h2>
          <p className="mb-2 text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? <><strong>لا نبيع بياناتك الشخصية أبداً.</strong> قد نشارك بياناتك فقط في الحالات التالية:</>
              : <><strong>We never sell your personal data.</strong> We may share your data only in the following cases:</>
            }
          </p>
          <ul className="mt-2 space-y-1.5 ps-6 list-disc text-[15px] leading-[1.8] text-foreground">
            {isAr ? (
              <>
                <li><strong>منصات التواصل:</strong> نتفاعل مع Facebook وInstagram نيابةً عنك لتنفيذ الأتمتات التي أعددتها</li>
                <li><strong>مزودو الخدمة:</strong> نستخدم خدمات استضافة وقواعد بيانات آمنة لتشغيل المنصة</li>
                <li><strong>المتطلبات القانونية:</strong> إذا تطلب القانون ذلك</li>
              </>
            ) : (
              <>
                <li><strong>Social Platforms:</strong> We interact with Facebook and Instagram on your behalf to execute your configured automations</li>
                <li><strong>Service Providers:</strong> We use secure hosting and database services to operate the platform</li>
                <li><strong>Legal Requirements:</strong> If required by law</li>
              </>
            )}
          </ul>
        </div>

        {/* 5. Data Security */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "5. أمان البيانات" : "5. Data Security"}
          </h2>
          <p className="mb-2 text-[15px] leading-[1.8] text-foreground">
            {isAr ? "نتخذ إجراءات أمنية لحماية بياناتك، تشمل:" : "We implement security measures to protect your data, including:"}
          </p>
          <ul className="mt-2 space-y-1.5 ps-6 list-disc text-[15px] leading-[1.8] text-foreground">
            {isAr ? (
              <>
                <li>تشفير كلمات المرور باستخدام bcrypt</li>
                <li>تشفير رموز الوصول (Access Tokens) المخزنة</li>
                <li>حماية ضد هجمات XSS وحقن NoSQL</li>
                <li>اتصالات مشفرة عبر HTTPS</li>
                <li>تحديد معدل الطلبات لمنع الإساءة</li>
              </>
            ) : (
              <>
                <li>Password encryption using bcrypt</li>
                <li>Encryption of stored Access Tokens</li>
                <li>Protection against XSS and NoSQL injection attacks</li>
                <li>Encrypted connections via HTTPS</li>
                <li>Rate limiting to prevent abuse</li>
              </>
            )}
          </ul>
        </div>

        {/* 6. Your Rights */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "6. حقوقك" : "6. Your Rights"}
          </h2>
          <p className="mb-2 text-[15px] leading-[1.8] text-foreground">
            {isAr ? "لديك الحقوق التالية:" : "You have the following rights:"}
          </p>
          <ul className="mt-2 space-y-1.5 ps-6 list-disc text-[15px] leading-[1.8] text-foreground">
            {isAr ? (
              <>
                <li><strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية</li>
                <li><strong>التصحيح:</strong> تحديث أو تصحيح بياناتك</li>
                <li><strong>الحذف:</strong> طلب حذف حسابك وبياناتك</li>
                <li><strong>إلغاء الربط:</strong> فصل حسابات التواصل الاجتماعي في أي وقت</li>
              </>
            ) : (
              <>
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct your data</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Disconnect:</strong> Unlink your social media accounts at any time</li>
              </>
            )}
          </ul>
        </div>

        {/* 7. Facebook and Instagram Data */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "7. بيانات Facebook وInstagram" : "7. Facebook and Instagram Data"}
          </h2>
          <p className="mb-2 text-[15px] leading-[1.8] text-foreground">
            {isAr ? "عند ربط حسابك بـ Facebook أو Instagram:" : "When you connect your Facebook or Instagram account:"}
          </p>
          <ul className="mt-2 space-y-1.5 ps-6 list-disc text-[15px] leading-[1.8] text-foreground">
            {isAr ? (
              <>
                <li>نطلب فقط الصلاحيات اللازمة لتشغيل الأتمتات</li>
                <li>لا نخزن محتوى المنشورات أو الصور الشخصية</li>
                <li>يمكنك إلغاء الوصول من إعدادات Facebook في أي وقت</li>
                <li>نلتزم بسياسات منصة Facebook للمطورين</li>
              </>
            ) : (
              <>
                <li>We only request permissions necessary to run your automations</li>
                <li>We do not store post content or personal photos</li>
                <li>You can revoke access from Facebook settings at any time</li>
                <li>We comply with Facebook Platform Developer Policies</li>
              </>
            )}
          </ul>
        </div>

        {/* 8. Cookies */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "8. ملفات تعريف الارتباط (Cookies)" : "8. Cookies"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "نستخدم ملفات تعريف الارتباط الضرورية فقط للحفاظ على جلسة تسجيل الدخول وتفضيلات اللغة. لا نستخدم ملفات تعريف ارتباط إعلانية أو تتبعية من أطراف ثالثة."
              : "We use only essential cookies to maintain your login session and language preferences. We do not use advertising or third-party tracking cookies."
            }
          </p>
        </div>

        {/* 9. Changes to This Policy */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "9. التغييرات على هذه السياسة" : "9. Changes to This Policy"}
          </h2>
          <p className="text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "قد نحدّث هذه السياسة من وقت لآخر. سنُعلمك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار داخل المنصة."
              : "We may update this policy from time to time. We will notify you of any material changes via email or an in-platform notification."
            }
          </p>
        </div>

        {/* 10. Contact Us */}
        <div className="mb-5 rounded-xl border border-border bg-card p-7">
          <h2 className="mb-3 border-b-2 border-primary/20 pb-2.5 text-xl font-semibold text-primary">
            {isAr ? "10. تواصل معنا" : "10. Contact Us"}
          </h2>
          <p className="mb-3 text-[15px] leading-[1.8] text-foreground">
            {isAr
              ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية، تواصل معنا:"
              : "If you have any questions about this Privacy Policy, contact us:"
            }
          </p>
          <div className="rounded-lg bg-primary/10 p-4 text-[15px] leading-[1.8]">
            <p className="font-semibold">Triggerio</p>
            <p>
              {isAr ? "البريد الإلكتروني: " : "Email: "}
              <a href="mailto:privacy@triggerio.io" className="font-semibold text-primary hover:underline">privacy@triggerio.io</a>
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

export default Privacy;
