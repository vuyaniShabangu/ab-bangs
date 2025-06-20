"use server"

import nodemailer from "nodemailer"

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
    // Create transporter with SMTP configuration
    const transporter = nodemailer.createTransporter({
      host: "mail.bearfruit.co.za",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "ab-360@bearfruit.co.za",
        pass: "ATbKm[l+&[S]",
      },
    })

    // Format the service name for display
    const serviceNames = {
      individual: "Individual Meals",
      corporate: "Catering Services",
      school: "School Lunches",
    }

    const serviceName = serviceNames[formData.service as keyof typeof serviceNames] || formData.service

    // Build the email content based on service type
    let serviceDetails = ""
    let serviceDetailsHtml = ""

    if (formData.service === "individual") {
      serviceDetails = `
Service Details:
- Service Type: ${formData.isContinuous ? "Continuous delivery" : "One-off service"}
- Dietary Requirements: ${formData.dietaryRequirements || "None specified"}
- ${formData.isContinuous ? "Start Date" : "Event Date"}: ${formData.startDate}
      `
      serviceDetailsHtml = `
        <h3>Service Details:</h3>
        <ul>
          <li><strong>Service Type:</strong> ${formData.isContinuous ? "Continuous delivery" : "One-off service"}</li>
          <li><strong>Dietary Requirements:</strong> ${formData.dietaryRequirements || "None specified"}</li>
          <li><strong>${formData.isContinuous ? "Start Date" : "Event Date"}:</strong> ${formData.startDate}</li>
        </ul>
      `
    } else if (formData.service === "corporate") {
      serviceDetails = `
Service Details:
- Number of People: ${formData.numberOfPeople}
- Event Description: ${formData.eventDescription}
- Event Date: ${formData.eventDate}
- Event Time: ${formData.eventTime}
      `
      serviceDetailsHtml = `
        <h3>Service Details:</h3>
        <ul>
          <li><strong>Number of People:</strong> ${formData.numberOfPeople}</li>
          <li><strong>Event Description:</strong> ${formData.eventDescription}</li>
          <li><strong>Event Date:</strong> ${formData.eventDate}</li>
          <li><strong>Event Time:</strong> ${formData.eventTime}</li>
        </ul>
      `
    } else if (formData.service === "school") {
      serviceDetails = `
Service Details:
- School Name: ${formData.schoolName}
- Dietary Requirements: ${formData.schoolDietaryRequirements || "None specified"}
- Start Date: ${formData.schoolStartDate}
- Package Type: ${formData.packageType}
      `
      serviceDetailsHtml = `
        <h3>Service Details:</h3>
        <ul>
          <li><strong>School Name:</strong> ${formData.schoolName}</li>
          <li><strong>Dietary Requirements:</strong> ${formData.schoolDietaryRequirements || "None specified"}</li>
          <li><strong>Start Date:</strong> ${formData.schoolStartDate}</li>
          <li><strong>Package Type:</strong> ${formData.packageType}</li>
        </ul>
      `
    }

    // Plain text email content
    const emailText = `
New Quote Request - Bang's Kitchen

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Contact Number: ${formData.contactNumber}

Service Requested: ${serviceName}

${serviceDetails}

Please follow up with this customer as soon as possible.

---
This email was automatically generated from the Bang's Kitchen website.
    `

    // HTML email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Quote Request - Bang's Kitchen</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #39564A; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .service-badge { background-color: #E2711D; color: white; padding: 5px 10px; border-radius: 5px; display: inline-block; margin: 10px 0; }
            ul { background-color: white; padding: 15px; border-left: 4px solid #E2711D; }
            .footer { background-color: #39564A; color: white; padding: 15px; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Quote Request</h1>
              <p>Bang's Kitchen</p>
            </div>
            
            <div class="content">
              <h2>Contact Information</h2>
              <ul>
                <li><strong>Name:</strong> ${formData.name}</li>
                <li><strong>Email:</strong> ${formData.email}</li>
                <li><strong>Contact Number:</strong> ${formData.contactNumber}</li>
              </ul>
              
              <h2>Service Requested</h2>
              <div class="service-badge">${serviceName}</div>
              
              ${serviceDetailsHtml}
              
              <p><strong>Action Required:</strong> Please follow up with this customer as soon as possible.</p>
            </div>
            
            <div class="footer">
              This email was automatically generated from the Bang's Kitchen website.
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to both recipients
    const mailOptions = {
      from: '"Bang\'s Kitchen Website" <ab-360@bearfruit.co.za>',
      to: ["vuyani.shabangu@gmail.com", "angskitchenandcatering@gmail.com"],
      subject: `New Quote Request - ${serviceName} - ${formData.name}`,
      text: emailText,
      html: emailHtml,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    console.log("Email sent successfully to:")
    console.log("- vuyani.shabangu@gmail.com")
    console.log("- angskitchenandcatering@gmail.com")

    return { success: true, message: "Quote request sent successfully! We'll contact you within 24 hours." }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send quote request. Please try again or contact us directly at 072 107 7389.",
    }
  }
}
