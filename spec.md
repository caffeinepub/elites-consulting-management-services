# Elites Consulting & Management Services

## Current State
- Full website with Hero, About, Services, Working States, Campaign Updates, Gallery, Volunteer, Contact sections
- Backend stores volunteer and contact form submissions
- Leadership: Rajneesh Tiwari (MD, text/icon card) and Sandeep Vishwash (Co-founder)
- Contact: +91 78274 43618, infoelitesconsulting890@gmail.com
- Contact/enquiry form exists in ContactSection

## Requested Changes (Diff)

### Add
- **Profile Share** via WhatsApp and link: A floating or sticky "Share" button on the site that opens a share menu with:
  - Share via WhatsApp: opens WhatsApp with pre-filled message containing site URL and company intro
  - Copy Link: copies site URL to clipboard
  - Unique auto-generated enquiry reference number shown in share message
- **Company Proposal** page/modal: A well-structured company profile/proposal that includes company overview, services, leadership, contact info
  - Shareable by link (navigates to #proposal or shows modal)
  - Downloadable as PDF using browser print
- **Customer Enquiry Form**: Enhance or add dedicated enquiry form section that is specifically branded as "Customer Enquiry" (current contact form already exists, can be relabeled/enhanced with enquiry type selector)

### Modify
- App.tsx: Add ProposalSection and ShareButton components
- Navbar: Add "Proposal" link

### Remove
- Nothing removed

## Implementation Plan
1. Create `ShareButton.tsx` - floating share button with WhatsApp + copy link, auto reference number
2. Create `ProposalSection.tsx` - printable company profile/proposal with share + PDF download buttons
3. Enhance `ContactSection.tsx` - add enquiry type dropdown to existing form
4. Update `App.tsx` - include ProposalSection and ShareButton
5. Update `Navbar.tsx` - add Proposal nav link
