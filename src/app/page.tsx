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
  ChevronDown,
  MapPin,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const SITE_URL = "https://courtcreatives.co.uk";

// Areas covered, grouped by county. Doubles as the source for the "areaServed"
// entries in the structured data below.
const areasServed = [
  {
    county: "County Antrim",
    places: [
      "Belfast",
      "Lisburn",
      "Ballymena",
      "Antrim",
      "Carrickfergus",
      "Larne",
      "Ballycastle",
      "Bushmills",
      "Portrush",
    ],
  },
  {
    county: "County Down",
    places: [
      "Bangor",
      "Newtownards",
      "Holywood",
      "Hillsborough",
      "Comber",
      "Downpatrick",
      "Newcastle",
      "Newry",
    ],
  },
  {
    county: "County Armagh",
    places: ["Armagh", "Portadown", "Lurgan", "Craigavon", "Markethill"],
  },
  {
    county: "County Londonderry",
    places: [
      "Derry~Londonderry",
      "Coleraine",
      "Portstewart",
      "Limavady",
      "Magherafelt",
      "Castledawson",
    ],
  },
  {
    county: "County Tyrone",
    places: ["Omagh", "Cookstown", "Dungannon", "Strabane", "Ballygawley"],
  },
  {
    county: "County Fermanagh",
    places: ["Enniskillen", "Lough Erne", "Lisnaskea", "Irvinestown"],
  },
  {
    county: "Republic of Ireland",
    places: ["Donegal", "Monaghan", "Cavan", "Louth", "Sligo", "Dublin"],
  },
];

