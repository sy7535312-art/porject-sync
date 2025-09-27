import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
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
  Bell
} from "lucide-react";
import { sidebarItems, internationalDestinations, indianDestinations, userProfile, filterOptions } from "../data/mock";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("explore");

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
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="sidebar-icon" />
                <span className="sidebar-label">{item.label}</span>
              </button>
            ))}
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
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="beach">Beach</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="filter-select">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thisMonth">This Month</SelectItem>
                    <SelectItem value="nextMonth">Next Month</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="filter-select">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domestic">Domestic</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                    <SelectItem value="any">Any</SelectItem>
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