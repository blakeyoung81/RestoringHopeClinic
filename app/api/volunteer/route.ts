import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema for volunteer form
const volunteerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2, 'State is required'),
  zipCode: z.string().min(5, 'ZIP code is required'),
  roles: z.array(z.string()).min(1, 'Please select at least one role'),
  availability: z.array(z.string()).min(1, 'Please select your availability'),
  experience: z.string().optional(),
  motivation: z.string().min(10, 'Please tell us why you want to volunteer'),
  backgroundCheck: z.boolean().refine(val => val === true, 'Background check consent is required'),
  references: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = volunteerSchema.parse(body)
    
    // TODO: In a real application, you would:
    // 1. Save to Airtable
    // 2. Send confirmation email via Resend
    // 3. Send notification to admin
    
    // Simulate Airtable insertion
    console.log('Would save to Airtable:', validatedData)
    
    // Simulate Resend email
    console.log('Would send email to:', validatedData.email)
    console.log('Would BCC admin@restoringhopeclinic.org')
    
    // For now, just return success
    return NextResponse.json(
      { 
        message: 'Volunteer application submitted successfully!',
        id: `vol_${Date.now()}` // Simulate generated ID
      },
      { status: 201 }
    )
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors 
        },
        { status: 400 }
      )
    }
    
    console.error('Volunteer API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Example implementation with actual Airtable and Resend integration:
/*
import Airtable from 'airtable'
import { Resend } from 'resend'

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
const base = airtable.base(process.env.AIRTABLE_BASE_ID!)
const resend = new Resend(process.env.RESEND_API_KEY)

// Inside the POST function:
try {
  // Save to Airtable
  const record = await base('Volunteers').create([
    {
      fields: {
        'First Name': validatedData.firstName,
        'Last Name': validatedData.lastName,
        'Email': validatedData.email,
        'Phone': validatedData.phone,
        'Address': validatedData.address,
        'City': validatedData.city,
        'State': validatedData.state,
        'ZIP Code': validatedData.zipCode,
        'Roles': validatedData.roles.join(', '),
        'Availability': validatedData.availability.join(', '),
        'Experience': validatedData.experience || '',
        'Motivation': validatedData.motivation,
        'Background Check Consent': validatedData.backgroundCheck,
        'References': validatedData.references || '',
        'Status': 'New Application',
        'Submitted': new Date().toISOString(),
      }
    }
  ])

  // Send confirmation email
  await resend.emails.send({
    from: 'Restoring Hope Clinic <noreply@restoringhopeclinic.org>',
    to: [validatedData.email],
    bcc: ['admin@restoringhopeclinic.org'],
    subject: 'Thank you for your volunteer application!',
    html: `
      <h1>Thank you for applying to volunteer!</h1>
      <p>Dear ${validatedData.firstName},</p>
      <p>We've received your volunteer application and are excited about your interest in joining our team.</p>
      <p>We'll review your application and get back to you within 3-5 business days.</p>
      <p>Best regards,<br>The Restoring Hope Clinic Team</p>
    `
  })

  return NextResponse.json({
    message: 'Application submitted successfully!',
    id: record[0].id
  })
} catch (error) {
  // Handle errors
}
*/ 