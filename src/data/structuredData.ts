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
          "name": "Scott Caldwell",
          "jobTitle": "Chief Small Business Consultant",
          "description": "Digital Strategist managing multi-channel campaigns and advanced technical tracking.",
          "image": "https://creeksidemarketingpros.com/scott-caldwell-headshot.avif"
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
    partnerProgram: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "White-Label Digital Marketing Partner Program",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Creekside Marketing",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nashville",
        "addressRegion": "TN",
        "addressCountry": "US"
      }
    },
    "author": {
        "@type": "Person",
        "name": "Peterson Rainey",
    },
    "description": "Scale your agency with Creekside’s white-label growth partners. Get the hands-on service of a freelancer with the proven, scalable systems of a top-tier Google and Meta Ads agency.",
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "White-Label Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "White-Label Google Ads Management",
          "description": "Scalable PPC solutions managed by experienced consultants."
        },
        {
          "@type": "Service",
          "name": "White-Label Meta Ads Management",
          "description": "Expert Facebook and Instagram advertising strategies for agency partners."
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Creekside Marketing Advantages",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Proven Systems Backed by Experience",
          "description": "Framework developed over millions in ad spend and hundreds of accounts."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Access to Collective Expertise",
          "description": "Consultants collaborate regularly, sharing insights and problem-solving strategies."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trust and Accountability",
          "description": "Work directly with the person handling your campaigns—no middlemen."
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
          "name": "Partner Program",
          "item": "https://creeksidemarketingpros.com/creekside-marketing-partner-program/"
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
      "url": "https://creeksidemarketingpros.com"
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
      "url": "https://creeksidemarketingpros.com"
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