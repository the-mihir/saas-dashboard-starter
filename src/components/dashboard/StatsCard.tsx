
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { createElement } from 'react';
import * as LucideIcons from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const StatsCard = ({ title, value, change, trend, icon }: StatsCardProps) => {
  const iconComponent = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, LucideIcon>)[
      iconName
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
    ];
    
    return Icon ? createElement(Icon) : null;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center">
          {iconComponent(icon)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center pt-1">
          <span 
            className={`text-xs font-medium mr-1 ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {change}
          </span>
          <span>
            {trend === 'up' ? (
              <ArrowUp className="h-3 w-3 text-green-600" />
            ) : (
              <ArrowDown className="h-3 w-3 text-red-600" />
            )}
          </span>
          <span className="text-xs text-slate-500 ml-1">vs last period</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
