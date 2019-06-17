const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM\n Is\n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header section

let navLength = Object.keys(siteContent["nav"]).length

for(let i = 1; i < navLength; i++){
let navBar = document.querySelector(`nav a:nth-child(${i})`)
navBar.textContent = siteContent["nav"][`nav-item-${i}`]
}

// cta section

let ctaTitle = document.querySelector(".cta-text h1");
ctaTitle.textContent = siteContent["cta"]["h1"];
ctaTitle.style.whiteSpace = "pre-line";

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

// main-content section

  // top-content section

  let featuresHeader = document.querySelector(".top-content .text-content:nth-child(1) h4")
  featuresHeader.textContent = siteContent["main-content"]["features-h4"];

  let featuresPara = document.querySelector(".top-content .text-content:nth-child(1) p")
  featuresPara.textContent = siteContent["main-content"]["features-content"];

  let aboutHeader = document.querySelector(".top-content .text-content:nth-child(2) h4")
  aboutHeader.textContent = siteContent["main-content"]["about-h4"];

  let aboutPara = document.querySelector(".top-content .text-content:nth-child(2) p")
  aboutPara.textContent = siteContent["main-content"]["about-content"];

// middle img

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

  // bottom-content section

  let servicesHeader = document.querySelector(".bottom-content .text-content:nth-child(1) h4")
  servicesHeader.textContent = siteContent["main-content"]["services-h4"];

  let servicesPara = document.querySelector(".bottom-content .text-content:nth-child(1) p")
  servicesPara.textContent = siteContent["main-content"]["services-content"];

  let productHeader = document.querySelector(".bottom-content .text-content:nth-child(2) h4")
  productHeader.textContent = siteContent["main-content"]["product-h4"];

  let productPara = document.querySelector(".bottom-content .text-content:nth-child(2) p")
  productPara.textContent = siteContent["main-content"]["product-content"];

  let visionHeader = document.querySelector(".bottom-content .text-content:nth-child(3) h4")
  visionHeader.textContent = siteContent["main-content"]["vision-h4"];

  let visionPara = document.querySelector(".bottom-content .text-content:nth-child(3) p")
  visionPara.textContent = siteContent["main-content"]["vision-content"];


// contact section

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelector(".contact p:nth-child(2)")
contactAddress.textContent = siteContent["contact"]["address"];

let contactPhone = document.querySelector(".contact p:nth-child(3)")
contactPhone.textContent = siteContent["contact"]["phone"];

let contactEmail = document.querySelector(".contact p:nth-child(4)")
contactEmail.textContent = siteContent["contact"]["email"];

// footer section

let footerPara = document.querySelector("footer p");
footerPara.textContent = siteContent["footer"]["copyright"];