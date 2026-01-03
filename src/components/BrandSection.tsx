import { Zap, BarChart3, Target } from 'lucide-react';
import TriggerioLogo from './TriggerioLogo';

const BrandSection = () => {
  const benefits = [
    {
      icon: Zap,
      text: 'أتمتة كاملة لوسائل التواصل',
    },
    {
      icon: BarChart3,
      text: 'تحليلات متقدمة في الوقت الفعلي',
    },
    {
      icon: Target,
      text: 'تحويل العملاء المحتملين تلقائياً',
    },
  ];

  return (
    <div className="gradient-main h-full flex flex-col items-center justify-center p-8 lg:p-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-md">
        {/* Logo */}
        <div className="animate-fade-in-up">
          <TriggerioLogo size="lg" className="mx-auto" />
        </div>

        {/* Taglines */}
        <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
            أتمتة التسويق الذكية
          </h2>
          <p className="text-primary-foreground/80 text-base lg:text-lg">
            Smart Marketing Automation
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4 pt-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-primary-foreground/90 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <benefit.icon className="w-5 h-5" />
              </div>
              <span className="text-base lg:text-lg font-medium text-right">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
