import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TriggerioLogo from '@/components/TriggerioLogo';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setError('البريد الإلكتروني مطلوب');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('يرجى إدخال بريد إلكتروني صحيح');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen gradient-diagonal flex items-center justify-center p-4 lg:p-8">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-card rounded-2xl p-8 lg:p-12 shadow-xl animate-scale-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <TriggerioLogo size="md" className="mx-auto" />
        </div>

        {isSuccess ? (
          /* Success State */
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="w-20 h-20 mx-auto gradient-main rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-card-foreground">
                تم إرسال الرابط!
              </h2>
              <p className="text-muted-foreground">
                تحقق من بريدك الإلكتروني للحصول على رابط إعادة تعيين كلمة المرور
              </p>
            </div>

            <div className="pt-4">
              <Link to="/login">
                <Button variant="gradient" size="lg" className="w-full">
                  العودة إلى تسجيل الدخول
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          /* Form State */
          <div className="space-y-6">
            {/* Animated Key Icon */}
            <div className="flex justify-center">
              <div className="animate-float">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="keyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#FF8C00" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="12" stroke="url(#keyGrad)" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="6" fill="url(#keyGrad)"/>
                  <path d="M32 32L52 52M52 52L52 44M52 52L44 52" stroke="url(#keyGrad)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-card-foreground">
                نسيت كلمة المرور؟
              </h1>
              <p className="text-muted-foreground">
                سنرسل لك رابط إعادة تعيين كلمة المرور
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  البريد الإلكتروني / Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  icon={<Mail className="w-5 h-5" />}
                  className={error ? 'border-destructive focus-visible:ring-destructive' : ''}
                  dir="ltr"
                />
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="xl"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  'إرسال رابط إعادة التعيين'
                )}
              </Button>
            </form>

            {/* Back Link */}
            <div className="text-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
              >
                <ArrowRight className="w-4 h-4" />
                العودة إلى تسجيل الدخول
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
