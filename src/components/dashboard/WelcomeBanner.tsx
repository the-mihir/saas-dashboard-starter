
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const WelcomeBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <Card className="bg-gray-50 border-gray-100">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Welcome to your dashboard</h2>
            <p className="text-slate-600 max-w-3xl">
              Get started by exploring your dashboard or complete your profile setup. 
              Need help? Check out our quick start guide.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="default" className="bg-gray-600 hover:bg-gray-700">
                Complete Setup
              </Button>
              <Button variant="outline">
                View Guide
              </Button>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsVisible(false)}
            className="opacity-70 hover:opacity-100"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;
