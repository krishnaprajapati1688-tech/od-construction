import Hero from '@/components/home/Hero';
import CompanyIntro from '@/components/home/CompanyIntro';
import Stats from '@/components/home/Stats';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesHome from '@/components/home/ServicesHome';
import CurrentProjects from '@/components/home/CurrentProjects';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Timeline from '@/components/home/Timeline';
import LeadershipTeam from '@/components/home/LeadershipTeam';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import ContactCTA from '@/components/home/ContactCTA';
import MapSection from '@/components/home/MapSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Stats />
      <WhyChooseUs />
      <ServicesHome />
      <CurrentProjects />
      <FeaturedProjects />
      <Timeline />
      <LeadershipTeam />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <MapSection />
    </>
  );
}
