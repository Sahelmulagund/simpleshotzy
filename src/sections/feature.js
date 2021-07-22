/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
import Graphic from 'assets/feature/graphic.svg';
import Copywriter from 'assets/feature/copywriter.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Videography',
    title: 'Videography',
    text:
      'We tell stories that your audience needs to hear and see. Our video production services department has the equipment and expertise necessary to script, shoot, edit, produce and distribute your video effectively, and in a way that aligns with and supports your marketing goals.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Social Media Marketing',
    title: 'Social Media Marketing',
    text:
      'Digital media trends across all social media platforms. We help to grow your brand through our social media marketing service that puts your brand on social platforms like Youtube, Instagram and Facebook, which will help you to connect with your potential audience.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Brand Management',
    title: 'Brand Management',
    text:
      'We manage your brand by collabrating and integrating your network with the brands in the industry.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Photography',
    title: 'Photography',
    text:
      'Our photography services department made up of professional photographers can add value to your brand with high-resolution team photos, corporate event photography and product photography.',
  },
  {
    id: 5,
    imgSrc: Graphic,
    altText: 'Graphic Designing',
    title: 'Graphic Designing',
    text:
      'Our deaprtment of graphic designers provide professional graphic design services including logo design, print design, brochure design and more.',
  },
  {
    id: 6,
    imgSrc: Copywriter,
    altText: 'Copywriting',
    title: 'Copywriting',
    text:
      'Our department of copywriters has the right experience, approach, and unique writing style to create quality content that will engage your potential audience and accelerate your digital reach.',
  },
];

export default function Feature() {
  return (
   <section sx={{variant:'section.feature'}} id="services">
     <Container>
       <SectionHeader
       slogan="Our Services"
       title="Services that we provide"></SectionHeader>

       <Grid sx={styles.grid}>
         {data.map((item)=>(
           <FeatureCard
             key={item.id}
             src={item.imgSrc}
             alt={item.altText}
             title={item.title}
             text={item.text}
           />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
