import { NextRequest, NextResponse } from 'next/server';
import { getDatabase, saveDatabase } from '@/lib/server-db';
import { Enquiry } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phoneNumber, email, productSelection, quantity, message } = body;

    // Validate required fields
    if (!fullName || !fullName.trim()) {
      return NextResponse.json({ error: 'Full Name is required' }, { status: 400 });
    }
    if (!phoneNumber || !phoneNumber.trim()) {
      return NextResponse.json({ error: 'Phone Number is required' }, { status: 400 });
    }

    const db = getDatabase();

    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: (email || '').trim(),
      productSelection: productSelection || 'Coarse Aggregates',
      quantity: (quantity || '').trim(),
      message: (message || '').trim(),
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    // Prepend new enquiry
    db.enquiries.unshift(newEnquiry);
    saveDatabase(db);

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully! Our dispatch team will contact you shortly.',
      enquiryId: newEnquiry.id
    });
  } catch (err: any) {
    console.error('Error in /api/enquiry:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or call +91 95338 95920.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = getDatabase();
    return NextResponse.json({
      success: true,
      enquiries: db.enquiries
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to retrieve enquiries' }, { status: 500 });
  }
}
