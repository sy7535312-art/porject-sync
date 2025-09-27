// Mock data for Sync & Explore Travel App
// This file contains all mock data used throughout the application
// Will be replaced with real API calls during backend integration

export const testimonials = [
  {
    id: 1,
    name: "Taylor",
    review: "Our experience with Sync & Explore has been exceptional. The platform's ability to seamlessly match travel buddies and plan AI-powered itineraries made trip planning effortless. This smart and dependable tool has added great value to our travel journey, making exploration more exciting and stress-free.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah",
    review: "Amazing platform! I found the perfect travel companion for my Europe trip. The AI recommendations were spot-on and helped us discover hidden gems we never would have found otherwise. Highly recommend this to any solo traveler looking for adventure.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Michael", 
    review: "Sync & Explore revolutionized how I plan my trips. The ability to sync schedules with other travelers and get personalized recommendations based on our shared interests made our group trip to Japan absolutely incredible. Five stars!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  }
];

export const internationalDestinations = [
  {
    id: 1,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxiYWxpfGVufDB8fHx8MTc1ODk3MDQ2Nnww&ixlib=rb-4.1.0&q=85",
    country: "Indonesia",
    type: "Beach & Culture",
    price: "$899",
    duration: "7 days"
  },
  {
    id: 2,
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzd2l0emVybGFuZHxlbnwwfHx8fDE3NTg5NzA0Njd8MA&ixlib=rb-4.1.0&q=85",
    country: "Switzerland",
    type: "Mountains & Adventure",
    price: "$1299",
    duration: "10 days"
  },
  {
    id: 3,
    name: "Bali Rice Terraces",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxiYWxpfGVufDB8fHx8MTc1ODk3MDQ2Nnww&ixlib=rb-4.1.0&q=85",
    country: "Indonesia",
    type: "Cultural & Nature",
    price: "$799",
    duration: "5 days"
  }
];

export const indianDestinations = [
  {
    id: 1,
    name: "Red Fort",
    image: "https://images.unsplash.com/photo-1705861144413-f02e38354648?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxyZWQlMjBmb3J0fGVufDB8fHx8MTc1ODk3MDQ2OHww&ixlib=rb-4.1.0&q=85",
    city: "Delhi",
    state: "Delhi",
    type: "Historical & Architecture",
    price: "₹199",
    duration: "1 day"
  },
  {
    id: 2,
    name: "Banaras Ghats",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx2YXJhbmFzaXxlbnwwfHx8fDE3NTg5NzA0Njh8MA&ixlib=rb-4.1.0&q=85",
    city: "Varanasi",
    state: "Uttar Pradesh",
    type: "Spiritual & Cultural",
    price: "₹299",
    duration: "2 days"
  },
  {
    id: 3,
    name: "Red Fort Complex",
    image: "https://images.unsplash.com/photo-1685790582503-1b2762d95407?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxyZWQlMjBmb3J0fGVufDB8fHx8MTc1ODk3MDQ2OHww&ixlib=rb-4.1.0&q=85",
    city: "Delhi",
    state: "Delhi", 
    type: "Historical & Architecture",
    price: "₹199",
    duration: "1 day"
  }
];

export const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { id: "explore", label: "Explore Trips", icon: "Plane", active: true },
  { id: "trips", label: "My Trips", icon: "MapPin" },
  { id: "calendar", label: "Calendar Sync", icon: "Calendar" },
  { id: "buddies", label: "Travel Buddies", icon: "Users" },
  { id: "budget", label: "Budget & Planner", icon: "Calculator" },
  { id: "stays", label: "Stay Options", icon: "Building" },
  { id: "groups", label: "Group & forums", icon: "MessageSquare" },
  { id: "invite", label: "Invite friends", icon: "UserPlus" },
  { id: "settings", label: "Account settings", icon: "Settings" },
  { id: "help", label: "Help & Support", icon: "HelpCircle" }
];

export const userProfile = {
  name: "Sam-yuk",
  role: "Traveller",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=50&h=50&fit=crop&crop=face",
  greeting: "Hi, Sam-yuk"
};

// Filter options for dashboard
export const filterOptions = {
  interests: [
    { value: "adventure", label: "Adventure" },
    { value: "cultural", label: "Cultural" },
    { value: "beach", label: "Beach" },
    { value: "mountains", label: "Mountains" },
    { value: "historical", label: "Historical" },
    { value: "spiritual", label: "Spiritual" }
  ],
  dates: [
    { value: "thisMonth", label: "This Month" },
    { value: "nextMonth", label: "Next Month" },
    { value: "next3Months", label: "Next 3 Months" },
    { value: "custom", label: "Custom" }
  ],
  locations: [
    { value: "domestic", label: "Domestic" },
    { value: "international", label: "International" },
    { value: "nearby", label: "Nearby" },
    { value: "any", label: "Any" }
  ]
};

// Features data for landing page
export const features = [
  {
    id: 1,
    title: "Sync Travel Dates",
    description: "Coordinate schedules with travel buddies seamlessly",
    icon: "CalendarDays"
  },
  {
    id: 2,
    title: "Explore Destinations", 
    description: "Discover amazing places with AI-powered recommendations",
    icon: "Globe"
  },
  {
    id: 3,
    title: "Find Travel Buddies",
    description: "Connect with like-minded travelers for shared adventures", 
    icon: "Users"
  },
  {
    id: 4,
    title: "Affordable Stays",
    description: "Find budget-friendly accommodations everywhere",
    icon: "Home"
  }
];

// Hero section images
export const heroImages = {
  topImage: "https://images.unsplash.com/photo-1603979649806-5299879db16b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2V8ZW58MHx8fHwxNzU4OTcwNDY2fDA&ixlib=rb-4.1.0&q=85",
  bottomImage: "https://images.unsplash.com/photo-1658434061692-c763f2b6be8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNvYXN0fGVufDB8fHx8MTc1ODk3MDQ3MXww&ixlib=rb-4.1.0&q=85"
};

// API endpoints - will be used for backend integration
export const API_ENDPOINTS = {
  testimonials: '/api/testimonials',
  destinations: '/api/destinations', 
  userProfile: '/api/user/profile',
  waitlist: '/api/waitlist',
  bookDestination: '/api/destinations/book',
  filters: '/api/filters'
};

// Mock API functions (to be replaced with real API calls)
export const mockAPI = {
  getTestimonials: () => Promise.resolve(testimonials),
  getInternationalDestinations: () => Promise.resolve(internationalDestinations),
  getIndianDestinations: () => Promise.resolve(indianDestinations),
  getUserProfile: () => Promise.resolve(userProfile),
  submitWaitlist: (data) => Promise.resolve({ success: true, message: 'Added to waitlist successfully' }),
  bookDestination: (destinationId) => Promise.resolve({ success: true, bookingId: `BK${Date.now()}` })
};