const faqs = [
  {
    question: "Where are you based and what areas do you cover?",
    answer:
      "I'm based in Belfast and cover the whole of Northern Ireland — Antrim, Armagh, Down, Fermanagh, Londonderry and Tyrone. That includes venues right across Belfast, Lisburn, Bangor, Newry, Ballymena, Armagh, Enniskillen, Omagh, Derry~Londonderry and the Causeway Coast. Travel within Northern Ireland is included as standard, with a small travel fee only for the longest journeys.",
  },
  {
    question: "Do you travel to the Republic of Ireland?",
    answer:
      "Absolutely. I regularly travel across the border for weddings in Donegal, Monaghan, Cavan, Louth, Sligo and Dublin. A travel fee applies for ROI weddings, and for venues further afield I can arrange overnight accommodation so I'm on site and ready first thing on the morning of your wedding. Just get in touch with your venue and I'll quote it for you.",
  },
  {
    question:
      "What's the difference between a wedding content creator and a photographer or videographer?",
    answer:
      "Your photographer and videographer create the polished, cinematic keepsakes you'll frame and watch on your anniversary — and those take weeks to edit. I capture the in-between moments the same way your best friend would: raw, candid, behind-the-scenes clips and photos shot vertically for TikTok, Instagram Reels and Stories. I work alongside your photo and video team, never instead of them.",
  },
  {
    question: "How quickly will I get my wedding content?",
    answer:
      "Your full gallery of edited content lands with you within 24 to 48 hours of your wedding day. Most couples are posting their reels before they've even left for their honeymoon. If there are a few standout clips you want even sooner, just say the word on the day and I'll get them over to you.",
  },
  {
    question: "How do I book, and how do I secure my date?",
    answer:
      "Pick the package that suits you, then send an enquiry through the contact form below. Once we've confirmed the details I'll send over a contract to sign, and a 20% deposit secures your date in the diary. The remaining balance is due 30 days before the wedding.",
  },
  {
    question: "How far in advance should I book you?",
    answer:
      "The earlier the better. Peak season in Northern Ireland runs from May through September and those Saturdays tend to go 12 to 18 months ahead. That said, it's always worth asking — midweek dates, winter weddings and last-minute gaps do come up.",
  },
  {
    question: "Can packages be tailored to what we need?",
    answer:
      "Yes — every one of the three packages can be adjusted. Whether you want extra hours to cover the getting-ready in the morning, coverage that runs later into the dancing, or a shorter day for a smaller celebration, we'll build something that fits. Just mention what you're after in your enquiry.",
  },
  {
    question: "What equipment do you use?",
    answer:
      "I shoot primarily on the latest iPhone, and that's very deliberate. Phone footage is what makes social content feel natural and native to the platform rather than staged, and it lets me stay unobtrusive and move quickly through the day. I also bring a gimbal for smooth movement and portable lighting for evening receptions.",
  },
  {
    question: "Will you get in the way of our photographer or videographer?",
    answer:
      "No. Working around a photo and video team is a core part of the job — I'll introduce myself on the morning, stay out of their frames and coordinate throughout the day. Because I'm shooting on a phone I can tuck into spaces a full camera rig can't, so you get a completely different angle on your day.",
  },
  {
    question: "Do you cover elopements and smaller weddings?",
    answer:
      "Of course. Intimate ceremonies, elopements, micro-weddings, engagement parties and hen dos are all very welcome. Smaller celebrations often make for some of the most personal content, and shorter packages can be arranged to suit.",
  },
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "CourtCreatives",
  alternateName: "Court Creatives Wedding Content Creator",
  description:
    "Professional wedding content creator in Northern Ireland and Belfast specialising in TikTok, Instagram reels, and cinematic wedding videos",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belfast",
    addressRegion: "Northern Ireland",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "54.5973",
    longitude: "-5.9301",
  },
  sameAs: [
    "https://www.instagram.com/courtcreatives_/",
    "https://www.tiktok.com/@courtcreatives_",
  ],
  priceRange: "££",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Northern Ireland" },
    { "@type": "Country", name: "Ireland" },
    ...areasServed.flatMap((group) =>
      group.places.map((place) => ({ "@type": "City", name: place }))
    ),
  ],
  serviceType: [
    "Wedding Content Creation",
    "Wedding Content Creator",
    "Wedding Videography",
    "Social Media Content",
    "TikTok Videos",
    "Instagram Reels",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const CourtCreativesWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
      {/* Structured data — rendered into the markup so crawlers pick it up
          without having to execute JavaScript */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
                  "FAQ",
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
                className="md:hidden p-2 cursor-pointer text-gray-800"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#fff6f3]/95 border-t">
            <div className="px-4 py-4 space-y-4">
              {[
                "About",
                "Packages",
                "How it works",
                "Gallery",
                "FAQ",
                "Contact",
              ].map(
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-[family-name:var(--font-tangerine)] text-gray-800">
            Wedding Content Creator{" "}
            <span className="text-[#f8ced0]">Northern Ireland</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto">
            Professional wedding content creator serving Belfast, Northern
            Ireland, and beyond. Specialising in stunning TikTok videos,
            Instagram reels, and cinematic wedding content that brings your
            special day to life
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
              <h2 className="text-4xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-tangerine)] text-gray-800">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Hi, I&apos;m Courtney.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                A passionate wedding content creator based in Belfast, Northern
                Ireland, dedicated to capturing the magic, emotion, and beauty
                of your special day through raw candid photos and videos.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                As a wedding content creator in Northern Ireland and Belfast, I
                specialise in creating stunning visual stories perfect for
                social media that you&apos;ll treasure forever. From intimate
                ceremonies to grand celebrations across NI, I&apos;m here to
                document every precious moment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach is authentic, creative, and focused on capturing the
                genuine emotions that make your wedding uniquely yours. Proudly
                serving couples throughout Belfast, Northern Ireland & ROI.
              </p>
            </div>
            <div className="relative h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/aboutme.JPG"
                alt="Wedding content creator Northern Ireland Belfast - Courtney from CourtCreatives"
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
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 font-[family-name:var(--font-tangerine)] text-gray-800">
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
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-12 font-[family-name:var(--font-tangerine)] text-gray-800">
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
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 font-[family-name:var(--font-tangerine)] text-gray-800">
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
                  <video
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    muted
                  >
                    <source src={`${item.src}#t=0.1`} type="video/mp4" />
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-4 font-[family-name:var(--font-tangerine)] text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 font-light mb-12 max-w-2xl mx-auto">
            Everything you need to know about booking a wedding content creator
            in Northern Ireland. Still wondering about something? Drop me a
            message below.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="bg-[#fff6f3] rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 cursor-pointer"
                  >
                    <h3 className="text-base md:text-xl text-gray-800 font-normal">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-[#f8ced0] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold text-center mb-16 font-[family-name:var(--font-tangerine)] text-gray-800">
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
            © {new Date().getFullYear()} CourtCreatives. All rights reserved.
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
                Your enquiry has been successfully submitted. We&apos;ll get
                back to you within 24-48 hours.
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
