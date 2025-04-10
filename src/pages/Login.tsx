
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import { LogIn, CheckCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [demoButtonSuccess, setDemoButtonSuccess] = useState(false);
  
  const initialEmail = location.state?.email || '';
  const [loginForm, setLoginForm] = useState({
    email: initialEmail,
    password: '',
  });
  
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: initialEmail,
    password: '',
    confirmPassword: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just redirect to the dashboard
      toast({
        title: "Success!",
        description: "You have been logged in successfully.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    // Fill the input fields with demo credentials
    setLoginForm({
      email: 'demo@example.com',
      password: 'demo123',
    });
    
    // Set success state for the button
    setDemoButtonSuccess(true);
    
    try {
      setIsLoading(true);
      
      // Simulate login API call with a bit longer delay to see the animation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Demo Account",
        description: "Logged in with demo account successfully.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with the demo account.",
        variant: "destructive",
      });
      setDemoButtonSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset success state when form values change
  useEffect(() => {
    if (demoButtonSuccess) {
      setDemoButtonSuccess(false);
    }
  }, [loginForm]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      
      if (signupForm.password !== signupForm.confirmPassword) {
        throw new Error("Passwords don't match");
      }
      
      // Simulate signup API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just redirect to the dashboard
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      });
      
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an error creating your account.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Card className="w-full max-w-md">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                    required
                    className="transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    required
                    className="transition-all duration-300 ease-in-out"
                  />
                </div>
                <Button 
                  type="button" 
                  variant="outline"
                  className={`w-full flex items-center justify-center gap-2 transition-all duration-300 ease-in-out animate-fade-in ${
                    demoButtonSuccess 
                      ? "bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600" 
                      : "bg-black text-white hover:bg-gray-800 border-black"
                  }`}
                  onClick={handleDemoLogin}
                  disabled={isLoading}
                >
                  {demoButtonSuccess ? (
                    <CheckCircle size={16} />
                  ) : (
                    <LogIn size={16} />
                  )}
                  {demoButtonSuccess ? "Demo Credentials Applied" : "Use Demo Account"}
                </Button>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full bg-gray-600 hover:bg-gray-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
          
          <TabsContent value="signup">
            <form onSubmit={handleSignup}>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Enter your information to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-email" className="text-sm font-medium">Email</label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="name@example.com"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="signup-password" className="text-sm font-medium">Password</label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="w-full bg-gray-600 hover:bg-gray-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </AuthLayout>
  );
};

export default Login;
