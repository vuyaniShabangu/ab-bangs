"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, MessageCircle, Facebook, Instagram } from "lucide-react"
import { QuoteModal } from "@/components/quote-modal"
import { KidsMenu } from "@/constants/kidsMenu"

export default function MenuPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary shadow-sm border-b border-primary">
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
            <Link className="text-white hover:text-orange transition-colors cursor-pointer" href="/menu">Menu</Link>
            <Link href="/#contact" className="text-white hover:text-orange transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-orange hover:bg-orange/90 text-white" onClick={() => openModal()}>
            Get Quote
          </Button>
        </div>
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

      {/* Menu Header */}
      <section className="bg-cream py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">BANG'S KITCHEN</h1>
          <h2 className="text-3xl font-bold text-orange mb-6">Complete Menu</h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            From intimate gatherings to large corporate events, we have the perfect catering solution for every
            occasion.
          </p>
        </div>
      </section>

      {/* Daily Meals */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-primary text-center mb-12">DAILY MEALS</h3>
          <p className="text-center text-lg text-gray-700 mb-6">1 Protein served with 3 sides (subject to availability).</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-orange transition-colors" style={{ borderColor: '#39564a' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">PROTEINS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="font-bold">Sirloin steak</span>
                  <span className="text-orange font-bold">R105.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="font-bold">Mutton Chops</span>
                  <span className="text-orange font-bold">R115.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="font-bold">Chicken Wings</span>
                  <span className="text-orange font-bold">R90.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="font-bold">Hake</span>
                  <span className="text-orange font-bold">R75.00</span>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <span className="font-bold text-primary">Combo Meal</span>
                  <span className="text-sm text-gray-600">(x2 R160 proteins + sides)</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-orange transition-colors md:col-span-2 lg:col-span-2" style={{ borderColor: '#39564a' }}>
              <CardHeader>
                <CardTitle className="text-xl text-primary">SIDES <span className="text-orange">@R18.00 each</span></CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <span>1. Potatoes and mushrooms</span>
                <span>2. Green salad</span>
                <span>3. Sweet carrots</span>
                <span>4. Broccoli</span>
                <span>5. Cauliflower</span>
                <span>6. Slaw</span>
                <span>7. Butternut</span>
                <span>8. Creamed spinach</span>
                <span>9. Potato Bake</span>
                <span>10. Seasonal Veg Bake</span>
                <span>11. Mash potatoes</span>
                <span>12. Chips</span>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3" onClick={() => openModal("daily")}>Get Daily Meal Quote</Button>
          </div>
        </div>
      </section>

      {/* Kids Lunchbox Packages */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-primary text-center mb-8">KIDS LUNCHBOX PACKAGES</h3>
          <p className="text-center text-lg text-gray-600 mb-4">
            "All meals delivered to school or collected"
          </p>
          <p className="text-center text-sm text-orange font-bold mb-12">NB: Local schools only</p>

          {/* Daily Menu Options */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-primary mb-6 text-center">Kids Pre-School/Creche Daily Menu Options</h4>
            <div className="overflow-x-auto ">
              <table className="w-full border-collapse border border-cream">
                <thead className="rounded-t-md">
                  <tr className="bg-primary text-white">
                    <th className="border border-cream p-3 text-left">Day</th>
                    <th className="border border-cream p-3 text-left">Lunch</th>
                    <th className="border border-cream p-3 text-left">Veg (Cooked/Fresh)</th>
                    <th className="border border-cream p-3 text-left">Snack</th>
                    <th className="border border-cream p-3 text-left">Drink</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="hover:bg-cream/50">
                    <td className="border border-cream p-3 font-bold">01</td>
                    <td className="border border-cream p-3">Rice & Chicken Drumsticks</td>
                    <td className="border border-cream p-3">Cauliflower/Broccoli</td>
                    <td className="border border-cream p-3">Fruit + Yogurt</td>
                    <td className="border border-cream p-3">Juice</td>
                  </tr>
                  <tr className="hover:bg-cream/50">
                    <td className="border border-cream p-3 font-bold">02</td>
                    <td className="border border-cream p-3">Mash Potato & Wors</td>
                    <td className="border border-cream p-3">Butternut</td>
                    <td className="border border-cream p-3">Fruit + Yogurt</td>
                    <td className="border border-cream p-3">Juice</td>
                  </tr>
                  <tr className="hover:bg-cream/50">
                    <td className="border border-cream p-3 font-bold">03</td>
                    <td className="border border-cream p-3">Pasta and Meatballs</td>
                    <td className="border border-cream p-3">Baby Tomatoes</td>
                    <td className="border border-cream p-3">Fruit + Yogurt</td>
                    <td className="border border-cream p-3">Juice</td>
                  </tr>
                  <tr className="hover:bg-cream/50">
                    <td className="border border-cream p-3 font-bold">04</td>
                    <td className="border border-cream p-3">Sweet Potato Chips + Hake</td>
                    <td className="border border-cream p-3">Coleslaw (Cabbage+Carrots)</td>
                    <td className="border border-cream p-3">Fruit + Yogurt</td>
                    <td className="border border-cream p-3">Juice</td>
                  </tr>
                  <tr className="hover:bg-cream/50">
                    <td className="border border-cream p-3 font-bold">05</td>
                    <td className="border border-cream p-3">Mealie Rice & Chicken Wing</td>
                    <td className="border border-cream p-3">Sweet Corn</td>
                    <td className="border border-cream p-3">Fruit + Yogurt</td>
                    <td className="border border-cream p-3">Juice</td>
                  </tr>
                  <tr className="hover:bg-cream/50">
                    <td className="border border-cream p-3 font-bold">06</td>
                    <td className="border border-cream p-3">Fish & Potato Chips</td>
                    <td className="border border-cream p-3">Coleslaw</td>
                    <td className="border border-cream p-3">Fruit + Yogurt</td>
                    <td className="border border-cream p-3">Juice</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Package Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader className="flex items-center bg-orange text-white min-h-32 space-y-0 justify-center rounded-t-md">
                <CardTitle className="text-center pb-2">FULL PACKAGE</CardTitle>
                <p className="text-center text-sm">Meal + Juice + Yogurt + Fruit & Chips</p>
                <p className="text-center text-sm">*See menu options below</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-cream pb-2">
                    <span className="font-bold">Daily:</span>
                    <span className="text-xl font-bold text-orange">R150.00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-cream pb-2">
                    <span className="font-bold">Weekly:</span>
                    <span className="text-xl font-bold text-orange">R400.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Monthly:</span>
                    <span className="text-xl font-bold text-orange">R1200.00</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-white"
                  onClick={() => openModal("school")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader className="flex items-center bg-primary text-white h-32 space-y-0 justify-center rounded-t-md">
                <CardTitle className="text-center pb-2">PRE-SCHOOL/ CRECHE PACKAGE</CardTitle>
                <p className="text-center text-sm">Meal + Juice + Yogurt + Fruit & Chips</p>
                <p className="text-center text-sm">*See menu options below</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-cream pb-2">
                    <span className="font-bold">Daily:</span>
                    <span className="text-xl font-bold text-orange">R120.00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-cream pb-2">
                    <span className="font-bold">Weekly:</span>
                    <span className="text-xl font-bold text-orange">R350.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Monthly:</span>
                    <span className="text-xl font-bold text-orange"> R800.00</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-white"
                  onClick={() => openModal("school")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader className="flex items-center bg-primary text-white h-32 space-y-0 justify-center rounded-t-md">
                <CardTitle className="text-center  pb-2">BUDGET / AFTERCARE PACKAGE</CardTitle>
                <p className="text-center text-sm">Meal + Juice + Yogurt + Fruit & Chips</p>
                <p className="text-center text-sm">*See menu options below</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-cream pb-2">
                    <span className="font-bold">Daily:</span>
                    <span className="text-xl font-bold text-orange">R100.00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-cream pb-2">
                    <span className="font-bold">Weekly:</span>
                    <span className="text-xl font-bold text-orange">R350.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Monthly:</span>
                    <span className="text-xl font-bold text-orange"> R900.00</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-white"
                  onClick={() => openModal("school")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <h1 className="text-2xl font-bold text-primary mb-6 text-center">Kids Lunch Menu</h1>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {KidsMenu.map((menu, index) => (
                <Card className="h-20 flex flex-col justify-center items-center p-2 mb-1 hover:shadow-md">
                  <h1 className="text-center">{menu}</h1>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platter Menu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-primary text-center mb-12">PLATTER MENU</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-primary">MEAT PLATTERS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b border-cream pb-4">
                  <h4 className="font-bold text-primary mb-2">BANG! SPECIAL</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Chicken wings, meatballs, cocktail sausages, pastries & nuggets
                  </p>
                  <p className="text-2xl font-bold text-orange">R800</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">MEATY PLATTER</h4>
                  <p className="text-gray-600 text-sm mb-2">Chicken wings, meatballs, pork ribs, nuggets, wors</p>
                  <p className="text-2xl font-bold text-orange">R950</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-primary">FRESH OPTIONS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b border-cream pb-4">
                  <h4 className="font-bold text-primary mb-2">FRUIT PLATTER</h4>
                  <p className="text-gray-600 text-sm mb-2">Selection of seasonal fruit</p>
                  <p className="text-2xl font-bold text-orange">R650</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">CHEESE, CRACKERS & BILTON</h4>
                  <p className="text-2xl font-bold text-orange">R650</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-primary">WRAPS & SANDWICHES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b border-cream pb-4">
                  <h4 className="font-bold text-primary mb-2">SANDWICH PLATTER</h4>
                  <p className="text-2xl font-bold text-orange">R550</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">CHICKEN WRAP PLATTER</h4>
                  <p className="text-2xl font-bold text-orange">R680</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catering Services */}
      <section className="py-16" style={{ backgroundColor: '#f1e1d3' }}>
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-primary text-center mb-12">CATERING SERVICES</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader className="bg-primary text-white rounded-t-md">
                <CardTitle className="text-center">WEDDING & EVENTS</CardTitle>
                <p className="text-center text-3xl font-bold text-orange">R355 P/P</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Welcome drinks + starter table</li>
                  <li>• 3 Starch options</li>
                  <li>• 3 Protein options</li>
                  <li>• 3 Vegetable options</li>
                  <li>• 3 Salad options</li>
                  <li>• Dessert (2 varieties)</li>
                </ul>
                <Button
                  className="w-full mt-4 bg-orange hover:bg-orange/90 text-white"
                  onClick={() => openModal("corporate")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader className="bg-primary text-white rounded-t-md">
                <CardTitle className="text-center">GOV & CORPORATE</CardTitle>
                <p className="text-center text-3xl font-bold text-orange">R160 P/P</p>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">LUNCH</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2 Starch options</li>
                  <li>• 2 Protein options</li>
                  <li>• 2 Vegetable options</li>
                  <li>• 2 Salad options</li>
                  <li>• Assorted soft drinks</li>
                </ul>
                <Button
                  className="w-full mt-4 bg-orange hover:bg-orange/90 text-white"
                  onClick={() => openModal("corporate")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-orange transition-colors">
              <CardHeader className="bg-primary text-white rounded-t-md">
                <CardTitle className="text-center">PRE PACKED MEALS</CardTitle>
                <p className="text-center text-3xl font-bold text-orange">R110 P/P</p>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">TAKE-AWAY</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 1 Starch option</li>
                  <li>• 1 Protein option</li>
                  <li>• 1 Vegetable option</li>
                  <li>• 1 Salad option</li>
                  <li>• Assorted soft drinks</li>
                </ul>
                <Button
                  className="w-full mt-4 bg-orange hover:bg-orange/90 text-white"
                  onClick={() => openModal("individual")}
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-8">CONTACT INFORMATION</h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-white">
              <h4 className="text-xl font-bold mb-4 text-orange">Phone/WhatsApp</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>078 208 4979</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>072 107 7389</span>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h4 className="text-xl font-bold mb-4 text-orange">Social Media</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Facebook className="h-5 w-5" />
                  <span>BangsKitchenandcatering</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Instagram className="h-5 w-5" />
                  <span>BangsKitchen</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-orange hover:bg-orange/90 text-white px-8 py-3" onClick={() => openModal()}>
              Get Your Quote Today
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
                  <Link href="/#about" className="hover:text-orange transition-colors">
                    Our Story
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

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} defaultService={defaultService} />
    </div>
  )
}
