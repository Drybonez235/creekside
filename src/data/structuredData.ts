// src/data/structuredData.ts

export const siteSchema = {
  home: {
    "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Creekside Marketing",
  "url": "https://creeksidemarketingpros.com/",
  "logo": "https://creeksidemarketingpros.com/creekside-marketing-pros-logo.avif",
  "image": "https://creeksidemarketingpros.com/creekside-marketing-logo-sqaure.avif",
  "description": "Expert Google and Meta Ads management for businesses doing $500K to $10M in revenue. We recover wasted ad spend and improve ROAS.",
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
          "name": "Keith McGonigle",
          "jobTitle": "Lead Small Business Consultant",
          "description": "Keith is a performance marketing consultant with 15+ years of experience managing paid media across Google, Meta, TikTok, and LinkedIn. He has overseen $120M+ in ad spend across 150+ clients and specializes in helping businesses grow through full-funnel digital marketing strategy.",
          "image": "https://creeksidemarketingpros.com/keith-mcgonigle.avif"
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
      "telephone": "+19313424114",
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
        "name": "Ad Management Fee",
        "description": "Percentage-based pricing that scales with your ad spend. Tiered rates decrease as budget grows, capped at $15,000/month.",
        "priceCurrency": "USD",
        "price": "1500",
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "1500", "priceCurrency": "USD", "unitText": "month", "description": "$1,500/mo minimum per platform, 20%/15%/10% tiered rates, $15,000 monthly cap" }
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
        "name": "What's your pricing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fee is a percentage of your ad spend, and the rate drops as you scale: 20% up to $30k, 15% from $30k to $60k, and 10% above $60k per platform. There's a $1,500 monthly minimum per platform and total fees are capped at $15,000 per month. The cap is there on purpose: once your spend gets big enough, we don't need to keep taking a bigger cut. No long-term contracts."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A few things, honestly. We optimize for actual revenue and new customer growth, not just a low cost-per-click number that looks good on a report. The person managing your account is the person you talk to, not an account manager relaying your question to someone else. And we do a live audit on the first call, so you see how we think before you spend anything."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare, legal, finance, SaaS, e-commerce, home services, and a bunch of others. 200+ businesses total. The platforms are the same regardless of industry. What changes is how we use them, and that's based on your data, not a template we pull from a drawer."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Honestly, most people see movement in the first 30-60 days. But we'll tell you the same thing we tell everyone on a call: nobody can promise results in a week, and we're not going to pretend otherwise. The 90 days is about having enough data to know what's actually working, not just getting lucky on a few early ads."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the free audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On the first call we pull up your accounts live and walk through them with you, using our $10K Profit Recovery checklist: 247 points across your Google and Meta setup. We're looking for the 5-7 spots where money is quietly leaking out. You keep the findings either way."
        }
      },
      {
        "@type": "Question",
        "name": "What guarantees do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Two. The 7-day money-back guarantee is a fit check: spend the first week getting to know us, and if you decide it's not right, you get everything back. The 90-day ROAS guarantee is the performance side: if we haven't improved your return on ad spend in 90 days, we keep working for free until we do. Both are in writing."
        }
      },
      {
        "@type": "Question",
        "name": "How fast do you respond when I have a question?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Same day. You've got a direct line to the people actually working on your account. Ask something in the morning and you'll have an answer by end of day, not a promise to pass it along."
        }
      },
      {
        "@type": "Question",
        "name": "How does reporting work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every two weeks you get a report that covers what worked, what didn't, what we're doing next, and what we need from you to keep moving. You also get a live dashboard connected to your real account data that you can check any time. We don't report on impressions to make the numbers look bigger."
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
          "text": "Our Google Ads management includes keyword research and negative keyword pruning, ad copy A/B testing, manual or smart bidding strategy selection based on your data, weekly optimizations, strategic scaling, and bi-weekly performance reviews. We also handle full conversion tracking setup with GA4 and Google Tag Manager."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Google Ads management cost with Creekside Marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our management fee is a percentage of your ad spend with tiered rates that decrease as your budget grows: 20% up to $30k, 15% from $30k to $60k, and 10% above $60k per platform. There is a $1,500 minimum per platform and a $15,000 monthly cap. No long-term contracts."
        }
      },
      {
        "@type": "Question",
        "name": "Who manages my Google Ads campaigns at Creekside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peterson Rainey, co-founder and mechanical engineer, leads Google Ads strategy. Your campaigns are managed by dedicated Google Ads specialists on our team. You work directly with the person optimizing your account. There are no layers of account managers between you and the expert."
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
          "text": "Most clients see measurable improvements within the first 30-60 days as we optimize targeting, bidding, and ad copy. If we do not improve your ROAS within 90 days, we work for free until we do."
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
          "text": "Our management fee is a percentage of your ad spend with tiered rates that decrease as your budget grows. Multi-platform advertisers pay the same per-platform rate, and total fees are capped at $15,000/month."
        }
      },
      {
        "@type": "Question",
        "name": "Who manages my Meta Ads campaigns at Creekside?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cade Maclean, co-founder with an accounting background and MBA, leads Meta Ads strategy. Your campaigns are handled by dedicated Meta Ads specialists. You communicate directly with the person managing your ads. No account managers or middlemen."
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
          "text": "Our management fee is a percentage of your ad spend: 20% up to $30k, 15% from $30k to $60k, and 10% above $60k per platform. There's a $1,500 monthly minimum per platform, and total fees are capped at $15,000 per month."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the management fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Everything required to make your ads succeed: campaign management, landing pages, ad creatives, copywriting, conversion tracking setup including server-side tracking and CRM integration, conversion rate optimization, live reporting, bi-weekly reports, and monthly strategy calls. There are no separate line items."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any long-term contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. There are no long-term contracts, and your first 7 days are covered by a full money-back guarantee."
        }
      },
      {
        "@type": "Question",
        "name": "Do you charge per platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The fee is calculated per platform. If we manage both Google Ads and Meta Ads, each platform has its own tiered rate and $1,500 minimum, and your combined total is still capped at $15,000 per month."
        }
      },
      {
        "@type": "Question",
        "name": "What guarantees do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Two. First, a 7-day money-back guarantee: meet the team, see how we work, and if we're not the right fit within your first 7 days, you get a full refund. Second, a 90-day performance promise: if we don't improve your ROAS within 90 days, we work for free until we do."
        }
      },
      {
        "@type": "Question",
        "name": "Which plan should I choose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There's only one pricing structure, and it works at every budget level. The percentage rate decreases as your spend grows (20% to $30k, 15% to $60k, 10% above), so the more you invest, the lower your effective rate."
        }
      }
    ]
  },
};