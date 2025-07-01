
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState<'buyer' | 'cardholder'>('buyer');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login process
    navigate("/biometric-setup");
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    navigate("/biometric-setup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">CardConnect</h1>
          <p className="text-gray-600">Your trusted payment companion</p>
        </div>

        {/* Role Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">I want to join as:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant={role === 'buyer' ? 'default' : 'outline'}
                onClick={() => setRole('buyer')}
                className="h-20 flex flex-col"
              >
                <span className="text-2xl mb-1">🛒</span>
                <span>Buyer</span>
              </Button>
              <Button
                variant={role === 'cardholder' ? 'default' : 'outline'}
                onClick={() => setRole('cardholder')}
                className="h-20 flex flex-col"
              >
                <span className="text-2xl mb-1">💳</span>
                <span>Cardholder</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Login Options */}
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to continue your journey</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="google" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>
              
              <TabsContent value="google" className="space-y-4">
                <Button onClick={handleGoogleLogin} className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <span className="mr-2">🔍</span>
                  Continue with Google
                </Button>
              </TabsContent>
              
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700">
                  Sign In
                </Button>
              </TabsContent>
              
              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <Button onClick={handleLogin} className="w-full bg-green-600 hover:bg-green-700">
                  Send OTP
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Button variant="link" className="p-0 text-blue-600">
                  Sign up
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
