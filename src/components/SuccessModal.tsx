import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const SuccessModal = ({ isOpen, onClose, title, message }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl animate-scale-in">
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto gradient-main rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-card-foreground">
            {title}
          </h3>

          {/* Message */}
          <p className="text-muted-foreground">
            {message}
          </p>

          {/* Button */}
          <Button 
            variant="gradient" 
            size="lg" 
            className="w-full"
            onClick={onClose}
          >
            حسناً
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
