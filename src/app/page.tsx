"use client"

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardEight from '@/components/sections/metrics/MetricCardEight';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeSpacing"
      background="grid"
      cardStyle="inset"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Masandra"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve a Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Masandra"
          description="Discover exceptional specialty coffee crafted with passion. From single-origin beans to signature blends, experience the perfect cup in our cozy corner."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000389395-pf6hll5x.jpg"
          imageAlt="Masandra coffeeshop interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards
          title="Our Story"
          description="Masandra was born from a passion for exceptional coffee and community. We source the finest beans from sustainable farms worldwide and roast them fresh daily in our small-batch roastery."
          tag="Since 2019"
          features={[
            {
              id: "craft",
              title: "Artisan Roasting",
              description: "Small-batch roasting brings out the unique character of each single-origin bean, creating complex and memorable flavors.",
              label: "Daily Fresh"
            },
            {
              id: "community",
              title: "Community First",
              description: "Our space is designed for meaningful connections, whether working, studying, or simply enjoying great coffee with friends.",
              label: "Welcoming Space"
            }
          ]}
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwenty
          images={[
            {
              id: 1,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000395118-1qoi500s.jpg",
              imageAlt: "Artisan latte with signature foam art"
            },
            {
              id: 2,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000396331-whnua7cq.jpg",
              imageAlt: "Fresh pastries and coffee pairing"
            }
          ]}
          title="Exceptional Quality in Every Cup"
          description="We believe coffee is an experience. From the moment our beans arrive until you take that first sip, we maintain the highest standards. Each drink is crafted by skilled baristas who understand the art and science of espresso."
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Signature Menu"
          description="Explore our carefully curated selection of specialty coffee drinks and pastries"
          products={[
            {
              id: "1",
              brand: "Masandra",
              name: "House Blend Cappuccino",
              price: "$4.50",
              rating: 5,
              reviewCount: "287",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000397718-enmzytmn.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "2",
              brand: "Masandra",
              name: "Single-Origin Americano",
              price: "$4.00",
              rating: 5,
              reviewCount: "312",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000398626-5cp5064d.jpg",
              imageAlt: "Pure americano espresso"
            },
            {
              id: "3",
              brand: "Masandra",
              name: "Signature Mocha",
              price: "$5.25",
              rating: 5,
              reviewCount: "245",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000399689-gpwigoes.jpg",
              imageAlt: "Rich mocha with chocolate drizzle"
            },
            {
              id: "4",
              brand: "Masandra",
              name: "Cold Brew",
              price: "$4.75",
              rating: 5,
              reviewCount: "198",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000401203-di2ochlz.jpg",
              imageAlt: "Smooth cold brew iced coffee"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEight
          title="Why Coffee Lovers Choose Masandra"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000393754-6ckwehvi.jpg"
          imageAlt="Expert barista crafting perfect espresso"
          metrics={[
            {
              id: "1",
              value: "15+",
              title: "Origin Varieties"
            },
            {
              id: "2",
              value: "5K+",
              title: "Happy Customers"
            },
            {
              id: "3",
              value: "100%",
              title: "Ethically Sourced"
            },
            {
              id: "4",
              value: "24hrs",
              title: "Fresh Roasted"
            }
          ]}
          metricVariant="border"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "The best coffee I've had in years. The baristas really know their craft and treat every order like it matters.",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000403689-1ai4ozg5.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              quote: "Masandra has become my second home. Incredible atmosphere, amazing coffee, and genuinely friendly staff.",
              name: "James Chen",
              role: "Freelance Designer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000404994-tuwk1n8c.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              quote: "I love supporting local businesses, and Masandra makes it easy with their ethically sourced beans and commitment to quality.",
              name: "Emma Rodriguez",
              role: "Community Advocate",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000405790-m4z7m5s3.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              quote: "The cold brew here is phenomenal. Perfect for those afternoons when you need that smooth, rich flavor.",
              name: "Michael Thompson",
              role: "Tech Professional",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000406686-nscj4fx6.jpg",
              imageAlt: "Michael Thompson"
            }
          ]}
          variant="card"
          title="Loved by Coffee Enthusiasts"
          description="Join our community of coffee lovers who have discovered something special at Masandra"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Newsletter"
          description="Get updates on our new seasonal blends, exclusive brewing tips, and special events happening at Masandra."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766000402557-zri3k781.jpg"
          imageAlt="Fresh roasted coffee beans"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Masandra"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "products" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Hours", href: "#" },
                { label: "Location", href: "#" }
              ]
            },
            {
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}