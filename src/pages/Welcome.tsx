
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Save Money on Your Purchases",
      subtitle: "Get exclusive discounts on products using verified cardholders' offers",
      image: "📱",
      description: "Buy your dream iPhone at discounted prices through CardConnect's network of verified cardholders"
    },
    {
      title: "Earn Commission as a Cardholder",
      subtitle: "Share your credit card benefits and earn money",
      image: "💳",
      description: "Turn your unused credit card offers into steady income by helping others save money"
    },
    {
      title: "Secure & KYC Verified",
      subtitle: "Trade with confidence on our secure platform",
      image: "🔒",
      description: "All users are KYC verified with Aadhaar and PAN for maximum security and trust"
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-blue-600">CardConnect</div>
        <Button variant="ghost" onClick={handleSkip} className="text-gray-500">
          Skip
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-8xl mb-8">{slides[currentSlide].image}</div>
        
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-lg text-blue-600 text-center mb-6">
          {slides[currentSlide].subtitle}
        </p>
        
        <p className="text-gray-600 text-center mb-12 px-4">
          {slides[currentSlide].description}
        </p>

        {/* Dots Indicator */}
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="p-6">
        <Button 
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
