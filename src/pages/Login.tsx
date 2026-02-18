// 📝 Login Page - متصل بالـ Backend
// File: src/pages/Login.tsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import BrandSection from '@/components/BrandSection';
import { useToast } from '@/hooks/use-toast';

// @ts-ignore - Import من JavaScript files
import { authAPI } from '../shared-api-config/api/endpoints';
// @ts-ignore
import { storage } from '../shared-api-config/utils/storage';
// @ts-ignore
import { URLS } from '../shared-api-config/api/config';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; submit?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }

    if (!password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({}); // Clear previous errors

    try {
      // استدعاء API تسجيل الدخول الحقيقي
      console.log('🔵 Calling login API with:', { email: email.trim() });
      const response = await authAPI.login({
        email: email.trim(),
        password: password
      });

      // حفظ Token والمستخدم
      console.log('🟢 Login response:', response);
      storage.setToken(response.data.token);
      storage.setUser(response.data.user);

      // حفظ Remember Me
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      // عرض رسالة نجاح
      toast({
        title: 'تم تسجيل الدخول بنجاح',
        description: `مرحباً بك ${response.data.user.name || response.data.user.email}`,
      });

      // الانتقال للـ Dashboard بعد ثانية
      setTimeout(() => {
        window.location.href = URLS.DASHBOARD;
      }, 1000);
      
    } catch (error: any) {
      console.error('Login error:', error);
      
      // عرض رسالة الخطأ
      let errorMessage = 'حدث خطأ في تسجيل الدخول. حاول مرة أخرى.';
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.status === 401) {
        errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      } else if (error.response?.status === 404) {
        errorMessage = 'الحساب غير موجود. يرجى التسجيل أولاً';
      } else if (!error.response) {
        errorMessage = 'لا يمكن الاتصال بالخادم. تحقق من الإنترنت';
      }
      
      setErrors({ 
        submit: errorMessage 
      });

      toast({
        title: 'فشل تسجيل الدخول',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
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
              تسجيل الدخول
            </h1>
            <p className="text-muted-foreground text-lg">
              مرحباً بعودتك إلى Triggerio
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* رسالة خطأ عامة */}
            {errors.submit && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-lg text-sm text-center">
                {errors.submit}
              </div>
            )}

            {/* Email Field */}
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
                  if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                }}
                icon={<Mail className="w-5 h-5" />}
                className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
                dir="ltr"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-destructive text-right">{errors.email}</p>
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
                  }}
                  icon={<Lock className="w-5 h-5" />}
                  className={`pl-12 ${errors.password ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  dir="ltr"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive text-right">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  disabled={isLoading}
                />
                <Label htmlFor="remember" className="text-sm cursor-pointer">
                  تذكرني / Remember me
                </Label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
              >
                نسيت كلمة المرور؟
              </Link>
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
                  جاري تسجيل الدخول...
                </>
              ) : (
                'تسجيل الدخول / Login'
              )}
            </Button>
          </form>

          {/* Register Link */}
          <p className="text-center text-muted-foreground">
            ليس لديك حساب؟{' '}
            <Link
              to="/register"
              className="font-semibold gradient-text hover:opacity-80 transition-opacity"
            >
              سجل الآن / Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;