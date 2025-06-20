"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Loader2 } from "lucide-react"
//import { sendQuoteEmail } from "@/lib/send-email"
import { SuccessDialog } from "@/components/success-dialog"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  defaultService?: string
}

export function QuoteModal({ isOpen, onClose, defaultService }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    service: defaultService || "",
    // Individual Meals
    isContinuous: false,
    dietaryRequirements: "",
    startDate: "",
    // Corporate Catering
    numberOfPeople: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    // School Lunches
    schoolName: "",
    schoolDietaryRequirements: "",
    schoolStartDate: "",
    packageType: "",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      service: "",
      isContinuous: false,
      dietaryRequirements: "",
      startDate: "",
      numberOfPeople: "",
      eventDescription: "",
      eventDate: "",
      eventTime: "",
      schoolName: "",
      schoolDietaryRequirements: "",
      schoolStartDate: "",
      packageType: "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    /*try {
      const result = await sendQuoteEmail(formData)
      setSubmitResult(result)
      setShowSuccessDialog(true)

      if (result.success) {
        resetForm()
        onClose()
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again or contact us directly.",
      })
      setShowSuccessDialog(true)
    } finally {
      setIsSubmitting(false)
    }*/
      setIsSubmitting(false)
  }

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false)
    setSubmitResult(null)
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-cream">
            <h2 className="text-2xl font-bold text-primary">Get Your Quote</h2>
            <Button variant="ghost" size="sm" onClick={onClose} disabled={isSubmitting}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Basic Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">Contact Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">Service Required</h3>

              <div>
                <Label htmlFor="service">Select Service *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleInputChange("service", value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Meals</SelectItem>
                    <SelectItem value="corporate">Corporate Catering</SelectItem>
                    <SelectItem value="school">School Lunches</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Conditional Fields Based on Service */}
            {formData.service === "individual" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary">Individual Meals Details</h3>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="continuous"
                    checked={formData.isContinuous}
                    onCheckedChange={(checked) => handleInputChange("isContinuous", checked as boolean)}
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="continuous">This is for continuous meal delivery (not a one-off)</Label>
                </div>

                <div>
                  <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                  <Textarea
                    id="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
                    placeholder="Please specify any dietary restrictions, allergies, or preferences..."
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="startDate">{formData.isContinuous ? "Start Date *" : "Event Date *"}</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>
              </div>
            )}

            {formData.service === "corporate" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary">Corporate Catering Details</h3>

                <div>
                  <Label htmlFor="numberOfPeople">Number of People to be Served *</Label>
                  <Input
                    id="numberOfPeople"
                    type="number"
                    min="1"
                    value={formData.numberOfPeople}
                    onChange={(e) => handleInputChange("numberOfPeople", e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="eventDescription">Event Description *</Label>
                  <Textarea
                    id="eventDescription"
                    value={formData.eventDescription}
                    onChange={(e) => handleInputChange("eventDescription", e.target.value)}
                    placeholder="Please describe your event (e.g., board meeting, conference, team lunch, etc.)"
                    required
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="eventTime">Event Time *</Label>
                    <Input
                      id="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={(e) => handleInputChange("eventTime", e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.service === "school" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-primary">School Lunches Details</h3>

                <div>
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    type="text"
                    value={formData.schoolName}
                    onChange={(e) => handleInputChange("schoolName", e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="schoolDietaryRequirements">Dietary Requirements</Label>
                  <Textarea
                    id="schoolDietaryRequirements"
                    value={formData.schoolDietaryRequirements}
                    onChange={(e) => handleInputChange("schoolDietaryRequirements", e.target.value)}
                    placeholder="Please specify any dietary restrictions or special requirements for the students..."
                    disabled={isSubmitting}
                    className="mt-1"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="schoolStartDate">Start Date *</Label>
                    <Input
                      id="schoolStartDate"
                      type="date"
                      value={formData.schoolStartDate}
                      onChange={(e) => handleInputChange("schoolStartDate", e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="packageType">Package Type *</Label>
                    <Select
                      value={formData.packageType}
                      onValueChange={(value) => handleInputChange("packageType", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily Package</SelectItem>
                        <SelectItem value="weekly">Weekly Package</SelectItem>
                        <SelectItem value="monthly">Monthly Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting} className="flex-1">
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-orange hover:bg-orange/90 text-white"
                disabled={
                  !formData.name || !formData.email || !formData.contactNumber || !formData.service || isSubmitting
                }
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success/Error Dialog */}
      {submitResult && (
        <SuccessDialog
          isOpen={showSuccessDialog}
          onClose={handleCloseSuccessDialog}
          title={submitResult.success ? "Quote Request Sent!" : "Error Sending Request"}
          message={submitResult.message}
          isSuccess={submitResult.success}
        />
      )}
    </>
  )
}
