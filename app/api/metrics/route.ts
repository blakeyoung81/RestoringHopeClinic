import { NextResponse } from 'next/server'

export async function GET() {
  // In a real application, this would fetch from a database
  const metrics = {
    patientsServed: 2547,
    volunteerHours: 15234,
    yearsOfService: 8,
    appointmentsThisMonth: 156,
    volunteersActive: 89,
    servicesOffered: 12,
    lastUpdated: new Date().toISOString(),
  }

  return NextResponse.json(metrics)
} 