// src/data/structuredData.ts

export const siteSchema = {
  home: {
    "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Creekside Marketing",
  "url": "https://creeksidemarketingpros.com/",
  "logo": "https://creeksidemarketingpros.com/creekside-marketing-pros-logo.avif",
  "image": "https://creeksidemarketingpros.com/creekside-marketing-logo-sqaure.avif",
  "description": "Expert Google and Meta Ads management for outdoor service companies. We help businesses spending $10k-$100k/month recover wasted ad spend and improve ROAS.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nashville",
    "addressRegion": "TN",
    "addressCountry": "US"
  },
  "author": {
        "@type": "Person",
        "name": "Peterson Rainey",
    },
  "founder": [
    {
      "@type": "Person",
      "name": "Peterson Rainey",
      "jobTitle": "Co-Founder & Google Ads Expert"
    },
    {
      "@type": "Person",
      "name": "Cade Maclean",
      "jobTitle": "Co-Founder & Meta Ads Expert"
    },
    {
      "@type": "Person",
      "name": "Scott Caldwell",
      "jobTitle": "Chief Small Business Consultant"
    }
  ],
  "offers": {
    "@type": "Offer",
    "name": "$10K Profit Recovery Audit",
    "description": "A comprehensive 247-point checklist to identify hidden leaks in Google and Meta ad accounts.",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Advertising Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Google Ads (PPC) Management",
        "description": "Data-driven Google Ads optimization and management."
      },
      {
        "@type": "Service",
        "name": "Meta Ads Management",
        "description": "Strategic Facebook and Instagram advertising focused on revenue and profit."
      },
      {
        "@type": "Service",
        "name": "Conversion Tracking & Analytics",
        "description": "Implementation of GA4, Meta Pixel, CAPI, and server-side tracking."
      }
    ]
}
  },
  meetTheTeam: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Creekside Marketing",
      "employee": [
        {
          "@type": "Person",
          "name": "Peterson Rainey",
          "jobTitle": "Co-founder & Google Ads Expert",
          "description": "A mechanical engineer by training, Peterson focuses on technical Google Ads strategy and performance data.",
          "image": "https://creeksidemarketingpros.com/peterson-rainey-headshot.avif"
        },
        {
          "@type": "Person",
          "name": "Cade Maclean",
          "jobTitle": "Co-founder & Meta Ads Expert",
          "description": "With a background in accounting and an MBA, Cade specializes in data-driven Facebook and Instagram advertising.",
          "image": "https://creeksidemarketingpros.com/cade-maclean-headshot.avif"
        },
        {
          "@type": "Person",
          "name": "Baran Eris",
          "jobTitle": "Lead Small Business Consultant",
          "description": "Baran helps businesses generate and convert traffic with scalable ad campaigns. He focuses on building high-converting funnels and making sure every step of the customer journey supports profitable growth.",
          "image": "https://creeksidemarketingpros.com/baren-eris.avif"
        },
        {
          "@type": "Person",
          "name": "Sophia Rainey",
          "jobTitle": "Creatives Director",
          "image": "https://creeksidemarketingpros.com/sophia-rainey-headshot.avif"
        }
      ]
    },
    "author": {
        "@type": "Person",
        "name": "Peterson Rainey",
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://creeksidemarketingpros.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Meet The Team",
          "item": "https://creeksidemarketingpros.com/meet-the-team/"
        }
      ]
    }
    },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Creekside Marketing",
    "description": "Get in touch with Creekside Marketing for expert Google and Meta Ads management in Nashville, TN.",
    "url": "https://creeksidemarketingpros.com/contact/",
    "author": {
        "@type": "Person",
        "name": "Peterson Rainey",
    },
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Creekside Marketing",
      "image": "https://creeksidemarketingpros.com/creekside-marketing-logo-sqaure.avif",
      "telePhone": "+19313424114",
      "email": "info@creeksidemarketingpros.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nashville",
        "addressRegion": "TN",
        "addressCountry": "US"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://creeksidemarketingpros.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://creeksidemarketingpros.com/contact/"
        }
      ]
    }
},
    metaAds: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Meta Ads Management",
    "name": "Meta Ads (Facebook & Instagram) Advertising Services",
    "author": {
        "@type": "Person",
        "name": "Peterson Rainey",
    },
    "provider": {
      "@type": "ProfessionalService",
      "name": "Creekside Marketing",
      "url": "https://creeksidemarketingpros.com/"
    },
    "description": "Expert Meta Ads management with $20M+ in ad spend managed. We specialize in high-quality creative, advanced Meta Pixel tracking, and ROI-driven optimization for Facebook and Instagram.",
    "areaServed": {
      "@type": "Country",
      "name": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Meta Advertising Features",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Analysis",
            "description": "Comprehensive Meta Ads performance analysis and strategic adjustments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Campaign Management",
            "description": "End-to-end management focusing on high-quality visuals and compelling ad copy."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conversion Tracking",
            "description": "Advanced tracking using Meta Pixel to optimize user interactions and ROI."
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://creeksidemarketingpros.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Meta Ads",
          "item": "https://creeksidemarketingpros.com/digital-advertising/meta-ads/"
        }
      ]
    }
  },
