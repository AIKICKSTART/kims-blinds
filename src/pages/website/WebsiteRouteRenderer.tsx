import type { RouteMatch } from "./websiteTypes";
import { HomePage, ServicePage, ServicesPage, ServiceSuburbPage } from "./HomeAndServicePages";
import { AboutPage, BlogPage, BlogPostPage, ComparisonPage, ContactPage, FaqPage, NotFoundPage, PricingPage, PrivacyPage, SuburbPage, SuburbsPage, TermsPage, TestimonialsPage, WarrantyPage } from "./InformationPages";

export function renderRoute(route: RouteMatch) {
  switch (route.kind) {
    case "home":
      return <HomePage />;
    case "services":
      return <ServicesPage />;
    case "service":
      return <ServicePage service={route.service} />;
    case "suburbs":
      return <SuburbsPage />;
    case "suburb":
      return <SuburbPage suburb={route.suburb} />;
    case "serviceSuburb":
      return <ServiceSuburbPage service={route.service} suburb={route.suburb} />;
    case "blog":
      return <BlogPage />;
    case "post":
      return <BlogPostPage post={route.post} />;
    case "pricing":
      return <PricingPage />;
    case "faq":
      return <FaqPage />;
    case "comparison":
      return <ComparisonPage />;
    case "contact":
      return <ContactPage />;
    case "about":
      return <AboutPage />;
    case "warranty":
      return <WarrantyPage />;
    case "testimonials":
      return <TestimonialsPage />;
    case "privacy":
      return <PrivacyPage />;
    case "terms":
      return <TermsPage />;
    case "notFound":
      return <NotFoundPage title={route.title} />;
  }
}

