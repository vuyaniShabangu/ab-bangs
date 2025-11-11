"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { QuoteModal } from "@/components/quote-modal"

type GalleryTag = "All" | "Catering" | "Daily Lunches" | "Kids Lunches" | "Platters"

interface GalleryImage {
  src: string
  alt: string
  category: Exclude<GalleryTag, "All">
}

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState<GalleryTag>("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Open image modal
  const openImageModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  // Close image modal
  const closeImageModal = () => {
    setSelectedImageIndex(null)
  }

  // Navigate to previous image
  const goToPrevious = (currentIndex: number) => {
    if (currentIndex > 0) {
      setSelectedImageIndex(currentIndex - 1)
    }
  }

  // Navigate to next image
  const goToNext = (currentIndex: number, maxLength: number) => {
    if (currentIndex < maxLength - 1) {
      setSelectedImageIndex(currentIndex + 1)
    }
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu and prevent body scroll when open
  useEffect(() => {
    if (isMobileMenuOpen || selectedImageIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen, selectedImageIndex])

  // Gallery images organized by category
  const galleryImages: GalleryImage[] = [
    // Catering images
    // Catering - GQ Baptism event (add matching images to public/catering)
    {
      src: "/catering/gq-baptism-01.jpeg",
      alt: "Catering staff serving beetroot salad at baptism event",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-02.jpeg",
      alt: "Catering team plating fresh green salad",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-03.jpeg",
      alt: "Kitchen team ready for service in aprons",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-04.jpeg",
      alt: "Catering duo smiling before service",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-05.jpeg",
      alt: "Playful pose from catering staff member",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-06.jpeg",
      alt: "Caterer holding stack of takeaway bowls in kitchen",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-07.jpeg",
      alt: "Buffet station with vegetable medley and chafing dishes",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-08.jpeg",
      alt: "Golden chafing dishes with braised beef at buffet",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-09.jpeg",
      alt: "Guest serving meat from chafing dishes",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-10.jpeg",
      alt: "Salads and sides arranged at buffet start",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-11.jpeg",
      alt: "Guests queuing at buffet with gold chafers",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-12.jpeg",
      alt: "Caterer greeting guest at event",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-13.jpeg",
      alt: "Guest plating food near salads and sides",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-14.jpeg",
      alt: "Guests selecting items at buffet spread",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-15.jpeg",
      alt: "Guests seated enjoying plated meals at decorated table",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-16.jpeg",
      alt: "Man serving from buffet beside beetroot salad bowl",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-17.jpeg",
      alt: "Long table setting with guests dining",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-18.jpeg",
      alt: "Woman in black dress plating from buffet",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-19.jpeg",
      alt: "Elderly guests enjoying plated meals",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-20.jpeg",
      alt: "Ladies in line with plates at buffet",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-21.jpeg",
      alt: "Guest in white dress serving from buffet",
      category: "Catering",
    },
    {
      src: "/catering/gq-baptism-22.jpeg",
      alt: "Smiling guest holding full plate at buffet",
      category: "Catering",
    },
    
    {
      src: "/catering/berry-dessert-closeup.jpg",
      alt: "Elegant berry dessert with fresh berries and cream - Bang's Kitchen catering",
      category: "Catering",
    },
    {
      src: "/catering/buffet-rice-pilaf.jpg",
      alt: "Professional buffet setup with seasoned rice pilaf - Bang's Kitchen catering",
      category: "Catering",
    },
    {
      src: "/catering/buffet-rice-setup.jpg",
      alt: "Elegant buffet rice station setup for corporate events",
      category: "Catering",
    },
    {
      src: "/catering/chafing-dishes-setup.jpg",
      alt: "Professional chafing dishes setup for event catering",
      category: "Catering",
    },
    {
      src: "/catering/chef-food-preparation.jpg",
      alt: "Professional chef preparing fresh meals in Bang's Kitchen",
      category: "Catering",
    },
    {
      src: "/catering/elegant-dessert-glasses.jpg",
      alt: "Elegant individual dessert glasses for special events",
      category: "Catering",
    },
    {
      src: "/catering/glazed-chicken-wings.jpg",
      alt: "Perfectly glazed chicken wings for catering events",
      category: "Catering",
    },
    {
      src: "/catering/golden-chafing-dishes.jpg",
      alt: "Golden chafing dishes setup for premium catering service",
      category: "Catering",
    },
    {
      src: "/catering/individual-dessert-containers.jpg",
      alt: "Individual dessert containers for corporate catering",
      category: "Catering",
    },
    {
      src: "/catering/kitchen-meal-plating.jpg",
      alt: "Professional meal plating in Bang's Kitchen facility",
      category: "Catering",
    },
    {
      src: "/catering/mixed-vegetable-salad.jpg",
      alt: "Fresh mixed vegetable salad for healthy catering options",
      category: "Catering",
    },
    {
      src: "/catering/professional-staff-service.jpg",
      alt: "Professional catering staff providing excellent service",
      category: "Catering",
    },
    {
      src: "/catering/seasoned-rice-dish.jpg",
      alt: "Perfectly seasoned rice dish for catering events",
      category: "Catering",
    },
    {
      src: "/catering/takeaway-meal-containers.jpg",
      alt: "Professional takeaway meal containers for corporate catering",
      category: "Catering",
    },

    // Daily Lunches images
    {
      src: "/daily-lunches/481203096_1187282893400618_1345484972182424170_n.jpg",
      alt: "Fresh daily lunch with rice, protein and vegetables",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/481906702_1187282883400619_5008085195835112346_n.jpg",
      alt: "Nutritious daily lunch meal with balanced portions",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/491172501_1226382349490672_2145495982241697794_n.jpg",
      alt: "Healthy daily lunch option with fresh ingredients",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/492337211_1237932238335683_7466335485251047585_n.jpg",
      alt: "Complete daily lunch with protein, starch and vegetables",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/492346319_1237402288388678_5895064049593922587_n.jpg",
      alt: "Fresh daily lunch meal prepared with care",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/492346578_1237932291669011_8877401357647101466_n.jpg",
      alt: "Balanced daily lunch with wholesome ingredients",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/492515195_1237932271669013_56829488411833666_n.jpg",
      alt: "Nutritious daily lunch option for health-conscious individuals",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/492537557_1237932248335682_8809087440232750142_n.jpg",
      alt: "Fresh daily lunch with variety of healthy options",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/492995733_1237160148412892_889380603397505383_n.jpg",
      alt: "Complete daily lunch meal with balanced nutrition",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/493025801_1237932241669016_2056164249036162768_n.jpg",
      alt: "Healthy daily lunch prepared fresh daily",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/493407409_1237931885002385_411516908567048758_n.jpg",
      alt: "Nutritious daily lunch with fresh ingredients",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/494021461_1237932231669017_3100902410644704058_n.jpg",
      alt: "Fresh daily lunch option with balanced portions",
      category: "Daily Lunches",
    },
    {
      src: "/daily-lunches/494033973_1237932015002372_3378161071645685822_n.jpg",
      alt: "Complete daily lunch meal for busy professionals",
      category: "Daily Lunches",
    },

    // Kids Lunches images
    {
      src: "/kids-lunches/476749179_2528382490692472_5856390845668017042_n.jpg",
      alt: "Nutritious kids lunchbox with balanced meal options",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/476831412_2528382497359138_8658595304188602293_n.jpg",
      alt: "Healthy kids lunch with fun and appealing presentation",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/476833308_2528382547359133_7314321342168720077_n.jpg",
      alt: "Complete kids lunchbox with protein, vegetables and fruit",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/476837341_2528382564025798_2396343351155918004_n.jpg",
      alt: "Balanced kids lunch designed for growing children",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/478926525_2528382604025794_8115632134599567007_n.jpg",
      alt: "Fresh kids lunch with appealing colors and textures",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/479193625_2528382544025800_2395500239516402684_n.jpg",
      alt: "Complete kids meal with balanced nutrition for school",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/480249305_1176165457845695_305832286925552833_n.jpg",
      alt: "Healthy kids lunchbox prepared fresh daily",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/kids-lunch-1.jpeg",
      alt: "Complete kids meal with balanced nutrition for school",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/kids-lunch-2.jpeg",
      alt: "Complete kids meal with balanced nutrition for school",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/kids-lunch-3.jpeg",
      alt: "Complete kids meal with balanced nutrition for school",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/kids-lunch-4.jpeg",
      alt: "Complete kids meal with balanced nutrition for school",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/480930245_1182320450563529_9036503546052551574_n.jpg",
      alt: "Balanced kids meal for healthy growth and development",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/481047124_1182320730563501_2368683185822094643_n.jpg",
      alt: "Fresh kids lunchbox with variety of nutritious options",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/481073757_1182320463896861_9223261339261445279_n.jpg",
      alt: "Complete kids lunch designed for school nutrition programs",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/481356622_1182320740563500_1776158771200523908_n.jpg",
      alt: "Healthy kids meal with appealing presentation for children",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/481806295_1182320717230169_3214428482879202830_n.jpg",
      alt: "Nutritious kids lunchbox with balanced meal components",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/491407894_1229147882547452_4717056897435433336_n.jpg",
      alt: "Fresh kids lunch prepared with care and nutrition in mind",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/491833454_1229147975880776_1737797593985282231_n.jpg",
      alt: "Complete kids meal for healthy school lunch programs",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/491945022_1229147852547455_6648937127991742149_n.jpg",
      alt: "Balanced kids lunchbox with variety and nutrition",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/492044992_1229147892547451_8555780298247531341_n.jpg",
      alt: "Healthy kids lunch with fun and nutritious components",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/492373734_1237932261669014_7049745225411065264_n.jpg",
      alt: "Fresh kids meal designed for growing children's needs",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/492796966_1237932151669025_5999791944956084667_n.jpg",
      alt: "Nutritious kids lunchbox with balanced meal planning",
      category: "Kids Lunches",
    },
    {
      src: "/kids-lunches/493875419_1237932235002350_5597745648009385316_n.jpg",
      alt: "Complete kids lunch with healthy and appealing options",
      category: "Kids Lunches",
    },

    // Platters images
    {
      src: "/platters/481765981_1187282813400626_6714688174663336075_n.jpg",
      alt: "Elegant catering platter with variety of appetizers",
      category: "Platters",
    },
    {
      src: "/platters/481978276_1186656826796558_7753070077309086613_n.jpg",
      alt: "Professional meat platter for corporate events",
      category: "Platters",
    },
    {
      src: "/platters/482003926_1186656580129916_6329257022179310901_n.jpg",
      alt: "Fresh fruit and cheese platter for special occasions",
      category: "Platters",
    },
    {
      src: "/platters/490001263_1227088692753371_4381965547805190675_n.jpg",
      alt: "Gourmet platter with variety of delicious options",
      category: "Platters",
    },
    {
      src: "/platters/490568963_1227088849420022_4852535561635832081_n.jpg",
      alt: "Professional catering platter for business meetings",
      category: "Platters",
    },
    {
      src: "/platters/490749640_1227088882753352_6618178376350469291_n.jpg",
      alt: "Elegant appetizer platter for corporate catering",
      category: "Platters",
    },
    {
      src: "/platters/490804793_1227088622753378_4574853146873811831_n.jpg",
      alt: "Fresh sandwich and wrap platter for events",
      category: "Platters",
    },
    {
      src: "/platters/491103427_1227088876086686_2461231830743385521_n.jpg",
      alt: "Gourmet meat platter with premium selections",
      category: "Platters",
    },
    {
      src: "/platters/491237377_1237064418422465_3965990725960949465_n.jpg",
      alt: "Professional catering platter for special events",
      category: "Platters",
    },
    {
      src: "/platters/491815868_1227088836086690_4776715414300140096_n.jpg",
      alt: "Elegant fruit and cheese platter for gatherings",
      category: "Platters",
    },
    {
      src: "/platters/492241991_1237064231755817_8317343100278241488_n.jpg",
      alt: "Fresh appetizer platter for corporate catering",
      category: "Platters",
    },
    {
      src: "/platters/492316623_1237402211722019_3718360433017587490_n.jpg",
      alt: "Gourmet platter with variety of premium options",
      category: "Platters",
    },
    {
      src: "/platters/492405460_1237402438388663_7886995631528913099_n.jpg",
      alt: "Professional meat and cheese platter for events",
      category: "Platters",
    },
    {
      src: "/platters/492439170_1237402428388664_2822130559979546941_n.jpg",
      alt: "Elegant catering platter for business functions",
      category: "Platters",
    },
    {
      src: "/platters/492540933_1237402325055341_6736125375779395778_n.jpg",
      alt: "Fresh and delicious platter for special occasions",
      category: "Platters",
    },
    {
      src: "/platters/492745389_1237064425089131_2314560742001204135_n.jpg",
      alt: "Premium catering platter with gourmet selections",
      category: "Platters",
    },
  ]

  // Filter images based on active tag
  const filteredImages = useMemo(() => {
    if (activeTag === "All") {
      return galleryImages
    }
    return galleryImages.filter((image) => image.category === activeTag)
  }, [activeTag, galleryImages])

  const tags: GalleryTag[] = ["All", "Catering", "Daily Lunches", "Kids Lunches", "Platters"]

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return

      if (e.key === "Escape") {
        closeImageModal()
      } else if (e.key === "ArrowLeft") {
        goToPrevious(selectedImageIndex)
      } else if (e.key === "ArrowRight") {
        goToNext(selectedImageIndex, filteredImages.length)
      }
    }

    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex, filteredImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary shadow-sm border-b border-primary sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.svg" alt="Bang's Kitchen Logo" width={50} height={50} className="h-12 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-white hover:text-orange transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-white hover:text-orange transition-colors">
              About
            </Link>
            <Link href="/gallery" className="text-white hover:text-orange transition-colors">
              Gallery
            </Link>
            <Link href="/menu" className="text-white hover:text-orange transition-colors cursor-pointer">
              Menu
            </Link>
            <Link href="/#contact" className="text-white hover:text-orange transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:block bg-orange hover:bg-orange/90 text-white" onClick={openModal}>
              Get Quote
            </Button>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-orange transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-[73px] bg-primary z-30 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-6">
            <Link
              href="/#services"
              className="text-white hover:text-orange transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-orange transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-orange transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/menu"
              className="text-white hover:text-orange transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-orange transition-colors text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-orange hover:bg-orange/90 text-white w-full"
              onClick={() => {
                openModal()
                setIsMobileMenuOpen(false)
              }}
            >
              Get Quote
            </Button>
          </nav>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </header>

      {/* Back to Home */}
      <div className="bg-cream py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-primary hover:text-orange transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Gallery Header */}
      <section className="bg-cream py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">BANG'S KITCHEN</h1>
          <h2 className="text-3xl font-bold text-orange mb-6">Gallery</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Explore our delicious creations from catering, daily lunches, kids' meals, and elegant
            platters. Every dish is prepared with care and the finest ingredients.
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-8 bg-white border-b border-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-orange hover:bg-orange/90 text-white border-orange"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Showing {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"}
              {activeTag !== "All" && ` in ${activeTag}`}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openImageModal(index)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-orange text-white px-2 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium line-clamp-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found for the selected category.</p>
              <Button
                variant="outline"
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => setActiveTag("All")}
              >
                View All Images
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Experience Our Delicious Meals?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From elegant catering to daily nutrition, Bang's Kitchen delivers fresh, healthy meals that exceed
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3" onClick={openModal}>
              Get Your Quote Today
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              asChild
            >
              <Link href="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.svg" alt="Bang's Kitchen Logo" width={40} height={40} className="h-10 w-auto" />
              </div>
              <p className="text-white/80">
                Catering excellence for individuals, corporations, and schools.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-4">Services</h5>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/#services" className="hover:text-orange transition-colors">
                    Individual Meals
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-orange transition-colors">
                    Catering Services
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-orange transition-colors">
                    School Lunches
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-4">Company</h5>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/#about" className="hover:text-orange transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-orange transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-orange transition-colors cursor-pointer" href="/menu">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-orange transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-4">Contact</h5>
              <ul className="space-y-2 text-white/80">
                <li>072 107 7389 / 078 208 4979</li>
                <li>info@bangskitchen.co.za</li>
                <li>
                  57 Moffat Street N18
                  <br />
                  (Mafikeng Road)
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">© 2025 Bang's Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange transition-colors z-10"
            onClick={closeImageModal}
            aria-label="Close modal"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          {selectedImageIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange transition-colors z-10 bg-black/50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious(selectedImageIndex)
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* Next Button */}
          {selectedImageIndex < filteredImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange transition-colors z-10 bg-black/50 rounded-full p-2"
              onClick={(e) => {
                e.stopPropagation()
                goToNext(selectedImageIndex, filteredImages.length)
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={filteredImages[selectedImageIndex].src || "/placeholder.svg"}
                alt={filteredImages[selectedImageIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto h-auto"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center text-white max-w-3xl">
              <div className="mb-2">
                <span className="bg-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                  {filteredImages[selectedImageIndex].category}
                </span>
              </div>
              <p className="text-lg">{filteredImages[selectedImageIndex].alt}</p>
              <p className="text-sm text-white/70 mt-2">
                {selectedImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
