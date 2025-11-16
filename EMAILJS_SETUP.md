# EmailJS Setup Guide for Global Park Contact Form

## What I've Done

I've updated your `ContactForm.tsx` to send emails directly from the frontend using **EmailJS**. This is perfect for Vercel since it doesn't require a backend!

## Features Added

✅ **Frontend Email Sending** - No backend needed
✅ **Success & Error Messages** - User feedback with animations
✅ **Form Reset** - Clears form after successful submission
✅ **Loading State** - Button shows "Sending..." and prevents double-submission
✅ **Auto-hide Messages** - Status messages disappear after 5 seconds
✅ **Disabled Inputs** - Form fields are disabled while sending

## Setup Instructions

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create your account

### Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services** (left sidebar)
2. Click **Add Service**
3. Select **Gmail** (or your preferred email provider)
4. Click **Create Service**
5. Log in with your email (globalpark05@gmail.com)
6. Follow the authorization steps
7. Copy your **Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Set the template name to: `contact_form_template`
4. Use this template structure:

**Template Content:**
```
Subject: {{subject}}

New message from {{from_name}} ({{from_email}})

Message:
{{message}}

---
To reply, send an email to: {{reply_to}}
```

**Template Variables:**
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{subject}}` - Subject line
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email

5. Set recipient email to: `globalpark05@gmail.com`
6. Save template
7. Copy your **Template ID** (looks like: `template_xxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** (left sidebar)
2. Click **API Keys**
3. Copy your **Public Key**

### Step 5: Update Your Code

Replace these values in `src/components/ContactForm.tsx`:

```typescript
const SERVICE_ID = 'service_xxxxx';      // Your Service ID
const TEMPLATE_ID = 'template_xxxxx';    // Your Template ID
const PUBLIC_KEY = 'your_public_key';    // Your Public Key
```

## Testing Locally

1. Make sure you've updated all three credentials above
2. Run your development server: `npm run dev`
3. Navigate to the contact section
4. Fill out the form and submit
5. Check your email (globalpark05@gmail.com) for the message

## Deploying to Vercel

Your EmailJS credentials are safely embedded in the frontend code (Public Key is meant to be public).

1. Push your changes to GitHub
2. Your Vercel deployment will automatically update
3. Test the contact form on your live website

## Important Notes

- **EmailJS is free** for up to 200 emails per month
- **Public Key is safe to expose** - it's designed to be public
- **Emails come from your domain** - replies go to the visitor's email address
- **No backend required** - everything works on the frontend
- **No database needed** - emails are sent directly through EmailJS

## Troubleshooting

If emails aren't sending:

1. **Check Browser Console** - Look for error messages (F12)
2. **Verify Credentials** - Make sure all three IDs are correct
3. **Gmail Authorization** - Ensure you authorized the Gmail service
4. **Template Variables** - Check that template variable names match exactly
5. **Rate Limit** - If you've sent 200+ emails, you've hit the monthly limit

## Alternative: Formspree

If you prefer a simpler setup, you can use **Formspree** instead:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  // Handle response...
};
```

Just get your form ID from [Formspree.io](https://formspree.io/)

## Questions?

Need help? Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