pricing: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Creekside Marketing Ad Management",
    "description": "Google Ads and Meta Ads management services with transparent, scalable pricing",
    "brand": { "@type": "Brand", "name": "Creekside Marketing" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Growth Plan",
        "description": "Percentage-based pricing ideal for businesses starting or scaling their ad spend",
        "priceCurrency": "USD",
        "price": "2000",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "2000", "priceCurrency": "USD", "unitText": "month", "description": "$2,000/mo minimum + percentage of ad spend" }
      },
      {
        "@type": "Offer",
        "name": "Shared Plan",
        "description": "Flat base fee plus percentage, ideal for multi-platform advertisers spending $20k-$60k/mo",
        "priceCurrency": "USD",
        "price": "2000",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "2000", "priceCurrency": "USD", "unitText": "month", "description": "$2,000/mo flat + 10% of ad spend" }
      },
      {
        "@type": "Offer",
        "name": "Retainer Plan",
        "description": "Fixed monthly fee with no variable costs, ideal for high-spend advertisers above $60k/mo",
        "priceCurrency": "USD",
        "price": "8000",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "8000", "priceCurrency": "USD", "unitText": "month", "description": "$8,000/mo flat fee, all platforms included" }
      }
    ],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://creeksidemarketingpros.com/" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://creeksidemarketingpros.com/pricing/" }
      ]
    }
  },
googleAds: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Google Ads Management",
    "name": "Google Ads (PPC) Management Services",
    "author": {
        "@type": "Person",
        "name": "Peterson Rainey",
    },
    "provider": {
      "@type": "ProfessionalService",
      "name": "Creekside Marketing",
      "url": "https://creeksidemarketingpros.com/"
    },
    "description": "Expert Google Ads management backed by $20M+ in audited spend. We build high-converting, tightly themed campaigns with GA4 and GTM tracking to drive real ROI.",
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Google Ads Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Data & Ad Analysis",
            "description": "Biweekly reviews of Google Ads data, targeting insights, and ROI metrics."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Campaign Optimization",
            "description": "Management from setup to scale, focusing on lower costs and higher conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conversion Tracking & Reporting",
            "description": "Expert setup of GA4 and GTM to track every lead, call, and form submission."
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://creeksidemarketingpros.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Google Ads",
          "item": "https://creeksidemarketingpros.com/digital-advertising/google-ads/"
        }
      ]
    }
  },

};

