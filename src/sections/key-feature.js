/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCard from 'components/feature-card';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Quick Performance',
    title: 'Quick Performance',
    text:
      'We provide quick and creative services to grow your brand at accelerating rate.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Cost Efficient',
    title: 'Cost Efficient',
    text:
      'Get great deals on our packages. We provide great services without braking your pocket.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Quality Services',
    title: 'Quality Services',
    text:
      'Quality is the king and we believe in providing quality services.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Client Support',
    title: 'Client Support',
    text:
      'Our client support will lead your way. Get in touch with us for any help.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id="feature">
     <Container>
       <SectionHeader
       slogan= "Our Expertise"
       title="We deal in brilliant creativity"
       />
     </Container>
     <Grid sx={styles.grid}>
      {data.map((item)=>(
        <FeatureCardColumn
        key={item.id}
        src={item.imgSrc}
        alt={item.altText}
        title={item.title}
        text={item.text}
        />
      ))}
     </Grid>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
