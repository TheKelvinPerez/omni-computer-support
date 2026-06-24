# Omni Computer Support Brand Direction

## Design Read

Reading this as: a local service one page landing site for homeowners, students, and small businesses who need practical computer help, with a bright technical flyer language, leaning toward a clean service brand with a friendly neighborhood feel.

## Core Position

Omni Computer Support should feel like the person you call when your computer, printer, website, or business materials need to work without drama.

The site should not feel like a software company, a repair chain, or a generic tech startup. It should feel local, capable, personal, and easy to contact.

## Audience

1. Local residents who need computer setup, repair, virus removal, printer help, or WiFi help.
2. Small businesses that need simple websites, flyers, logos, business cards, and maintenance.
3. Nontechnical customers who want clear help from a real person.

## Brand Attributes

1. Helpful.
2. Clear.
3. Technical, but not intimidating.
4. Fast to contact.
5. Local and personal.
6. Practical, not flashy.

## Visual Direction

The flyer already gives the brand a strong visual base: light background, blue technical line art, QR contact moment, service icons, circular portrait, and tear off contact tabs.

The website should expand that into a full one page experience:

1. Keep the soft blue technical background language, but use it with more spacing and less density than the flyer.
2. Use the portrait as a trust anchor near the top of the page.
3. Use the QR visual language as a small secondary contact motif, not the main conversion method.
4. Use the service icons as a horizontal or grouped service system.
5. Use the tear off tabs as inspiration for a sticky contact strip or footer contact band.

## Layout Direction

Design variance: 6.

Motion intensity: 4.

Visual density: 5.

This should be more composed than a basic local business page, but still easy to scan. Motion should support hierarchy, not entertainment.

The one pager should use these sections:

1. Hero: portrait, brand mark, clear service promise, phone CTA, website and repair support context.
2. Services: grouped service blocks, design services and computer support separated clearly.
3. How help works: call, describe the issue, get help or a quote.
4. Local trust section: Kevin as the human point of contact, practical service area copy.
5. Maintenance and small business support: monthly support as a higher value option.
6. Contact close: phone CTA, website QR visual, short reassurance copy.

## Hero Direction

The hero should fit in the first viewport. It should not become a flyer copied into a browser.

Recommended hero message:

Omni Computer Support

Computer help, websites, flyers, logos, and business support.

Primary CTA:

Call (305) 339 9449

Secondary CTA:

View Services

The hero should use a split composition, not a centered flyer replica. The left side should carry the message and CTA. The right side can use the portrait, QR circle, monitor mark, and light technical linework.

## Service Architecture

Split services into two groups:

1. Computer help: Windows support, Mac support, Linux setup, virus removal, data recovery, WiFi and printer help, computer setup.
2. Business and design help: website design, flyer design, logo design, business cards, monthly maintenance.

The page should not show a long plain list. Use grouped service panels or a compact icon grid so customers can understand the range quickly.

## Palette

Primary ink:

#071946

Primary blue:

#0B66F2

Soft blue:

#DCEEFF

Accent green:

#59B323

Paper:

#FFFDF8

White:

#FFFFFF

The canonical brand expression is light. The Astro build should define matching dark tokens for system preference, but the page should not flip section themes mid scroll. The color system should stay consistent across all sections.

## Typography

Use a friendly rounded sans display font for headings and a highly readable sans for body text.

Recommended implementation direction:

1. Headings: Outfit or Satoshi.
2. Body: Inter or system sans.
3. Numbers and phone CTA: same heading family, extra bold.

Avoid serif fonts. Avoid overly futuristic mono type. The brand should feel technically capable, but still approachable.

## Shape System

Use one shape rule:

1. Circles for portraits, QR frames, and icon badges.
2. Soft rounded rectangles for service groups.
3. Pill buttons for phone CTAs.

Do not mix sharp cards with pill buttons unless there is a clear reason.

## Motion Direction

Motion should be simple:

1. Hero elements fade and rise into place.
2. Service icons reveal in a stagger.
3. CTA buttons have tactile hover and press states.
4. Background line art can drift very subtly if it does not distract.

Respect reduced motion. Do not use scroll hijacking for this site.

## Visual Assets

Use these existing flyer assets as source material:

1. Portrait.
2. QR code.
3. Service icons.
4. Blue technical line art style.
5. Monitor logo mark.

For the landing page, add one real or generated visual asset if needed: a clean desk, laptop, printer, and phone support scene that matches the blue and paper palette.

## Copy Voice

Use clear service copy. The customer should understand the offer in one scan.

Voice rules:

1. Say what Kevin helps with.
2. Use plain language.
3. Keep service names concrete.
4. Avoid hype.
5. Avoid vague claims like "next generation" or "seamless digital solutions."

Example body copy:

Get help with computer setup, virus removal, printer issues, WiFi problems, websites, flyers, logos, and business cards from one local contact.

## Conversion Direction

Primary conversion is phone contact.

The phone CTA should appear in:

1. Hero.
2. Sticky mobile action.
3. Final contact section.

Use one CTA label everywhere:

Call (305) 339 9449

The page can also include the QR code and a simple contact form later, but the first version should prioritize the phone.

## What To Avoid

1. Do not copy the flyer as a full screen image.
2. Do not use purple tech gradients.
3. Do not use generic SaaS cards.
4. Do not add fake testimonials.
5. Do not invent metrics.
6. Do not bury the phone number.
7. Do not make the page feel like an agency portfolio.
8. Do not use decorative text that does not help the customer act.

## Build Direction

The Astro implementation should be static first.

Recommended stack:

1. Astro.
2. Native CSS or scoped Astro styles.
3. Minimal JavaScript only for optional reveal motion.
4. Existing image assets copied into `public/assets`.
5. One page at `/`.

The first build should ship a polished one page site, not a template with placeholder sections.
