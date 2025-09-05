import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Phone, MapPin, Mail, Search, MessageSquare, Trash, Factory, Flame, Sparkles, Dribbble, ArrowRight, Menu, Globe, Wrench, Users, Shapes, List, Package, Landmark, CarFront, Tag, LayoutDashboard, Compass, Rocket, Award, Info, Handshake, Fuel, Gauge, Weight, Rss, Instagram, Facebook, Youtube, X, Calendar, Megaphone, Newspaper, Lightbulb, Map, User, Key, Building, Package2, LogIn, UserPlus, Cog, Headset, CircleDollarSign } from 'lucide-react';

// Recreating shadcn/ui components with a new design system
const Card = ({ className, children, ...props }) => (
  <div className={`relative overflow-hidden rounded-xl border-2 border-red-900 bg-gray-900/50 text-gray-200 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:hover:border-red-600 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({ className, children, onClick, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:pointer-events-none disabled:opacity-50 h-10 px-6 py-2 shadow-lg ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

const dealersData = {
  usa: [
    { name: 'Hillbank Motor Corp West', address: '1 Whatney\nIrvine, CA 92618', phone: '949-900-1960', website: 'www.HillbankUSA.com' },
    { name: 'Hillbank Motor Corp East', address: '1865 Dogwood Dr\nConyers, GA 30013', phone: '770-922-2624', website: 'www.HillbankUSA.com' },
    { name: 'Motorcars of Georgia', address: '7700 Nesbit Ferry Rd\nSandy Springs, GA 30350', phone: '404-984-6014', website: 'www.MotorcarsofGA.com' },
    { name: 'Holman Motorcars', address: '1440 W Sunrise Blvd\nFort Lauderdale, FL 33111', phone: '954-723-6903', website: 'www.HolmanMotorcars.com' },
    { name: 'The Exotic Car Store', address: '3200 S University Dr\nDavie, FL 33328', phone: '954-474-3200', website: 'www.TheExoticCarStore.com' },
    { name: 'Fantasy Motorcars', address: '3949 W New York St\nIndianapolis, IN 46214', phone: '317-507-8898', website: 'www.FantasyMotorcars.com' },
    { name: 'Bauer Performance', address: '2255 N Green Bay Rd\nGurnee, IL 60031', phone: '847-623-2886', website: 'www.BauerPerformance.com' },
    { name: 'The Mitty', address: '18501 S Dixie Hwy\nCutler Bay, FL 33157', phone: '305-613-7227', website: 'www.TheMitty.com' },
    { name: 'The Stig of Tampa', address: '3650 W Kennedy Blvd\nTampa, FL 33609', phone: '813-870-8700', website: 'www.thestigoftampa.com' },
    { name: 'Legendary Motorcar Co.', address: '1480 Industrial Way\nBoulder City, NV 89005', phone: '702-293-1000', website: 'www.legendarymotorcarco.com' },
    { name: 'Vanguard Motor Sales', address: '12015 W. Main St.\nPlymouth, MI 48170', phone: '734-453-6100', website: 'www.vanguardmotorsales.com' },
    { name: 'The Stig of Detroit', address: '22822 W. 8 Mile Rd.\nDetroit, MI 48219', phone: '248-262-6200', website: 'www.thestigofdetroit.com' },
    { name: 'Superformance of Dallas', address: '1333 W. Mockingbird Ln\nDallas, TX 75247', phone: '972-218-0242', website: 'www.superformanceofdallas.com' },
    { name: 'The Stig of Nashville', address: '1901 N. Jackson St.\nNashville, TN 37213', phone: '615-538-8255', website: 'www.thestigofnashville.com' },
  ],
  international: [
    { name: 'Superformance UK', address: 'Unit 3, Sycamore Park, Bristol Rd\nPortishead, North Somerset BS20 6ED, UK', phone: '+44 1275 848 888', website: 'www.superformanceuk.com' },
    { name: 'Superformance Europe', address: 'Avenida da Liberdade\n1500-015 Lisboa, Portugal', phone: '+351 21 893 2222', website: 'www.superformance.eu' },
    { name: 'Superformance Australia', address: '123 Test St\nSydney, NSW 2000, Australia', phone: '+61 2 9123 4567', website: 'www.superformance.com.au' },
  ],
};

const vehicles = [
  {
    name: "Cinema Series",
    year: "2023",
    engine: "Custom V8",
    type: "Roadster",
    image: "https://i.ibb.co/d8t5YKp/thumbnail-cinema.webp",
    features: [
      { icon: Flame, text: "Authentic design & performance" },
      { icon: Gauge, text: "High-performance engines" },
      { icon: Wrench, text: "Durable & race-ready chassis" },
    ],
    details: "The Cinema Series is a special edition vehicle, built to replicate the iconic cars seen on the big screen. It combines classic styling with modern engineering and reliability, offering a unique and exhilarating driving experience that is as true to the original as possible."
  },
  {
    name: "MkIII",
    year: "1965",
    engine: "427 S/C",
    type: "Roadster",
    image: "https://i.ibb.co/3yK3ZYLP/thumbnail-mkii.webp",
    features: [
      { icon: Rocket, text: "Modern, aggressive styling" },
      { icon: Sparkles, text: "Advanced aerodynamics" },
      { icon: Package, text: "Customizable options" },
    ],
    details: "The Superformance MkIII is a replica of the legendary 1965 Shelby Cobra. It combines the classic styling of the original with modern engineering and reliability. Each vehicle is built to the highest standards, offering an exhilarating driving experience that is as true to the original as possible. With a meticulously crafted chassis and a wide range of engine options, the MkIII is a timeless tribute to a racing icon."
  },
  {
    name: "MkII",
    year: "1963",
    engine: "289",
    type: "Roadster",
    image: "https://i.ibb.co/3yK3ZYLP/thumbnail-mkii.webp",
    features: [
      { icon: Landmark, text: "Classic 'MkII' styling" },
      { icon: Users, text: "Vintage racing heritage" },
      { icon: List, text: "Lightweight & nimble" },
    ],
    details: "The MkII is a faithful recreation of the 1963 Shelby 289 street car, capturing the elegance and simplicity of the early roadsters. It is a purist's dream, offering a lightweight and responsive platform for spirited driving. Every detail, from the body shape to the interior, has been meticulously researched to ensure historical accuracy."
  },
  {
    name: "Daytona Coupe",
    year: "1965",
    engine: "427 S/C",
    type: "Coupe",
    image: "https://i.ibb.co/pB7bbBcH/thumbnail-coupe.webp",
    features: [
      { icon: Award, text: "Le Mans winning heritage" },
      { icon: Shapes, text: "Iconic body lines" },
      { icon: Gauge, text: "High-revving V8 power" },
    ],
    details: "The Daytona Coupe is a legendary vehicle with a rich racing history. Superformance's recreation is a faithful tribute to this classic, with its stunning aerodynamic design and powerful performance. It is a car that is as beautiful to look at as it is thrilling to drive."
  },
  {
    name: "GT40",
    year: "1966",
    engine: "Ford 289/302",
    type: "Coupe",
    image: "https://i.ibb.co/Y4XWWY4t/nav-gt40-toolroom.webp",
    features: [
      { icon: Award, text: "Le Mans winning heritage" },
      { icon: Shapes, text: "Iconic body lines" },
      { icon: Gauge, text: "High-revving V8 power" },
    ],
    details: "The Superformance GT40 MkI is a licensed replica of the legendary car that won the 24 Hours of Le Mans. With its classic lines and a mid-engine V8, it is a true piece of automotive history. This vehicle offers the chance to own a piece of a racing legacy, combining thrilling performance with a stunning design."
  },
  {
    name: "Corvette",
    year: "1963",
    engine: "327 V8",
    type: "Roadster",
    image: "https://i.ibb.co/TDnBDySF/thumbnail-corvette.webp",
    features: [
      { icon: Handshake, text: "Authentic components" },
      { icon: CarFront, text: "Classic American muscle" },
      { icon: Rocket, text: "Powerful and reliable" },
    ],
    details: "The Superformance Corvette Grand Sport is a stunning recreation of a rare and highly sought-after racing vehicle. It is built to be a true performance machine, capturing the essence of the original with its powerful engine and aggressive stance. This car is for the serious enthusiast who wants to own a piece of racing history."
  },
  {
    name: "Shelby",
    year: "1965",
    engine: "427 S/C",
    type: "Roadster",
    image: "https://i.ibb.co/hJFrjxw6/thumbnail-shelby-cobra-csx.webp",
    features: [
      { icon: Tag, text: "Special edition model" },
      { icon: Flame, text: "Enhanced performance features" },
      { icon: Wrench, text: "Unique styling cues" },
    ],
    details: "The Superformance Shelby is a special edition of the MkIII, offering a unique blend of styling and performance. It features a range of enhancements and custom details that set it apart from the standard model. This vehicle is for the collector who wants something truly special."
  },
  {
    name: "MkIII-E",
    year: "2023",
    engine: "Electric Motor",
    type: "Roadster",
    image: "https://i.ibb.co/7NtKM4nK/02-large.webp",
    features: [
      { icon: Fuel, text: "Zero emissions" },
      { icon: Gauge, text: "Instant torque" },
      { icon: Sparkles, text: "Modern electric power" },
    ],
    details: "The MkIII-E represents the future of Superformance, combining the classic MkIII design with a modern electric powertrain. It offers an exhilarating driving experience with instant torque and silent acceleration. This vehicle is a perfect blend of heritage and innovation, for those who want to experience classic car motoring in a whole new way."
  },
];

const teamMembers = [
  { name: "Lance Stander", title: "CEO", bio: "With over 30 years of experience, Lance is a driving force behind Superformance's success.", image: "https://placehold.co/150x150/222/FFF?text=Lance" },
  { name: "Amy", title: "Sales Director", bio: "Amy has a passion for cars and a deep knowledge of the entire Superformance lineup.", image: "https://placehold.co/150x150/222/FFF?text=Amy" },
  { name: "John", title: "Chief Engineer", bio: "John is the engineering genius behind the performance and reliability of our vehicles.", image: "https://placehold.co/150x150/222/FFF?text=John" },
  { name: "Sarah", title: "Marketing Lead", bio: "Sarah manages our brand presence and connects with enthusiasts around the world.", image: "https://placehold.co/150x150/222/FFF?text=Sarah" },
];

const newRecreations = [
  { name: "Cinema Series", image: "https://i.ibb.co/d8t5YKp/thumbnail-cinema.webp" },
  { name: "MkIII", image: "https://i.ibb.co/1Jz6J6Vg/thumbnail-mkiii.webp" },
  { name: "MkII", image: "https://i.ibb.co/3yK3ZYLP/thumbnail-mkii.webp" },
  { name: "Daytona Coupe", image: "https://i.ibb.co/pB7bbBcH/thumbnail-coupe.webp" },
  { name: "GT40", image: "https://i.ibb.co/Y4XWWY4t/nav-gt40-toolroom.webp" },
  { name: "Corvette", image: "https://i.ibb.co/TDnBDySF/thumbnail-corvette.webp" },
  { name: "Shelby", image: "https://i.ibb.co/hJFrjxw6/thumbnail-shelby-cobra-csx.webp" },
  { name: "MkIII-E", image: "https://i.ibb.co/7NtKM4nK/02-large.webp" },
];

const services = [
  { name: "Maintenance & Service", icon: Wrench, description: "Expert maintenance and service to keep your vehicle in peak condition." },
  { name: "Customization", icon: Cog, description: "A wide range of custom options to make your car a unique masterpiece." },
  { name: "Parts & Accessories", icon: Package2, description: "Genuine Superformance parts and accessories to maintain authenticity." },
  { name: "Community Events", icon: Users, description: "Exclusive events and gatherings for the Superformance community." },
  { name: "Global Dealerships", icon: MapPin, description: "Find a certified Superformance dealer near you to start your journey." },
  { name: "Concierge Services", icon: Headset, description: "From build-to-order to delivery, we offer a seamless and personalized experience." },
];

const inventory = [
  {
    id: 1,
    name: "MkIII",
    year: "1965",
    engine: "427 S/C",
    type: "Roadster",
    price: "$120,000",
    description: "Stunning MkIII in classic Guardsman Blue with white racing stripes. Only 5,000 miles since new. Fully documented history.",
    image: "https://i.ibb.co/6P0J9yB/mkiii-inventory.jpg",
    features: [
      { icon: Flame, text: "Authentic design" },
      { icon: Gauge, text: "High-performance engine" },
      { icon: Wrench, text: "Race-ready chassis" },
    ],
    details: "A beautiful and well-maintained MkIII ready for the open road. This car has a classic look with modern reliability. Perfect for the enthusiast."
  },
  {
    id: 2,
    name: "GT40",
    year: "1966",
    engine: "302 V8",
    type: "Coupe",
    price: "$225,000",
    description: "This GT40 is a true masterpiece. Finished in Le Mans Red, it features a powerful Ford 302 engine and is ready for the track or the street.",
    image: "https://i.ibb.co/3k5fB9p/gt40-inventory.jpg",
    features: [
      { icon: Award, text: "Le Mans winning heritage" },
      { icon: Shapes, text: "Iconic body lines" },
      { icon: Gauge, text: "High-revving V8 power" },
    ],
    details: "This GT40 is a true masterpiece. Finished in Le Mans Red, it features a powerful Ford 302 engine and is ready for the track or the street."
  },
  {
    id: 3,
    name: "Daytona Coupe",
    year: "1965",
    engine: "427 S/C",
    type: "Coupe",
    price: "$195,000",
    description: "A rare and beautiful Daytona Coupe, finished in metallic silver. A head-turning car with incredible performance and a rich history.",
    image: "https://i.ibb.co/GnH8vV5/daytona-inventory.jpg",
    features: [
      { icon: Rocket, text: "Aerodynamic design" },
      { icon: Package, text: "Customizable options" },
      { icon: Sparkles, text: "Show car quality finish" },
    ],
    details: "A rare and beautiful Daytona Coupe, finished in metallic silver. A head-turning car with incredible performance and a rich history."
  },
  {
    id: 4,
    name: "MkII",
    year: "1963",
    engine: "289 V8",
    type: "Roadster",
    price: "$110,000",
    description: "A faithful recreation of the original 289 street car. This MkII is lightweight, nimble, and perfect for spirited driving. A must-see for purists.",
    image: "https://i.ibb.co/rQ1Yf92/mkii-inventory.jpg",
    features: [
      { icon: Handshake, text: "FIA-sanctioned chassis" },
      { icon: CarFront, text: "Authentic components" },
      { icon: Fuel, text: "Efficient fuel cell" },
    ],
    details: "A faithful recreation of the original 289 street car. This MkII is lightweight, nimble, and perfect for spirited driving. A must-see for purists."
  },
];

const partsCategories = [
  "Accessories & Apparel",
  "Battery, Coil, Ignition Related",
  "Body Shell & GRP Panels",
  "Body Trim, Bolt-On Parts ect",
  "Brakes, Pedal Box & Related",
  "Carpet, Soft Trim, Seats etc",
  "Chassis & Scuttle Assembly",
  "Cooling System & Related",
  "Engine Mountings, Oil Cooler ect",
  "Fuel, Accelerator, Exhaust ect",
  "Gearbox, Clutch Related",
  "Heater System & Related",
  "Lighting & Related",
  "Loom Assembly, Fuse Box ect",
  "Rear Axle, Differential, Related",
  "Suspension, Shocks, Steering",
  "Switches, Gauges & Indicators",
  "Toys & Collectibles",
  "Wheels, Bearings & Related",
  "Wiper Washers & Related"
];

function App() {
  const [page, setPage] = useState('home');
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);
  const [activeDealerCountry, setActiveDealerCountry] = useState('usa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // This effect ensures the device UI is styled for dark mode
    document.body.style.backgroundColor = 'black';
    const meta = document.createElement('meta');
    meta.name = 'color-scheme';
    meta.content = 'dark';
    document.head.appendChild(meta);
  }, []);

  // Function to handle page change and scroll to top
  const handleSetPage = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu on page change
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                <source src="https://superformance.com/images/hero-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/80 [background-image:linear-gradient(to_bottom_right,rgba(127,29,29,0.7),transparent,black)]"></div>
              <div className="relative z-20 text-center space-y-6 max-w-5xl px-4 mt-[-5rem] sm:mt-[-8rem]">
                <div className="relative w-64 mx-auto mb-8 -translate-y-8">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="text-gray-400" size={20} />
                  </div>
                  <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800/80 text-white placeholder-gray-400 border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-xs sm:text-base md:text-lg font-light text-gray-400 font-sans tracking-widest uppercase drop-shadow-lg"
                >
                  Since 1996
                </motion.p>
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src="https://i.ibb.co/JjCPg6jX/white-superformance.png" 
                  alt="Superformance Logo" 
                  className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 drop-shadow-lg"
                />
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl sm:text-6xl md:text-7xl font-black font-sans uppercase tracking-widest text-white drop-shadow-lg mt-0"
                >
                  Superformance
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-lg sm:text-xl md:text-2xl font-light text-gray-300"
                >
                  Authentic recreations of iconic cars
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="space-y-8"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white mt-8 px-10 py-5 text-lg" onClick={() => handleSetPage('models')}>
                    Explore Models <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Phone size={16} className="text-red-500"/>
                      <a href="tel:+18002976253" className="hover:text-red-400 transition-colors">+1 800 297 6253</a>
                    </span>
                    <span className="hidden sm:inline-block text-gray-600">|</span>
                    <span className="flex items-center gap-2">
                      <Mail size={16} className="text-red-500"/>
                      <a href="mailto:info@superformance.com" className="hover:text-red-400 transition-colors">info@superformance.com</a>
                    </span>
                    <span className="hidden sm:inline-block text-gray-600">|</span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-red-500"/>
                      <span>14924 Corporate Rd S Ste 39, Jupiter, FL</span>
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Featured Video Section */}
            <div className="bg-black/80 text-gray-200 py-12 px-4 sm:px-6 md:px-12">
              <div className="max-w-7xl mx-auto space-y-8">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/I0s940A2BGU?autoplay=1&mute=1&playlist=I0s940A2BGU&loop=1" 
                      title="Superformance Video" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                </div>
              </div>
            </div>

            {/* Our Recreations Section */}
            <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
              <div className="max-w-7xl mx-auto text-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Factory Models</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {newRecreations.map((car, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                      onClick={() => {
                        const selectedVehicle = vehicles.find(v => v.name === car.name);
                        if (selectedVehicle) {
                          setActiveVehicle(selectedVehicle);
                          handleSetPage('vehicle-detail');
                        }
                      }}
                    >
                      <img src={car.image} alt={car.name} className="w-full h-32 sm:h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                        <div className="flex justify-between items-center w-full">
                          <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">{car.name}</h3>
                          <div className="bg-red-600 text-white rounded-full p-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                            <ArrowRight size={20} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Services Section */}
            <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
              <div className="max-w-7xl mx-auto space-y-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="flex flex-col items-center text-center p-8">
                        <div className="p-4 rounded-full bg-red-600/20 text-red-600 mb-6">
                          <service.icon size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white">Our Heritage</h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Since 1996, Superformance has been the world leader in building authentic, officially-licensed recreations of classic cars. We are dedicated to building vehicles of the highest quality, with attention to detail and a passion for automotive history. Our mission is to provide enthusiasts with the opportunity to own a piece of history that is not only beautiful, but also performs at the highest level.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    The provided image is a placeholder and should not be considered an actual photograph of a Superformance car. It is included for design purposes only.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 mt-6 mx-auto md:mx-0" onClick={() => handleSetPage('about')}>Learn More <ArrowRight className="ml-2" size={20} /></Button>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
                >
                  <img src="https://i.ibb.co/VW3rdLxz/corvette-daytona-cobra-1.webp" alt="Superformance car" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </motion.div>
              </div>
            </div>
          </>
        );

      case 'models':
        return (
          <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600">Our Vehicle Lineup</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {vehicles.map((vehicle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
                  >
                    <Card className="p-0">
                      <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover object-center" />
                      <div className="p-6 text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                        <p className="text-sm text-gray-400 mb-4">{vehicle.year} {vehicle.type}</p>
                        <ul className="space-y-2 mb-4 text-gray-400">
                          {vehicle.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <feature.icon size={18} className="text-red-600 flex-shrink-0" /> {feature.text}
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-red-600 hover:bg-red-700 text-white w-full" onClick={() => { setActiveVehicle(vehicle); handleSetPage('vehicle-detail'); }}>
                          View Details <ArrowRight className="ml-2" size={20} />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'inventory':
        return (
          <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600">Current Inventory</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {inventory.map((vehicle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]"
                  >
                    <Card className="p-0">
                      <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover object-center" />
                      <div className="p-6 text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                        <p className="text-sm text-gray-400 mb-4">{vehicle.year} {vehicle.type}</p>
                        <ul className="space-y-2 mb-4 text-gray-400">
                          {vehicle.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <feature.icon size={18} className="text-red-600 flex-shrink-0" /> {feature.text}
                            </li>
                          ))}
                        </ul>
                        <Button className="bg-red-600 hover:bg-red-700 text-white w-full" onClick={() => { setActiveVehicle(vehicle); handleSetPage('vehicle-detail'); }}>
                          View Details <ArrowRight className="ml-2" size={20} />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'vehicle-detail':
        return (
          <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold text-red-600">{activeVehicle.name}</h1>
                  <p className="text-xl text-gray-400">{activeVehicle.year} {activeVehicle.type}</p>
                  <p className="text-lg leading-relaxed text-gray-300">{activeVehicle.details}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Card>
                      <CardContent>
                        <h4 className="text-sm text-gray-400 mb-1">Engine</h4>
                        <p className="text-lg font-bold text-white">{activeVehicle.engine}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent>
                        <h4 className="text-sm text-gray-400 mb-1">Type</h4>
                        <p className="text-lg font-bold text-white">{activeVehicle.type}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full mt-6" onClick={() => handleSetPage('dealers')}>Find a Dealer</Button>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <img src={activeVehicle.image} alt={activeVehicle.name} className="w-full h-full object-cover object-center" />
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'parts':
        return (
          <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center">Parts & Accessories</h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {partsCategories.map((category, index) => (
                  <Card key={index} className="flex items-center p-6 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800">
                    <Package size={24} className="text-red-500 mr-4 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white">{category}</h3>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        );

      case 'dealers':
        return (
          <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-12">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center">Find a Dealer</h1>
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={() => setActiveDealerCountry('usa')} 
                  className={`px-8 ${activeDealerCountry === 'usa' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  USA Dealers
                </Button>
                <Button 
                  onClick={() => setActiveDealerCountry('international')} 
                  className={`px-8 ${activeDealerCountry === 'international' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  International
                </Button>
              </div>
              <div className="w-full rounded-xl overflow-hidden shadow-2xl mt-8">
                  <iframe 
                      className="w-full h-96"
                      src="https://www.google.com/maps/d/embed?mid=1lQ8zAXKH3S8JAc0WwwdmhPtn4tHf3fo&ehbc=2E312F" 
                      title="Superformance Dealers Map">
                  </iframe>
              </div>
              <motion.div
                key={activeDealerCountry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {dealersData[activeDealerCountry].map((dealer, index) => (
                  <Card key={index} className="p-6 h-full">
                    <h3 className="text-xl font-bold text-white mb-2">{dealer.name}</h3>
                    <p className="text-gray-400 mb-4 whitespace-pre-line">{dealer.address}</p>
                    <div className="space-y-2">
                      <span className="flex items-center gap-2 text-red-500"><Phone size={16} /> <a href={`tel:${dealer.phone}`} className="hover:underline text-gray-300">{dealer.phone}</a></span>
                      <span className="flex items-center gap-2 text-red-500"><Globe size={16} /> <a href={`http://${dealer.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">{dealer.website}</a></span>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="bg-black/80 text-gray-200 py-24 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto space-y-16">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 text-center">About Superformance</h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden">
                  <img src="https://i.ibb.co/VW3rdLxz/corvette-daytona-cobra-1.webp" alt="Superformance History" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white">Our Story</h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Founded in 1996, Superformance LLC is the only company in the world that has a license from Carroll Shelby Licensing to build a complete Shelby Cobra replica. Our passion for authentic, high-quality, and performance-driven vehicles has made us a leader in the industry. We are committed to preserving the legacy of these iconic cars while incorporating modern technologies for reliability and a superior driving experience.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    The provided image is a placeholder and should not be considered an actual photograph of a Superformance car. It is included for design purposes only.
                  </p>
                </div>
              </motion.div>
              <div className="flex justify-center mt-12">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4" onClick={() => handleSetPage('about')}>Learn More <ArrowRight className="ml-2" size={20} /></Button>
              </div>
              <div className="pt-12">
                <h2 className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-12">Meet the Team</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="p-6 text-center">
                        <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-red-600 shadow-lg" />
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-sm text-red-500 mb-2">{member.title}</p>
                        <p className="text-sm text-gray-400">{member.bio}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="p-12 text-center text-gray-400">Page not found.</div>;
    }
  };

  const navItems = [
    { name: 'Home', icon: Car, page: 'home' },
    { name: 'Models', icon: Factory, page: 'models' },
    { name: 'Dealers', icon: MapPin, page: 'dealers' },
    { name: 'About Us', icon: Info, page: 'about' },
  ];

  const secondaryNavItems = [
    { name: 'Factory Models', page: 'models' },
    { name: 'Inventory', page: 'inventory' },
    { name: 'Parts', page: 'parts' },
    { name: 'Ownership', page: 'ownership' },
    { name: 'Company', page: 'about' },
    { name: 'Dealers', page: 'dealers' },
    { name: 'Become A Dealer', page: 'become-dealer' },
  ];

  return (
    <div className="min-h-screen font-sans text-white antialiased bg-black [background-image:radial-gradient(circle_at_10%_20%,_rgba(239,68,68,0.1)_2px,_transparent_0),radial-gradient(circle_at_80%_50%,_rgba(239,68,68,0.1)_2px,_transparent_0),radial-gradient(circle_at_45%_70%,_rgba(239,68,68,0.1)_2px,_transparent_0),radial-gradient(circle_at_75%_95%,_rgba(239,68,68,0.1)_2px,_transparent_0),radial-gradient(circle_at_20%_85%,_rgba(239,68,68,0.1)_2px,_transparent_0),radial-gradient(circle_at_60%_10%,_rgba(239,68,68,0.1)_2px,_transparent_0),radial-gradient(circle_at_90%_30%,_rgba(239,68,68,0.1)_2px,_transparent_0),radial-gradient(circle_at_50%_90%,_rgba(239,68,68,0.3)_150px,_transparent_0)] bg-fixed">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-gray-200 text-xs sm:text-sm font-medium">
        <div className="max-w-8xl mx-auto flex items-center justify-between h-12 px-4 sm:px-6 md:px-12">
          {/* Mobile top left with phone */}
          <div className="flex items-center gap-2 sm:hidden">
            <a href="tel:+18002976253" className="flex items-center gap-1 text-red-500 hover:text-white transition-colors"><Phone size={20}/></a>
          </div>

          {/* Desktop top left with text */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-2 text-red-500">
              <Phone size={14} />
              <a href="tel:+18002976253" className="hover:text-white transition-colors">+1 800 297 6253</a>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button onClick={() => handleSetPage('home')} className="flex items-center gap-2">
              <img src="https://i.ibb.co/n87fJ6T0/superformance-red-white.webp" alt="Superformance Logo" className="h-8" />
              <span className="inline-block text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-red-600 focus:outline-none">
                Superformance
              </span>
            </button>
          </div>

          {/* Mobile top right icons */}
          <div className="flex items-center gap-2 sm:hidden">
            <a href="#" className="flex items-center gap-1 text-red-500 hover:text-white transition-colors"><LogIn size={20}/></a>
            <a href="#" className="flex items-center gap-1 text-red-500 hover:text-white transition-colors"><UserPlus size={20}/></a>
          </div>

          {/* Desktop top right with text */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="#" className="flex items-center gap-1 text-red-500 hover:text-white transition-colors"><LogIn size={14}/> LOGIN</a>
            <a href="#" className="flex items-center gap-1 text-red-500 hover:text-white transition-colors"><UserPlus size={14}/> SPF REGISTRY</a>
          </div>
        </div>
      </header>

      {/* Main Header */}
      <header className="fixed top-12 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-xl border-b border-gray-800">
        <div className="max-w-8xl mx-auto flex items-center h-16 px-4 sm:px-6 md:px-12">
          {/* Mobile Menu Button */}
          <div className="flex justify-center w-full md:hidden">
            <Button className="bg-transparent text-white hover:bg-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </Button>
          </div>
          
          <nav className="hidden md:flex flex-1 justify-center items-center text-sm font-medium space-x-8">
            {secondaryNavItems.map((item, index) => (
              <button 
                key={index} 
                onClick={() => handleSetPage(item.page)} 
                className={`flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider ${page === item.page ? 'text-red-600' : 'text-gray-400'}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl p-8 shadow-xl flex flex-col items-center justify-center pt-24"
          >
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-6 text-xl text-center font-medium">
              {secondaryNavItems.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => { handleSetPage(item.page); setIsMenuOpen(false); }} 
                  className={`flex items-center justify-center gap-2 hover:text-white transition-colors ${page === item.page ? 'text-red-600' : 'text-white'}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 py-16 px-4 sm:px-6 md:px-12 text-gray-400 text-sm border-t-8 border-red-700">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-12 mb-12">
          {/* Contact Info (Left) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h4 className="text-lg font-bold text-white mb-2">Contact Us</h4>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2"><Phone size={18}/><a href="tel:+18002976253" className="hover:text-red-400 transition-colors">+1 800 297 6253</a></span>
              <span className="flex items-center gap-2"><Mail size={18}/><a href="mailto:info@superformance.com" className="hover:text-red-400 transition-colors">info@superformance.com</a></span>
              <span className="flex items-start gap-2"><MapPin size={18}/><span className="w-48">14924 Corporate Rd S Ste 39, Jupiter, FL</span></span>
            </div>
          </div>
          
          {/* Logo & Company Info (Middle) */}
          <div className="flex flex-col items-center text-center gap-4">
            <img src="https://i.ibb.co/n87fJ6T0/superformance-red-white.webp" alt="Superformance Logo" className="h-10" />
            <p className="text-gray-400 leading-relaxed">
              Official Licensed Recreations of Iconic Vehicles. Built with a passion for history and performance.
            </p>
          </div>
          
          {/* Social Links (Right) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
            <h4 className="text-lg font-bold text-white mb-2">Connect</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="https://instagram.com/superformance" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors"><Instagram size={24} /></a>
              <a href="https://facebook.com/superformance" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors"><Facebook size={24} /></a>
              <a href="https://youtube.com/superformance" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors"><Youtube size={24} /></a>
              <a href="https://rss.com/superformance" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors"><Rss size={24} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center md:flex md:justify-between md:items-center">
          <p className="mb-4 md:mb-0">&copy; 2025 Superformance LLC. All Rights Reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
