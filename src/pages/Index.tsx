import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, BarChart3, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TriggerioLogo from '@/components/TriggerioLogo';

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: 'أتمتة ذكية',
      description: 'أتمتة حملاتك التسويقية بالذكاء الاصطناعي',
    },
    {
      icon: BarChart3,
      title: 'تحليلات متقدمة',
      description: 'تتبع أداء حملاتك في الوقت الفعلي',
    },
    {
      icon: Target,
      title: 'استهداف دقيق',
      description: 'الوصول للجمهور المناسب في الوقت المناسب',
    },
    {
      icon: Users,
      title: 'إدارة العملاء',
      description: 'نظام CRM متكامل لإدارة علاقات العملاء',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-main relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          {/* Header */}
          <nav className="flex items-center justify-between mb-16">
            <TriggerioLogo size="md" />
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  ابدأ مجاناً
                </Button>
              </Link>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              أتمتة التسويق الذكية
              <br />
              <span className="opacity-90">لنمو أعمالك</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
              Triggerio يساعدك على أتمتة حملاتك التسويقية وتحويل العملاء المحتملين إلى عملاء فعليين
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/register">
                <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2">
                  ابدأ مجاناً
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="xl" variant="ghost" className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10">
                  لديك حساب؟ سجل الدخول
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            لماذا Triggerio؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            منصة متكاملة لأتمتة التسويق وإدارة العملاء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 gradient-main rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            جاهز للبدء؟
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            انضم إلى آلاف الشركات التي تستخدم Triggerio لتنمية أعمالها
          </p>
          <Link to="/register">
            <Button variant="gradient" size="xl" className="gap-2">
              أنشئ حسابك مجاناً
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <TriggerioLogo size="sm" className="mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">
            © 2024 Triggerio. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
