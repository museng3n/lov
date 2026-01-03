import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Loader2, User, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import BrandSection from '@/components/BrandSection';
import PasswordStrengthIndicator from '@/components/PasswordStrengthIndicator';
import SuccessModal from '@/components/SuccessModal';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    } else if (!/^[\u0600-\u06FFa-zA-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'يرجى إدخال اسم صحيح';
    }

    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }

    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'كلمة المرور يجب أن تحتوي على حرف كبير';
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = 'كلمة المرور يجب أن تحتوي على رقم';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
    }

    if (!acceptTerms) {
      newErrors.terms = 'يجب الموافقة على شروط الخدمة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigate('/login');
  };

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Brand Section */}
        <div className="lg:w-[40%] min-h-[280px] lg:min-h-screen">
          <BrandSection />
        </div>

        {/* Form Section */}
        <div className="lg:w-[60%] flex items-center justify-center p-6 lg:p-12 bg-background">
          <div className="w-full max-w-md space-y-8 animate-fade-in-up">
            {/* Header */}
            <div className="text-center lg:text-right space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                إنشاء حساب جديد
              </h1>
              <p className="text-muted-foreground text-lg">
                ابدأ رحلتك مع Triggerio اليوم
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Field */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-base font-medium">
                  الاسم الكامل / Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="أحمد محمد"
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  icon={<User className="w-5 h-5" />}
                  className={errors.fullName ? 'border-destructive focus-visible:ring-destructive' : ''}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  البريد الإلكتروني / Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  icon={<Mail className="w-5 h-5" />}
                  className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
                  dir="ltr"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-medium">
                  كلمة المرور / Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    icon={<Lock className="w-5 h-5" />}
                    className={`pl-12 ${errors.password ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    dir="ltr"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <PasswordStrengthIndicator password={formData.password} />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-base font-medium">
                  تأكيد كلمة المرور / Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    icon={<Lock className="w-5 h-5" />}
                    className={`pl-12 ${errors.confirmPassword ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    dir="ltr"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  {passwordsMatch && (
                    <div className="absolute left-10 top-1/2 -translate-y-1/2">
                      <Check className="w-5 h-5 text-success" />
                    </div>
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm cursor-pointer leading-relaxed">
                    أوافق على{' '}
                    <Link to="/terms" className="gradient-text font-medium hover:opacity-80">
                      شروط الخدمة
                    </Link>{' '}
                    و{' '}
                    <Link to="/privacy" className="gradient-text font-medium hover:opacity-80">
                      سياسة الخصوصية
                    </Link>
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-destructive">{errors.terms}</p>
                )}
              </div>

              {/* Submit Button */}
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
                    جاري إنشاء الحساب...
                  </>
                ) : (
                  'إنشاء حساب / Create Account'
                )}
              </Button>
            </form>

            {/* Login Link */}
            <p className="text-center text-muted-foreground">
              لديك حساب بالفعل؟{' '}
              <Link
                to="/login"
                className="font-semibold gradient-text hover:opacity-80 transition-opacity"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleModalClose}
        title="تم إنشاء الحساب بنجاح!"
        message="يرجى التحقق من بريدك الإلكتروني لتفعيل الحساب"
      />
    </>
  );
};

export default Register;
