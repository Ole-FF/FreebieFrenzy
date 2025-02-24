import React from 'react';
import { DollarSign, PlayCircle, Gift, Eye, ClipboardList, Gamepad2, Share2, ListChecks, HelpCircle, BookOpen, FileText, MessageSquare, Menu, X, ChevronDown, Twitter, Facebook, Linkedin, MessageCircle, Instagram, Phone, Youtube, Video, UserPlus, CheckCircle2, Wallet, MonitorPlay, Users, ArrowRight, Wifi, TestTubes, BrainCircuit, PlaySquare, Star, ChevronLeft, ChevronRight, Clock, Globe, CreditCard, HeadphonesIcon, Smartphone } from 'lucide-react';
import { useState } from 'react';
import logo from '../public/assets/logo.png';

const fallbackLogo = '/assets/logo.png';

const userReviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "I've earned over $500 in my first month just by playing games and taking surveys. FreebieFrenzy is legit!",
    date: "March 2024"
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment: "The AI training tasks are interesting and pay well. Great platform for earning extra income.",
    date: "March 2024"
  },
  {
    name: "Emma Davis",
    rating: 5,
    comment: "Love how easy it is to earn money watching videos during my free time. Payments are always on time!",
    date: "February 2024"
  },
  // Add more reviews...
];

