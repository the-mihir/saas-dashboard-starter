
import * as LucideIcons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<any>>)[
    icon.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('')
  ];

  return (
    <Card className="border border-slate-200 hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
          {IconComponent && <IconComponent className="h-6 w-6 text-gray-600" />}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