export const faqSchemas = {
  home: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Creekside Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Creekside Marketing is a Nashville-based digital advertising agency specializing in Google Ads and Meta (Facebook/Instagram) Ads management. Founded by Peterson Rainey, a mechanical engineer, and Cade Maclean, an accountant with an MBA, we bring a data-first, numbers-driven approach that sets us apart from typical marketing agencies."
        }
      },
      {
        "@type": "Question",
        "name": "What types of businesses does Creekside Marketing work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We partner with businesses spending $10K to $100K per month on Google and Meta Ads. Our clients span industries including dental practices, law firms, med spas, home services, ecommerce, real estate, and more. If your business has a proven offer and is serious about growth, we can help."
        }
      },
      {
        "@type": "Question",
        "name": "What is the $10K Profit Recovery Audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The $10K Profit Recovery Audit is our comprehensive 247-point checklist that identifies 5-7 hidden leaks draining thousands from your Google and Meta ad accounts. We typically charge $800 for this audit, but it is free when you book a consultation call. Most fixes take less than 20 minutes to implement."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Creekside Marketing different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our founders come from engineering and accounting backgrounds, not traditional marketing. We have audited over $20M in ad spend across 200+ accounts, and we focus on revenue generated for your business rather than just leads. We also guarantee a 37% ROAS improvement within 90 days or we work for free."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Creekside Marketing offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer two core services: Google Ads (PPC) management and Meta Ads (Facebook and Instagram) management. All services include conversion tracking setup with GA4, Meta Pixel, CAPI, Google Tag Manager, and CRM integrations."
        }
      }
    ]
  },
  googleAds: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in Creekside Marketing's Google Ads management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Google Ads management includes keyword research and negative keyword pruning, ad copy A/B testing, manual or smart bidding strategy selection based on your data, weekly optimizations, strategic scaling, and biweekly performance reviews. We also handle full conversion tracking setup with GA4 and Google Tag Manager."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Google Ads management cost with Creekside Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three transparent pricing plans based on your ad spend level — from percentage-based fees starting at $2,000/month to a flat $8,000/month retainer for high-spend advertisers. Visit our pricing page at creeksidemarketingpros.com/pricing for full plan details and a side-by-side comparison."
        }
      },
      {
        "@type": "Question",
        "name": "Who manages my Google Ads campaigns at Creekside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peterson Rainey, co-founder and mechanical engineer, leads Google Ads strategy. Your campaigns are managed by dedicated Google Ads specialists on our team. You work directly with the person optimizing your account — there are no layers of account managers between you and the expert."
        }
      },
      {
        "@type": "Question",
        "name": "How does Creekside track conversions for Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We set up expert tracking using GA4, Google Tag Manager, and CRM integrations to track every lead, call, form submission, and booking. We build custom conversion events so your entire funnel is measured and you can see exactly which ads are generating revenue, not just clicks."
        }
      },
      {
        "@type": "Question",
        "name": "What types of Google Ads campaigns does Creekside run?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We run Search, Performance Max, Display, and other campaign types depending on your goals and data. We build tightly themed, conversion-focused campaigns designed to show up when high-intent customers are searching."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly will I see results from Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see measurable improvements within the first 30-60 days as we optimize targeting, bidding, and ad copy. We guarantee a 37% ROAS improvement within 90 days or we work for free."
        }
      }
    ]
  },
  metaAds: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in Creekside Marketing's Meta Ads management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Meta Ads management includes end-to-end campaign management, high-quality creative development, compelling ad copy, advanced audience targeting, ongoing A/B testing of ad formats and messaging, and comprehensive performance analysis. We also set up Meta Pixel and Conversions API (CAPI) tracking for precise optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Meta Ads management cost with Creekside Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three transparent pricing plans — Growth, Shared, and Retainer — designed to scale with your ad budget. Multi-platform advertisers benefit from our Shared plan which covers all platforms under one base fee. Visit our pricing page at creeksidemarketingpros.com/pricing for full details."
        }
      },
      {
        "@type": "Question",
        "name": "Who manages my Meta Ads campaigns at Creekside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cade Maclean, co-founder with an accounting background and MBA, leads Meta Ads strategy. Your campaigns are handled by dedicated Meta Ads specialists. You communicate directly with the person managing your ads — no account managers or middlemen."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms do your Meta Ads run on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We run ads across Facebook and Instagram through Meta's advertising platform. This includes feed ads, Stories, Reels, and other placements. We test different formats and placements to find what drives the best results for your specific business and audience."
        }
      },
      {
        "@type": "Question",
        "name": "How does Creekside handle conversion tracking for Meta Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement Meta Pixel, Conversions API (CAPI), and server-side tracking to capture every user interaction from your ads. This ensures accurate attribution even with iOS privacy changes, and gives us the data needed to optimize campaigns toward revenue rather than vanity metrics."
        }
      },
      {
        "@type": "Question",
        "name": "Can Creekside help if I am already running Meta Ads but not seeing results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We start with our 247-point Profit Recovery Audit to identify the specific mistakes draining your ad budget. Most accounts have 5-7 hidden leaks that take less than 20 minutes to fix. Book a free consultation and we will show you exactly where your money is being wasted."
        }
      }
    ]
  },
  pricing: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does Creekside Marketing charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three plans: Growth (percentage-based starting at $2,000/mo), Shared ($2,000/mo flat + 10% of ad spend), and Retainer ($8,000/mo flat). The best plan depends on your monthly ad budget."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any long-term contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All plans are month-to-month with no long-term commitment required."
        }
      },
      {
        "@type": "Question",
        "name": "Which plan should I choose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For budgets under $20k/month, Plan A and Plan B cost the same. Between $20k-$60k, Plan B is more cost-effective. Above $60k, Plan C (flat retainer) saves the most."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the onboarding fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The onboarding fee covers full account audit, conversion tracking setup (GA4, Meta Pixel, CAPI, GTM), campaign strategy development, and initial campaign buildout. Plan C waives onboarding entirely."
        }
      },
      {
        "@type": "Question",
        "name": "Can I switch between plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can switch plans as your ad spend scales. Many clients start with Plan A or B and move to Plan C as their budget grows."
        }
      }
    ]
  },
};