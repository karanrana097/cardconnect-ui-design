
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const BiometricSetup = () => {
  const [step, setStep] = useState<'biometric' | 'mpin'>('biometric');
  const [mpin, setMpin] = useState('');
  const navigate = useNavigate();

  const handleBiometricSetup = () => {
    setStep('mpin');
  };

  const handleSkipBiometric = () => {
    setStep('mpin');
  };

  const handleMpinComplete = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        {step === 'biometric' ? (
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🔐</div>
              <CardTitle>Setup Biometric Lock</CardTitle>
              <CardDescription>
                Secure your account with fingerprint or face recognition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Why biometric?</strong><br />
                  • Quick and secure access<br />
                  • No need to remember passwords<br />
                  • Enhanced account protection
                </p>
              </div>
              
              <Button onClick={handleBiometricSetup} className="w-full bg-blue-600 hover:bg-blue-700">
                Enable Biometric Lock
              </Button>
              
              <Button onClick={handleSkipBiometric} variant="outline" className="w-full">
                Skip for Now
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🔢</div>
              <CardTitle>Create Your MPIN</CardTitle>
              <CardDescription>
                Set up a 4-digit MPIN for secure transactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mpin">Enter 4-digit MPIN</Label>
                <Input
                  id="mpin"
                  type="password"
                  maxLength={4}
                  value={mpin}
                  onChange={(e) => setMpin(e.target.value)}
                  placeholder="••••"
                  className="text-center text-2xl tracking-widest"
                />
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Remember:</strong><br />
                  • Keep your MPIN confidential<br />
                  • Required for all transactions<br />
                  • Can be changed anytime in settings
                </p>
              </div>
              
              <Button 
                onClick={handleMpinComplete} 
                disabled={mpin.length !== 4}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Complete Setup
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BiometricSetup;
