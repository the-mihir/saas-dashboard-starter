
import { useState, useEffect } from 'react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BarChart, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut, 
  FileText,
  MessageSquare,
  Bell,
  User
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  
  // Simulate checking auth state
  useEffect(() => {
    // In a real app, check if the user is authenticated
    // For demo purposes, we'll just set mounted to true
    setMounted(true);
  }, []);

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarInitials: 'JD',
  };
  
  const menuItems = [
    { name: 'Dashboard', Icon: Home, path: '/dashboard' },
    { name: 'Analytics', Icon: BarChart, path: '/analytics' },
    { name: 'Customers', Icon: Users, path: '/customers' },
    { name: 'Documents', Icon: FileText, path: '/documents' },
    { name: 'Settings', Icon: Settings, path: '/settings' },
    { name: 'Help & Support', Icon: HelpCircle, path: '/support' },
  ];
  
  const handleLogout = () => {
    // In a real app, implement proper logout
    navigate('/');
  };
  
  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="pt-6 px-6 border-b border-slate-200">
            <a href="/" className="flex items-center gap-2">
            <img src="https://placehold.co/400" alt="logo" className="w-10 h-10 rounded-full border border-slate-200" />
              <span className="text-2xl font-bold text-sidebar-primary ">Dev Kit</span>
            </a>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <a href={item.path}>
                          <item.Icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="p-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full flex items-center justify-start px-2 gap-3"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user.avatarInitials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-slate-500">{user.email}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="/account" className="flex cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Account</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/settings" className="flex cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white">
            <div className="flex items-center">
              <SidebarTrigger />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto bg-slate-50 p-6">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
