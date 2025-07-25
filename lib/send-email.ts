interface FormData {
  name: string
  email: string
  contactNumber: string
  service: string
  // Individual Meals
  isContinuous?: boolean
  dietaryRequirements?: string
  startDate?: string
  // Corporate Catering
  numberOfPeople?: string
  eventDescription?: string
  eventDate?: string
  eventTime?: string
  // School Lunches
  schoolName?: string
  schoolDietaryRequirements?: string
  schoolStartDate?: string
  packageType?: string
}

export async function sendQuoteEmail(formData: FormData) {
  try {
    const response = await fetch("https://v0-bang-s-kitchen-api.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Failed to send quote request")
    }

    const data = await response.json()
    // Expecting the API to return { success: boolean, message: string }
    return {
      success: data.success ?? true,
      message: data.message ?? "Quote request sent successfully! We'll contact you within 24 hours.",
    }
  } catch (error) {
    console.error("Error sending quote request:", error)
    return {
      success: false,
      message: "Failed to send quote request. Please try again or contact us directly at 072 107 7389.",
    }
  }
}
