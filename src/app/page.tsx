"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import BlogCardTen from '@/components/sections/blog/BlogCardTen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="noiseGradient"
      cardStyle="glass-outline"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="CoffeeHouse"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899253293-elqa8sw1.jpg"
          logoAlt="CoffeeHouse Logo"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Stories", id: "stories" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
          buttonClassName="px-6 py-2"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          tag="Specialty Coffee"
          tagIcon={Coffee}
          title="Crafted Excellence in Every Cup"
          description="Experience artisan coffee roasted fresh daily. From classic espresso to innovative cold brews, discover your new favorite blend."
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899254134-9kbxyysg.jpg"
          imageAlt="Freshly brewed specialty coffee with latte art"
          frameStyle="browser"
          ariaLabel="Hero section featuring specialty coffee"
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardEleven
          features={[
            {
              id: 1,
              title: "Single Origin Espresso",
              description: "Bold and complex, our single-origin espresso comes from carefully selected farms. Each shot reveals unique flavor notes sourced directly from specialty roasters.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899254997-jullupb6.jpg",
              imageAlt: "Single origin espresso shot with perfect crema"
            },
            {
              id: 2,
              title: "Signature Cappuccino",
              description: "Perfectly balanced with velvety microfoam. Our baristas craft each cappuccino with precision, creating beautiful latte art that's almost too good to drink.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899255569-ftvfphy3.jpg",
              imageAlt: "Artisan cappuccino with decorative latte art"
            },
            {
              id: 3,
              title: "Cold Brew Concentrate",
              description: "Smooth and refreshing, our cold brew is steeped for 24 hours. Perfect over ice or mixed with milk for a creamy, delicious cold coffee experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899256291-gzj8wer0.png",
              imageAlt: "Iced cold brew coffee with premium presentation"
            }
          ]}
          animationType="slide-up"
          title="Our Signature Brews"
          description="Handpicked from finest beans around the world"
          tag="Menu Highlights"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Passionate About Quality"
          description={[
            "At CoffeeHouse, we believe great coffee starts with great beans. We partner directly with ethical coffee farmers to source premium, sustainable beans. Every cup you enjoy has a story—from the highlands where it's grown to the moment our expert baristas craft it into your perfect brew. Quality isn't just what we serve; it's our commitment to you."
          ]}
          metrics={[
            { label: "Years of Roasting Excellence", value: "12+" },
            { label: "Coffee Origins Sourced", value: "25" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="CoffeeHouse has become my daily sanctuary. The attention to detail in every cup, the warmth of the staff, and the perfectly curated atmosphere make it the best coffee experience in the city. I can't imagine starting my day anywhere else."
          rating={5}
          author="Sarah Mitchell, Regular Customer"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899257867-nl43gpjj.jpg", alt: "Customer testimonial avatar 1" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899258748-qhrawz3v.jpg", alt: "Customer testimonial avatar 2" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899259537-vih8n7et.jpg", alt: "Customer testimonial avatar 3" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899260371-kdiy5jyr.jpg", alt: "Customer testimonial avatar 4" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="stories" data-section="stories">
        <BlogCardTen
          blogs={[
            {
              id: "1",
              title: "The Journey of Ethiopian Coffee",
              subtitle: "How altitude and terroir create unique flavor profiles",
              tags: ["Coffee Origins", "Sustainability"]
            },
            {
              id: "2",
              title: "Mastering the Pour Over",
              subtitle: "A beginner's guide to brewing perfect coffee at home",
              tags: ["Brewing Tips", "Technique"]
            },
            {
              id: "3",
              title: "Seasonal Specialty Blends",
              subtitle: "This autumn, discover our new single-origin roasts",
              tags: ["New Arrivals", "Seasonal"]
            }
          ]}
          animationType="slide-up"
          variant="card"
          title="Coffee Stories & Updates"
          description="Discover the stories behind our beans, brewing tips, and cafe moments"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Common Questions"
          description="Everything you need to know about our coffee and cafe"
          faqs={[
            {
              id: "1",
              title: "What coffee beans do you use?",
              content: "We source premium, single-origin beans from ethical coffee farmers around the world. Each bean is carefully selected for quality and sustainability. Our beans are roasted fresh in-house to ensure optimal flavor and freshness."
            },
            {
              id: "2",
              title: "Do you offer fair trade coffee?",
              content: "Yes! We're committed to fair trade practices and direct relationships with farmers. We ensure that every farmer receives fair compensation and works in safe conditions."
            },
            {
              id: "3",
              title: "Can I order online?",
              content: "Currently, we welcome you to visit us in-store for the best experience. However, you can reach out to reserve a table or inquire about specialty orders through our contact page."
            },
            {
              id: "4",
              title: "Do you have vegetarian or vegan options?",
              content: "Yes! We offer a variety of plant-based milk options including oat, almond, and coconut. All our food items are clearly labeled with dietary information."
            },
            {
              id: "5",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday from 7 AM to 7 PM, Saturday from 8 AM to 8 PM, and Sunday from 8 AM to 6 PM. Check our contact page for holiday hours."
            },
            {
              id: "6",
              title: "Is there free WiFi available?",
              content: "Yes, we provide complimentary high-speed WiFi to all our guests. Feel free to settle in, work, or simply relax with a good book and great coffee."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience exceptional coffee? Visit us today or get in touch with any questions. We'd love to welcome you to our coffee community."
          animationType="entrance-slide"
          buttons={[
            { text: "Get in Touch", href: "mailto:hello@coffeehouse.com" },
            { text: "Find Us", href: "https://maps.google.com" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Mon-Fri: 7 AM - 7 PM", href: "#" },
                { label: "Sat: 8 AM - 8 PM", href: "#" },
                { label: "Sun: 8 AM - 6 PM", href: "#" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "hello@coffeehouse.com", href: "mailto:hello@coffeehouse.com" },
                { label: "(555) 123-4567", href: "tel:+15551234567" },
                { label: "Follow Us", href: "#" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Coffee Lane", href: "#" },
                { label: "Downtown District", href: "#" },
                { label: "City, State 12345", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 CoffeeHouse. Crafted with care and quality beans."
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1765899253293-elqa8sw1.jpg"
          logoWidth={32}
          logoHeight={32}
        />
      </div>
    </ThemeProvider>
  );
}