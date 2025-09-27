import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { 
  LayoutDashboard, 
  MapPin, 
  Plane, 
  Calendar, 
  Users, 
  Calculator, 
  Building, 
  MessageSquare, 
  UserPlus, 
  Settings, 
  HelpCircle, 
  LogOut,
  Search,
  Bell,
  Plus,
  Share2,
  Edit3
} from "lucide-react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("trips");
  const [activeToggle, setActiveToggle] = useState("created");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "explore", label: "Explore Trips", icon: Plane },
    { id: "trips", label: "My Trips", icon: MapPin, active: true },
    { id: "calendar", label: "Calendar Sync", icon: Calendar },
    { id: "buddies", label: "Travel Buddies", icon: Users },
    { id: "budget", label: "Budget & Planner", icon: Calculator },
    { id: "stays", label: "Stay Options", icon: Building },
    { id: "groups", label: "Group & Forums", icon: MessageSquare },
    { id: "invite", label: "Invite Friends", icon: UserPlus },
    { id: "settings", label: "Account Settings", icon: Settings },
    { id: "help", label: "Help & Support", icon: HelpCircle },
  ];

  const internationalDestinations = [
    {
      id: 1,
      name: "Bali Gateway",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxiYWxpfGVufDB8fHx8MTc1ODk3MDQ2Nnww&ixlib=rb-4.1.0&q=85",
      dateRange: "12-03-2025 to 20-03-2025"
    },
    {
      id: 2,
      name: "Switzerland",
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzd2l0emVybGFuZHxlbnwwfHx8fDE3NTg5NzA0Njd8MA&ixlib=rb-4.1.0&q=85",
      dateRange: "05-04-2025 to 18-04-2025"
    },
    {
      id: 3,
      name: "Bali Rice Terraces",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxiYWxpfGVufDB8fHx8MTc1ODk3MDQ2Nnww&ixlib=rb-4.1.0&q=85",
      dateRange: "28-02-2025 to 08-03-2025"
    }
  ];

  const indianDestinations = [
    {
      id: 1,
      name: "Red Fort Heritage",
      image: "https://images.unsplash.com/photo-1705861144413-f02e38354648?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxyZWQlMjBmb3J0fGVufDB8fHx8MTc1ODk3MDQ2OHww&ixlib=rb-4.1.0&q=85",
      dateRange: "15-01-2025 to 17-01-2025"
    },
    {
      id: 2,
      name: "Varanasi Ghats",
      image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx2YXJhbmFzaXxlbnwwfHx8fDE3NTg5NzA0Njh8MA&ixlib=rb-4.1.0&q=85",
      dateRange: "22-02-2025 to 25-02-2025"
    },
    {
      id: 3,
      name: "Golden Temple",
      image: "https://images.unsplash.com/photo-1685790582503-1b2762d95407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxyZWQlMjBmb3J0fGVufDB8fHx8MTc1ODk3MDQ2OHww&ixlib=rb-4.1.0&q=85",
      dateRange: "10-03-2025 to 13-03-2025"
    }
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="user-info">
          <div className="user-avatar">
            <img 
              src={userProfile.avatar} 
              alt="User Avatar" 
            />
          </div>
          <div className="user-details">
            <div className="greeting">{userProfile.greeting}</div>
            <div className="user-role">{userProfile.role}</div>
          </div>
        </div>

        <div className="brand-section">
          <h1 className="brand-name">Sync & Explore</h1>
          <h2 className="page-title">Explore Trips</h2>
        </div>

        <div className="header-actions">
          <Button variant="ghost" size="icon" className="header-action-btn">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="header-action-btn">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon === "LayoutDashboard" ? LayoutDashboard :
                                 item.icon === "Plane" ? Plane :
                                 item.icon === "MapPin" ? MapPin :
                                 item.icon === "Calendar" ? Calendar :
                                 item.icon === "Users" ? Users :
                                 item.icon === "Calculator" ? Calculator :
                                 item.icon === "Building" ? Building :
                                 item.icon === "MessageSquare" ? MessageSquare :
                                 item.icon === "UserPlus" ? UserPlus :
                                 item.icon === "Settings" ? Settings : HelpCircle;
              
              return (
                <button
                  key={item.id}
                  className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <IconComponent className="sidebar-icon" />
                  <span className="sidebar-label">{item.label}</span>
                </button>
              );
            })}
            <button className="sidebar-item logout">
              <LogOut className="sidebar-icon" />
              <span className="sidebar-label">Log Out</span>
            </button>
          </nav>
        </aside>

        {/* Main Panel */}
        <main className="main-panel">
          {activeTab === "explore" && (
            <>
              {/* Filters */}
              <div className="filters">
                <Select>
                  <SelectTrigger className="filter-select">
                    <SelectValue placeholder="Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.interests.map(interest => (
                      <SelectItem key={interest.value} value={interest.value}>
                        {interest.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="filter-select">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.dates.map(date => (
                      <SelectItem key={date.value} value={date.value}>
                        {date.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="filter-select">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.locations.map(location => (
                      <SelectItem key={location.value} value={location.value}>
                        {location.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* International Destinations */}
              <section className="destinations-section">
                <div className="section-header">
                  <h3 className="section-title">International Popular Destinations</h3>
                  <Button variant="ghost" className="view-all-btn">View all</Button>
                </div>
                <div className="destinations-grid">
                  {internationalDestinations.map((destination, index) => (
                    <Card key={index} className="destination-card">
                      <CardContent className="destination-content">
                        <div className="destination-image">
                          <img src={destination.image} alt={destination.name} />
                        </div>
                        <div className="destination-info">
                          <h4 className="destination-name">{destination.name}</h4>
                          <Button className="book-btn">Book</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Indian Destinations */}
              <section className="destinations-section">
                <div className="section-header">
                  <h3 className="section-title">Popular Destinations in India</h3>
                  <Button variant="ghost" className="view-all-btn">View all</Button>
                </div>
                <div className="destinations-grid">
                  {indianDestinations.map((destination, index) => (
                    <Card key={index} className="destination-card">
                      <CardContent className="destination-content">
                        <div className="destination-image">
                          <img src={destination.image} alt={destination.name} />
                        </div>
                        <div className="destination-info">
                          <h4 className="destination-name">{destination.name}</h4>
                          <Button className="book-btn">Book</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab !== "explore" && (
            <div className="placeholder-content">
              <h3>{sidebarItems.find(item => item.id === activeTab)?.label}</h3>
              <p>This section is coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;