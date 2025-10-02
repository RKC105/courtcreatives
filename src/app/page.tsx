"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Instagram,
  X,
  Menu,
  Send,
  MessageCircle,
  Package,
  FileText,
  Phone,
  Calendar,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const CourtCreativesWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    partnerName: "",
    email: "",
    phone: "",
    weddingDate: "",
    gettingReadyLocation: "",
    ceremonyLocation: "",
    receptionLocation: "",
    additionalDetails: "",
  });

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const videos = document.querySelectorAll("video");
      videos.forEach((video) => {
        if (document.fullscreenElement) {
          video.style.objectFit = "contain";
        } else {
          video.style.objectFit = "cover";
        }
      });
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    const handleVideoPlay = (e: Event) => {
      const playingVideo = e.target as HTMLVideoElement;
      const allVideos = document.querySelectorAll("video");

      allVideos.forEach((video) => {
        if (video !== playingVideo) {
          video.pause();
        }
      });
    };

    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.addEventListener("play", handleVideoPlay);
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("play", handleVideoPlay);
      });
    };
  }, []);

  useEffect(() => {
    // Set page title
    document.title =
      "CourtCreatives - Wedding Content Creator Northern Ireland | Wedding TikTok & Reels";

    // Remove existing meta tags if any
    const existingMeta = document.querySelectorAll(
      "meta[data-court-creatives]"
    );
    existingMeta.forEach((tag) => tag.remove());

    // Add meta tags
    const metaTags = [
      {
        name: "description",
        content:
          "Professional wedding content creator in Northern Ireland. Specialising in wedding TikTok, Instagram reels, and cinematic wedding videos. Book your NI wedding content creator today.",
      },
      {
        name: "keywords",
        content:
          "wedding content creator, wedding content creators ni, northern ireland wedding, ni wedding, wedding tiktok, wedding reels, wedding instagram, content creators ni, wedding videographer ni, belfast wedding content, ni wedding videographer",
      },
      { name: "author", content: "CourtCreatives" },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "CourtCreatives - Wedding Content Creator Northern Ireland",
      },
      {
        property: "og:description",
        content:
          "Professional wedding content creator in Northern Ireland specialising in TikTok, Instagram reels, and cinematic wedding videos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://courtcreativesni.com" },
      {
        property: "og:image",
        content: "https://courtcreativesni.com/logo.png",
      },
      { property: "og:site_name", content: "CourtCreatives" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "CourtCreatives - Wedding Content Creator Northern Ireland",
      },
      {
        name: "twitter:description",
        content:
          "Professional wedding content creator in Northern Ireland specialising in TikTok, Instagram reels, and cinematic wedding videos.",
      },
      {
        name: "twitter:image",
        content: "https://courtcreativesni.com/logo.png",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#fff6f3" },
      { name: "geo.region", content: "GB-NIR" },
      { name: "geo.placename", content: "Northern Ireland" },
    ];

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      meta.setAttribute("data-court-creatives", "true");
      document.head.appendChild(meta);
    });

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://courtcreativesni.com");

    // Add JSON-LD structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "CourtCreatives",
      description:
        "Professional wedding content creator in Northern Ireland specialising in TikTok, Instagram reels, and cinematic wedding videos",
      url: "https://courtcreativesni.com",
      logo: "https://courtcreativesni.com/logo.png",
      image: "https://courtcreativesni.com/logo.png",
      telephone: "",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Northern Ireland",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        addressCountry: "GB",
      },
      sameAs: [
        "https://www.instagram.com/courtcreatives_/",
        "https://www.tiktok.com/@courtcreatives_",
      ],
      priceRange: "$",
      areaServed: {
        "@type": "State",
        name: "Northern Ireland",
      },
      serviceType: [
        "Wedding Content Creation",
        "Wedding Videography",
        "Social Media Content",
        "TikTok Videos",
        "Instagram Reels",
      ],
    };

    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.weddingDate ||
      !formData.gettingReadyLocation ||
      !formData.ceremonyLocation ||
      !formData.receptionLocation
    ) {
      alert("Please fill in all required fields marked with *");
      return;
    }

    // Validate wedding date is not in the past
    const selectedDate = new Date(formData.weddingDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      alert("Please select a future date for your wedding.");
      return;
    }

    try {
      // Submit to JotForm API
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          fullName: "",
          partnerName: "",
          email: "",
          phone: "",
          weddingDate: "",
          gettingReadyLocation: "",
          ceremonyLocation: "",
          receptionLocation: "",
          additionalDetails: "",
        });
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fff6f3] font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#fff6f3]/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="CourtCreatives Logo"
                width={112}
                height={112}
                className="h-28 w-auto cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                priority
              />
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {[
                  "About",
                  "Packages",
                  "How it works",
                  "Gallery",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-rose-400 transition-colors duration-300 font-light tracking-wide cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="hidden md:flex items-center space-x-4 border-l border-gray-300 pl-6">
                <a
                  href="https://www.instagram.com/courtcreatives_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@courtcreatives_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
                </a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 cursor-pointer"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#fff6f3]/95 border-t">
            <div className="px-4 py-4 space-y-4">
              {["About", "Packages", "How it works", "Gallery", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-700 hover:text-[#f8ced0] transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight font-[family-name:var(--font-tangerine)]">
            Capturing Your <span className="text-[#f8ced0]">Love Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
            Professional wedding content creator in Northern Ireland
            specialising in stunning TikTok videos, Instagram reels, and
            cinematic wedding content that brings your special day to life
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#f8ced0] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#f5b8bb] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
          >
            Book Your Date
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-light mb-6 font-[family-name:var(--font-tangerine)]">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Hi, I&apos;m Courtney.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A passionate wedding content creator based in Northern Ireland,
                dedicated to capturing the magic, emotion, and beauty of your
                special day through raw candid photos and videos.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With years of experience in content creation across Northern
                Ireland, I specialise in creating stunning visual stories
                perfect for social media that you&apos;ll treasure forever. From
                intimate ceremonies to grand celebrations, I&apos;m here to document
                every precious moment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach is authentic, creative, and focused on capturing the
                genuine emotions that make your wedding uniquely yours. Serving
                couples throughout Northern Ireland & ROI.
              </p>
            </div>
            <div className="relative h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/aboutme.JPG"
                alt="Wedding content creator Northern Ireland"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-medium text-center mb-16 font-[family-name:var(--font-tangerine)]">
            Packages
          </h2>
          <div className="flex justify-center">
            <Image
              src="/packages.png"
              alt="Wedding Packages"
              width={1024}
              height={768}
              className="w-full max-w-4xl h-auto"
            />
          </div>
          <div className="mt-12 text-center space-y-2">
            <p className="text-gray-700 font-light text-sm">
              PACKAGES CAN BE TAILORED TO SUIT YOUR NEEDS
            </p>
            <p className="text-gray-700 font-light text-sm">
              20% DEPOSIT REQUIRED UPON BOOKING. TRAVEL FEES MAY APPLY DEPENDING
              ON LOCATION
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how it works" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-medium text-center mb-12 font-[family-name:var(--font-tangerine)]">
            How it works
          </h2>
          <div className="flex flex-col gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Stage 1 */}
            <div className="bg-[#fff6f3] p-4 md:p-8 rounded-lg shadow-lg">
              <div className="flex gap-3 md:gap-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#f8ced0] rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#f8ced0] font-semibold text-base md:text-lg mb-1">
                    Stage 1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-2 font-[family-name:var(--font-tangerine)]">
                    Choose Your Package
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Pick one of the 3 packages available as shown above.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Packages can be tailored to suit your individual needs /
                    wants.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-[#fff6f3] p-4 md:p-8 rounded-lg shadow-lg">
              <div className="flex gap-3 md:gap-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#f8ced0] rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#f8ced0] font-semibold text-base md:text-lg mb-1">
                    Stage 2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-2 font-[family-name:var(--font-tangerine)]">
                    Sign Contract & Pay Deposit
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Details will be confirmed & contact form will get sent to be
                    signed
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    A 20% deposit is required at this point to secure your date.
                    Remaining balance is due 30 days before wedding.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-[#fff6f3] p-4 md:p-8 rounded-lg shadow-lg">
              <div className="flex gap-3 md:gap-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#f8ced0] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#f8ced0] font-semibold text-base md:text-lg mb-1">
                    Stage 3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-2 font-[family-name:var(--font-tangerine)]">
                    Phone Call or Online Consultation
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    30 Days before your wedding date we will gather all the
                    important details.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    We will also talk all things content creation along with the
                    package that you had selected & what that entails.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-[#fff6f3] p-4 md:p-8 rounded-lg shadow-lg">
              <div className="flex gap-3 md:gap-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#f8ced0] rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[#f8ced0] font-semibold text-base md:text-lg mb-1">
                    Stage 4
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-2 font-[family-name:var(--font-tangerine)]">
                    Wedding day + Receiving Content
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    On your wedding day I will be there as long as the package
                    states, capturing all those special moments.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    You will receive all your contents within 24 - 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-light text-center mb-16 font-[family-name:var(--font-tangerine)]">
            Video Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                type: "video",
                src: "/vid1.mp4",
              },
              {
                type: "video",
                src: "/vid2.mp4",
              },
              {
                type: "video",
                src: "/vid3.mp4",
              },
              {
                type: "video",
                src: "/vid4.mp4",
              },
              {
                type: "video",
                src: "/vid5.mp4",
              },
              {
                type: "video",
                src: "/vid6.mp4",
              },
            ].map((item, index) =>
              item.type === "video" ? (
                <div
                  key={index}
                  className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <video controls className="w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : null
            )}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/courtcreatives_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#f8ced0] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#f5b8bb] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
              <span>View More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-light text-center mb-16 font-[family-name:var(--font-tangerine)]">
            Get In Touch
          </h2>
          <div className="bg-[#fff6f3] p-8 md:p-12 rounded-lg shadow-xl">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-normal">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-normal">
                    Partner&apos;s Name
                  </label>
                  <input
                    type="text"
                    name="partnerName"
                    value={formData.partnerName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-normal">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-normal">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-normal">
                  Wedding Date *
                </label>
                <input
                  type="date"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  required
                  min={minDate}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-normal">
                  Location of Where You Will Be Getting Ready *
                </label>
                <input
                  type="text"
                  name="gettingReadyLocation"
                  value={formData.gettingReadyLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-normal">
                  Ceremony Location *
                </label>
                <input
                  type="text"
                  name="ceremonyLocation"
                  value={formData.ceremonyLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-normal">
                  Reception Location *
                </label>
                <input
                  type="text"
                  name="receptionLocation"
                  value={formData.receptionLocation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-normal">
                  Additional Details or Requests
                </label>
                <textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#f8ced0] text-white font-semibold py-4 rounded-lg hover:bg-[#f5b8bb] transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Send Enquiry</span>
              </button>
            </div>
          </div>

          <div className="mt-12 flex justify-center space-x-8">
            <a
              href="https://www.instagram.com/courtcreatives_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <Instagram className="w-6 h-6" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@courtcreatives_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p className="font-light">
            © 2025 CourtCreatives. All rights reserved.
          </p>
          <p className="mt-2 font-light">
            Creating beautiful wedding memories, one frame at a time
          </p>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button
        onClick={() => scrollToSection("contact")}
        className="fixed bottom-6 right-6 bg-[#f8ced0] text-white font-semibold p-4 rounded-full shadow-2xl hover:bg-[#f5b8bb] transition-all duration-300 hover:scale-110 z-50 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-[#f8ced0] mb-4">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-tangerine)] text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your enquiry has been successfully submitted. We&apos;ll get back to
                you within 24-48 hours.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-[#f8ced0] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#f5b8bb] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourtCreativesWebsite;