const faqs = [
  {
    question: "What is FreebieFrenzy?",
    answer: "FreebieFrenzy is a legitimate online platform that connects users with various opportunities to earn money through simple tasks like surveys, gaming, product testing, and more. Our platform makes earning online accessible to everyone."
  },
  {
    question: "Is FreebieFrenzy legit?",
    answer: "Yes, FreebieFrenzy is a legitimate platform with thousands of satisfied users worldwide. We maintain transparent payment processes and have a proven track record of timely payouts to our users."
  },
  {
    question: "How much can I earn with FreebieFrenzy?",
    answer: "Earnings vary based on the tasks you choose and the time you invest. Some users earn a few dollars daily for casual participation, while more active users can earn substantial amounts through consistent engagement with higher-paying tasks."
  },
  {
    question: "Is FreebieFrenzy suitable for beginners?",
    answer: "Absolutely! FreebieFrenzy is designed to be user-friendly for everyone, including beginners. We provide clear instructions, helpful tutorials, and responsive customer support to help you get started."
  },
  {
    question: "Can I start making money online on FreebieFrenzy right now?",
    answer: "Yes! Simply sign up for a free account, verify your email, and you can start earning immediately. Many tasks are available instantly after registration."
  },
  {
    question: "How can I make $100 today online?",
    answer: "While earnings vary, you can maximize your income by combining different tasks like surveys, product testing, and gaming. Focus on high-paying tasks and maintain consistent participation to reach your earning goals."
  },
  {
    question: "What are the best ways to earn money online?",
    answer: "The most effective methods include completing surveys, testing products, playing games, watching videos, and participating in market research. FreebieFrenzy offers all these opportunities in one convenient platform."
  },
  {
    question: "Can I use my phone to earn money online?",
    answer: "Yes! FreebieFrenzy is fully mobile-compatible, allowing you to complete tasks and earn money from your smartphone or tablet. Our platform works seamlessly across all devices."
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const menuItems = {
    'Earn money': [
      { title: 'Train AI', icon: <DollarSign className="w-5 h-5" /> },
      { title: 'Product Testing', icon: <Gift className="w-5 h-5" /> },
      { title: 'Passive Earning', icon: <DollarSign className="w-5 h-5" /> },
      { title: 'Watch Videos and Earn', icon: <Eye className="w-5 h-5" /> },
      { title: 'Take Surveys', icon: <ClipboardList className="w-5 h-5" /> },
      { title: 'Play Games', icon: <Gamepad2 className="w-5 h-5" /> },
      { title: 'Social Media', icon: <Share2 className="w-5 h-5" /> },
      { title: 'Microtasks', icon: <ListChecks className="w-5 h-5" /> },
    ],
    'How it works': [
      { title: 'How To Earn Money Online', icon: <DollarSign className="w-5 h-5" /> },
    ],
    'Resources': [
      { title: 'Help', icon: <HelpCircle className="w-5 h-5" /> },
      { title: 'Blog', icon: <BookOpen className="w-5 h-5" /> },
      { title: 'Papers', icon: <FileText className="w-5 h-5" /> },
    ],
    'Our Services': [
      { title: 'Social media growth', icon: <Users className="w-5 h-5" /> },
      { title: 'Website traffic', icon: <Globe className="w-5 h-5" /> },
      { title: 'App installs', icon: <Smartphone className="w-5 h-5" /> },
    ],
    'Get In Touch': [
      { title: 'Contact us', icon: <MessageSquare className="w-5 h-5" /> },
    ]
  };

  const socialLinks = [
    { name: 'X (Twitter)', icon: <Twitter className="w-6 h-6" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, href: '#' },
    { name: 'Telegram', icon: <MessageCircle className="w-6 h-6" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: '#' },
    { name: 'WhatsApp', icon: <Phone className="w-6 h-6" />, href: '#' },
    { name: 'TikTok', icon: <Video className="w-6 h-6" />, href: '#' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, href: '#' },
  ];

  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-teal-600" />,
      title: "Sign Up",
      description: "Create an account with Google, Facebook, Apple, or a crypto wallet."
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-teal-600" />,
      title: "Complete Tasks",
      description: "Browse a wide range of tasks, from games to surveys, and pick the easiest way to earn online."
    },
    {
      icon: <Wallet className="w-12 h-12 text-teal-600" />,
      title: "Get Paid",
      description: "Follow the task guidelines, complete tasks, and get rewarded. Easily transfer your earnings to your crypto wallet."
    }
  ];

  const stats = [
    { label: "Total paid out", value: "1 293 736" },
    { label: "Registered users", value: "6 667 893" },
    { label: "Completed payouts", value: "1 792 593" }
  ];

  const earningMethods = [
    { icon: <ClipboardList className="w-8 h-8" />, title: "Take Surveys", description: "Participate in surveys, help companies improve operations, and earn rewards." },
    { icon: <Gamepad2 className="w-8 h-8" />, title: "Play games", description: "Receive rewards with each achievement milestone as you enjoy playing games." },
    { icon: <Share2 className="w-8 h-8" />, title: "Social media tasks", description: "Watch your earnings grow by engaging on Twitter (X), Telegram, Discord, and other social media platforms." },
    { icon: <Wifi className="w-8 h-8" />, title: "Share internet", description: "Share your extra mobile data with verified businesses and individuals to earn money." },
    { icon: <TestTubes className="w-8 h-8" />, title: "Test products", description: "Try out new apps and digital tools, provide feedback, and get paid for helping improve online services." },
    { icon: <BrainCircuit className="w-8 h-8" />, title: "Train AI", description: "Help train AI systems by completing tasks like data labeling and get rewarded for your contributions." },
    { icon: <PlayCircle className="w-8 h-8" />, title: "Watch ads", description: "Turn your downtime into rewards by watching ads and videos and get paid." },
    { icon: <MonitorPlay className="w-8 h-8" />, title: "Watch videos", description: "Earn rewards by watching videos in your spare time, an easy way to make money online." },
    { icon: <ListChecks className="w-8 h-8" />, title: "Other tasks", description: "Discover more" }
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % userReviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + userReviews.length) % userReviews.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create submission data with timestamp
    const submissionData = {
      ...formData,
      submissionTime: new Date().toISOString(),
      registrationType: 'email', // to distinguish from social sign-ups
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/qdyqnudd4yj97p8dw8kcdfq87ybc59uy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // If submission successful, show success message
        setIsSubmitted(true);
      } else {
        // Handle error
        console.error('Submission failed');
        // You might want to show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle network errors
    }
  };

  const handleSocialSignUp = async (platform: string) => {
    // In a real implementation, you'd handle OAuth flow first
    // This is just to demonstrate the webhook call
    
    const socialSubmissionData = {
      registrationType: platform,
      submissionTime: new Date().toISOString(),
      // You'd typically get these from the OAuth response
      platform: platform,
      platformUserId: `demo_${platform}_user_id`,
      email: `demo_${platform}_email@example.com`,
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/qdyqnudd4yj97p8dw8kcdfq87ybc59uy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(socialSubmissionData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Social sign-up submission failed');
      }
    } catch (error) {
      console.error('Error submitting social sign-up:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate against your backend
    // This is just a placeholder implementation
    setLoginError(''); // Clear any previous errors
    
    // Simulate API call
    console.log('Login attempted with:', loginData);
    // Add your actual login logic here
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src={logo || fallbackLogo}
                  alt="FreebieFrenzy" 
                  className="h-16 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = fallbackLogo;
                  }}
                />
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {Object.entries(menuItems).map(([category, items]) => (
                  <div key={category} className="relative group">
                    <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-teal-600">
                      {category}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    
                    <div className="absolute z-10 hidden group-hover:block w-48 mt-2 bg-white rounded-md shadow-lg">
                      <div className="py-1">
                        {items.map((item) => (
                          <a
                            key={item.title}
                            href="#"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                          >
                            {item.icon}
                            <span className="ml-2">{item.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sign In Button */}
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-4">
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-orange hover:bg-orange-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsRegistrationOpen(true)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-teal hover:bg-teal-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                >
                  Sign Up For Free!
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="space-y-1">
                  <div className="px-4 py-2 text-base font-medium text-gray-700">
                    {category}
                  </div>
                  {items.map((item) => (
                    <a
                      key={item.title}
                      href="#"
                      className="flex items-center px-4 py-2 text-base font-medium text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Simple Ways to</span>
                  <span className="block text-teal-600">Make Money Online</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Turn your spare time into earnings today. Play games, take surveys, and explore other easy ways to make money online with FreebieFrenzy.
                </p>
                <div className="mt-5 sm:mt-8 flex justify-center">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
                    >
                      Start Making Money Now
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How it works
            </h2>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Step {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                Start Earning Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Our Mission
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-500 mb-16">
              FreebieFrenzy provides opportunities to generate online income through straightforward methods. The platform features a diverse selection of manageable tasks that users can complete remotely to earn supplemental revenue. Since no specialized expertise is required, FreebieFrenzy enables anyone to participate in digital earning opportunities and join the online marketplace.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <dt className="text-lg font-medium text-gray-500">{stat.label}</dt>
                <dd className="mt-2 text-3xl font-extrabold text-teal-600">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Earn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Ways To Earn With FreebieFrenzy
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-500 mb-16">
              Begin earning online income now by exploring our diverse selection of opportunities, ranging from simple, brief assignments to more complex projects that offer higher compensation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {earningMethods.map((method) => (
              <div key={method.title} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    {method.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{method.title}</h3>
                </div>
                <p className="text-gray-500 mb-4">{method.description}</p>
                <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              What Our Users Say
            </h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
              >
                {userReviews.map((review, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? 'text-brand-yellow fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">{review.comment}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{review.name}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose FreebieFrenzy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-16 text-center">
            Why choose FreebieFrenzy?
          </h2>

          {/* Tasks available for everyone */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tasks available for everyone</h3>
              <p className="text-gray-500">FreebieFrenzy caters to diverse groups including students, parents at home, and independent contractors, providing numerous opportunities to earn money online through simple tasks available. You can generate income during your free time by participating in various activities such as survey completion, gaming, or brief assignments that take just minutes to finish.</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="People working together"
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
            </div>
          </div>

          {/* Earn money from anywhere */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn money online from anywhere</h3>
              <p className="text-gray-500">FreebieFrenzy lets you earn income anywhere - from your home or while mobile. Turn idle moments like commute time, queuing, or short breaks into earning opportunities. Looking for ways to make money from your residence? FreebieFrenzy provides simple earning options accessible to all.</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1515378960530-7c0da6233fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Person working remotely"
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
            </div>
          </div>

          {/* Receive your payments instantly */}
          <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Receive your payments instantly and easily</h3>
              <p className="text-gray-500">After task completion, your earnings become available for withdrawal and can be promptly transferred to your digital wallet. FreebieFrenzy streamlines the payment process, eliminating complications. The platform stands out for its fast reward processing.</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Digital payments"
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
            </div>
          </div>

          {/* 24/7 support */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 support</h3>
              <p className="text-gray-500">Get dependable assistance anytime through FreebieFrenzy's responsive support system. In addition to our 24/7 support team, our engaged user community offers guidance and solutions. Whether you're new to online earning or experienced, you'll find comprehensive support.</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Customer support"
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
            </div>
          </div>

          {/* Earn money from all your devices */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Earn money from all your devices</h3>
              <p className="text-gray-500">Access FreebieFrenzy and earn money across all your devices - smartphones, tablets, or computers. The platform's versatility allows you to generate income whether you're at home or moving about, with seamless accessibility wherever you are.</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Multiple devices"
                className="rounded-lg shadow-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find answers to common questions about earning money online with FreebieFrenzy
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Get the app
            </h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Menu */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">EARN MONEY</h3>
              <ul className="mt-4 space-y-2">
                {['Microtasks', 'Social Media Tasks', 'Watch videos', 'Take surveys', 'Play games', 'Make passive income', 'Test products', 'Make translations', 'Train AI'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-gray-500 hover:text-teal-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">HOW IT WORKS</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-teal-600">
                    How to earn
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">FOR BUSINESS</h3>
              <ul className="mt-4 space-y-2">
                {['Our services', 'Get in touch', 'Social media growth', 'Website traffic', 'App installs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-gray-500 hover:text-teal-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">COMPANY</h3>
              <ul className="mt-4 space-y-2">
                {['About us', 'Contact us', 'Terms of service', 'Privacy policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-gray-500 hover:text-teal-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">RESOURCES</h3>
              <ul className="mt-4 space-y-2">
                {['Blog', 'Help', 'Papers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-base text-gray-500 hover:text-teal-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer with Social Media */}
      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 md:space-x-8">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-teal-600 transition-colors duration-200"
                  aria-label={`Follow us on ${item.name}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="mt-8 text-center text-base text-gray-400">
              © {new Date().getFullYear()} FreebieFrenzy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Registration Modal */}
      {isRegistrationOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Create your account</h3>
              <button
                onClick={() => setIsRegistrationOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {!isSubmitted ? (
                <>
                  {/* Social Sign Up Options */}
                  <div className="space-y-4 mb-6">
                    <button
                      type="button"
                      onClick={() => handleSocialSignUp('google')}
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      <img
                        src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                        alt="Google"
                        className="h-5 w-5 mr-2"
                      />
                      Continue with Google
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSocialSignUp('facebook')}
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-[#1877F2] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2]"
                    >
                      <Facebook className="h-5 w-5 mr-2" />
                      Continue with Facebook
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSocialSignUp('twitter')}
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-[#1DA1F2] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DA1F2]"
                    >
                      <Twitter className="h-5 w-5 mr-2" />
                      Continue with Twitter
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSocialSignUp('linkedin')}
                      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-[#0A66C2] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2]"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Continue with LinkedIn
                    </button>
                  </div>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                    </div>
                  </div>

                  {/* Existing Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                        </button>
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          id="confirmPassword"
                          required
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm text-gray-700 mb-2">Please complete the CAPTCHA</div>
                      {/* Placeholder for CAPTCHA - you would integrate your preferred CAPTCHA service here */}
                      <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
                        CAPTCHA placeholder
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-teal hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Create Account
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Check your email
                  </h4>
                  <p className="text-gray-600">
                    We've sent an activation link to <strong>{formData.email}</strong>. Please check your email and click the link to activate your account.
                  </p>
                  <button
                    onClick={() => {
                      setIsRegistrationOpen(false);
                      setIsSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        password: '',
                        confirmPassword: '',
                      });
                    }}
                    className="mt-4 text-brand-teal hover:text-teal-700"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Sign In</h3>
              <button
                onClick={() => {
                  setIsLoginOpen(false);
                  setLoginError('');
                  setLoginData({ email: '', password: '' });
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {loginError}
                </div>
              )}

              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  required
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                />
              </div>

              <div className="relative">
                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    name="password"
                    id="login-password"
                    required
                    value={loginData.password}
                    onChange={handleLoginInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showLoginPassword ? 
                      <EyeOff className="h-5 w-5 text-gray-400" /> : 
                      <Eye className="h-5 w-5 text-gray-400" />
                    }
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign In
              </button>

              <div className="flex flex-col space-y-2 text-sm text-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsLoginOpen(false);
                    // Add your forgot password logic here
                    console.log('Forgot password clicked');
                  }}
                  className="text-brand-orange hover:text-orange-600"
                >
                  Forgot your password?
                </button>
                
                <div className="text-gray-500">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(false);
                      setIsRegistrationOpen(true);
                    }}
                    className="text-brand-teal hover:text-teal-700 font-medium"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;