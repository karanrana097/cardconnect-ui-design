
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  const userStats = {
    name: "Rajesh Kumar",
    rating: 4.8,
    completedOrders: 156,
    totalSaved: "₹45,670",
    joinedDate: "March 2023",
    verified: true,
    trustScore: 95
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
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                👤
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h2 className="text-2xl font-bold">{userStats.name}</h2>
                  {userStats.verified && (
                    <Badge className="bg-green-100 text-green-700">✓ Verified</Badge>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>⭐ {userStats.rating}</span>
                  <span>{userStats.completedOrders} orders</span>
                  <span>Since {userStats.joinedDate}</span>
                </div>
                <div className="mt-2">
                  <Badge className="bg-blue-100 text-blue-700">
                    Trust Score: {userStats.trustScore}%
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{userStats.totalSaved}</p>
              <p className="text-sm text-gray-600">Total Saved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">{userStats.completedOrders}</p>
              <p className="text-sm text-gray-600">Orders Completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <span className="mr-3">👤</span>
                <span>Edit Profile</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <span className="mr-3">🔒</span>
                <span>Security Settings</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <span className="mr-3">📱</span>
                <span>Notification Settings</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <span className="mr-3">❓</span>
                <span>Help & Support</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start p-4 h-auto">
                <span className="mr-3">📋</span>
                <span>Terms & Privacy</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Button 
          variant="outline" 
          className="w-full text-red-600 border-red-200 hover:bg-red-50"
          onClick={() => navigate("/")}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
