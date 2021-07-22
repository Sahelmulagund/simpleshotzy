import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import Contact from 'sections/contact';
import SocialSection from 'sections/social-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          
          <SEO title="SimpleShotz" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature />
          {/* <CoreFeature /> */}
          <WorkFlow />
          <Package />
          
          <TeamSection />
          <SocialSection/>
          {/* <TestimonialCard /> */}
          <Contact/>
        </Layout>
    </ThemeProvider>
  );
}
