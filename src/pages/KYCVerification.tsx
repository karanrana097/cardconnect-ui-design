
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const KYCVerification = () => {
  const [step, setStep] = useState<'documents' | 'selfie' | 'complete'>('documents');
  const [aadhaar, setAadhaar] = useState('');
  const [pan, setPan] = useState('');
  const navigate = useNavigate();

  const handleDocumentSubmit = () => {
    setStep('selfie');
  };

  const handleSelfieComplete = () => {
    setStep('complete');
  };

  const handleComplete = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold">KYC Verification</h1>
            <p className="text-sm text-gray-600">Secure your account with identity verification</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm text-gray-600">
              {step === 'documents' ? '1' : step === 'selfie' ? '2' : '3'}/3
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`bg-blue-600 h-2 rounded-full transition-all duration-300 ${
              step === 'documents' ? 'w-1/3' : step === 'selfie' ? 'w-2/3' : 'w-full'
            }`}></div>
          </div>
        </div>

        {step === 'documents' && (
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">📄</div>
              <CardTitle>Document Verification</CardTitle>
              <CardDescription>
                We need to verify your identity to ensure platform security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Why KYC is Required?</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Prevents fraud and ensures user safety</li>
                  <li>• Complies with financial regulations</li>
                  <li>• Builds trust in the CardConnect community</li>
                  <li>• Enables higher transaction limits</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="aadhaar">Aadhaar Number</Label>
                  <Input
                    id="aadhaar"
                    type="text"
                    placeholder="xxxx xxxx xxxx"
                    value={aadhaar}
                    onChange={(e) => setAadhaar(e.target.value)}
                    maxLength={12}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pan">PAN Number</Label>
                  <Input
                    id="pan"
                    type="text"
                    placeholder="XXXXX0000X"
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    maxLength={10}
                  />
                </div>
              </div>

              <Button 
                onClick={handleDocumentSubmit}
                disabled={aadhaar.length !== 12 || pan.length !== 10}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Verify Documents
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 'selfie' && (
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🤳</div>
              <CardTitle>Selfie Verification</CardTitle>
              <CardDescription>
                Take a clear selfie to complete your verification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Tips for a good selfie:</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Ensure good lighting</li>
                  <li>• Look directly at the camera</li>
                  <li>• Remove glasses if possible</li>
                  <li>• Keep your face clearly visible</li>
                </ul>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">📷</div>
                <p className="text-gray-600 mb-4">Click to capture your selfie</p>
                <Button variant="outline">
                  Open Camera
                </Button>
              </div>

              <Button 
                onClick={handleSelfieComplete}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Continue to Verification
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 'complete' && (
          <Card>
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <CardTitle>Verification Complete!</CardTitle>
              <CardDescription>
                Your documents are being reviewed by our team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <Badge className="bg-green-100 text-green-700 px-4 py-2">
                  KYC Under Review
                </Badge>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>What happens next?</strong><br />
                    • Our team will review your documents<br />
                    • You'll get notified within 24-48 hours<br />
                    • Once approved, you'll get the verified badge<br />
                    • Higher transaction limits will be enabled
                  </p>
                </div>
              </div>

              <Button 
                onClick={handleComplete}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Continue to Dashboard
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default KYCVerification;
