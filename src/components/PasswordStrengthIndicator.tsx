import { useMemo } from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator = ({ password }: PasswordStrengthIndicatorProps) => {
  const strength = useMemo(() => {
    let score = 0;
    if (!password) return { score: 0, label: '', color: '' };

    // Length check
    if (password.length >= 8) score += 25;
    if (password.length >= 12) score += 10;

    // Uppercase check
    if (/[A-Z]/.test(password)) score += 20;

    // Lowercase check
    if (/[a-z]/.test(password)) score += 15;

    // Number check
    if (/\d/.test(password)) score += 20;

    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 10;

    if (score <= 40) {
      return { score, label: 'ضعيفة / Weak', color: 'bg-destructive' };
    } else if (score <= 70) {
      return { score, label: 'متوسطة / Medium', color: 'gradient-main' };
    } else {
      return { score, label: 'قوية / Strong', color: 'gradient-main' };
    }
  }, [password]);

  if (!password) return null;

  return (
    <div className="space-y-2 mt-2">
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-500 rounded-full ${strength.color}`}
          style={{ width: `${Math.min(strength.score, 100)}%` }}
        />
      </div>
      <p className={`text-xs font-medium ${
        strength.score <= 40 ? 'text-destructive' : 
        strength.score <= 70 ? 'text-secondary' : 'text-success'
      }`}>
        {strength.label}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;
