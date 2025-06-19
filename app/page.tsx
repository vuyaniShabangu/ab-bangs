"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Users, Building2, GraduationCap, Leaf, Clock, Heart, ChefHat, Phone, Mail, MapPin } from "lucide-react"
import { QuoteModal } from "@/components/quote-modal"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [defaultService, setDefaultService] = useState<string>("")

  const openModal = (service?: string) => {
    setDefaultService(service || "")
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setDefaultService("")
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  // Add smooth scrolling CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary shadow-sm border-b border-primary sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.svg" alt="Bang's Kitchen Logo" width={50} height={50} className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-orange transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-orange transition-colors cursor-pointer"
            >
              About
            </button>
            <Link href="/gallery" className="text-white hover:text-orange transition-colors">
              Gallery
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-orange transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
          <Button className="bg-orange hover:bg-orange/90 text-white" onClick={() => openModal()}>
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Farm-to-Table
                <span className="block text-orange">Catering Excellence</span>
              </h2>
              <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Delivering freshly prepared, healthy meals that meet the diverse needs of health-conscious individuals,
                corporations, and schools. Where convenience meets wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                  onClick={() => openModal()}
                >
                  Order Now
                </Button>
                <Link href="/menu">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-cooking.jpg"
                  alt="Professional chef at Bang's Kitchen preparing fresh, healthy meals with colorful vegetables and artisanal presentation"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 bg-orange text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Farm Fresh!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-primary px-4 py-2 rounded-full font-bold shadow-lg">
                Convenient!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Our Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customized meal solutions for every need, from individual wellness to corporate events and school
              nutrition programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4">Individual Meals</h4>
                <p className="text-gray-600 mb-6">
                  Perfect for health-conscious professionals aged 25-60 who value their time and wellness. Fresh,
                  nutritious meals delivered to your door.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => openModal("individual")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4">Corporate Catering</h4>
                <p className="text-gray-600 mb-6">
                  Energize your team with nutritious catering for meetings, events, and daily office meals. Keep your
                  workforce productive and healthy.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => openModal("corporate")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-cream rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4">School Lunches</h4>
                <p className="text-gray-600 mb-6">
                  Healthy, appealing meal options that help establish good eating habits from an early age. Supporting
                  families and schools together.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => openModal("school")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Why Choose Bang's Kitchen?</h3>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              We bridge the gap between convenience and wellness with our unique farm-to-table approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Leaf className="h-8 w-8 text-orange" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Farm-to-Table</h4>
              <p className="text-primary/70">
                Fresh ingredients sourced directly from local farms for maximum nutrition and flavor.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <ChefHat className="h-8 w-8 text-orange" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Fresh Preparation</h4>
              <p className="text-primary/70">
                Every meal is freshly prepared by our skilled chefs using the finest ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="h-8 w-8 text-orange" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Customizable</h4>
              <p className="text-primary/70">Tailored solutions to meet your specific dietary needs and preferences.</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Clock className="h-8 w-8 text-orange" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Convenient</h4>
              <p className="text-primary/70">
                Reliable delivery and service that fits seamlessly into your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                Bang's Kitchen is dedicated to delivering freshly prepared, healthy meals that meet the diverse needs of
                our community. Our mission centers on providing nutritious, high-quality food solutions that bridge the
                gap between convenience and wellness.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Operating in a competitive landscape, we differentiate ourselves through our farm-to-table approach,
                emphasis on fresh preparation, and ability to customize solutions for each client's specific needs.
              </p>
              <Button className="bg-orange hover:bg-orange/90 text-white">Learn Our Story</Button>
            </div>
            <div className="bg-cream rounded-lg p-8">
              <Image
                src="/mission-catering.jpg"
                alt="Beautifully arranged catering spread with gourmet appetizers including avocado shrimp crostini, charcuterie, and fresh fruits showcasing Bang's Kitchen's catering expertise"
                width={500}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Experience Fresh, Healthy Meals?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of health-conscious individuals, corporations, and schools who trust Bang's Kitchen for
            their nutritious meal solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white border-white" />
            <Button className="bg-orange hover:bg-orange/90 text-white whitespace-nowrap">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">Get In Touch</h3>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Ready to start your journey with Bang's Kitchen? Contact us today for a customized quote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Phone className="h-8 w-8 text-orange" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Call Us</h4>
              <p className="text-primary/70">072 107 7389 / 078 208 4979</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Mail className="h-8 w-8 text-orange" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Email Us</h4>
              <p className="text-primary/70">info@bangskitchen.co.za</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <MapPin className="h-8 w-8 text-orange" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2">Visit Us</h4>
              <p className="text-primary/70">
                57 Moffat Street N18
                <br />
                (Mafikeng Road)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.svg" alt="Bang's Kitchen Logo" width={40} height={40} className="h-10 w-auto" />
              </div>
              <p className="text-white/80">
                Farm-to-table catering excellence for individuals, corporations, and schools.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-4">Services</h5>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link href="/menu" className="hover:text-orange transition-colors">
                    Individual Meals
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:text-orange transition-colors">
                    Corporate Catering
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="hover:text-orange transition-colors">
                    School Lunches
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-bold text-white mb-4">Company</h5>
              <ul className="space-y-2 text-white/80">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-orange transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-orange transition-colors cursor-pointer"
                  >
                    Our Story
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-orange transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
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

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} defaultService={defaultService} />
    </div>
  )
}
