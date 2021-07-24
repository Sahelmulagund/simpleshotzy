/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

import Member1 from 'assets/work.jpg';
import Member2 from 'assets/work3.jpg';
import Member3 from 'assets/work5.jpg';
import Member4 from 'assets/work2.jpg';
import Member5 from 'assets/work4.jpg';
import Member6 from 'assets/work6.jpg';
import WorkCard from 'components/work-card';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'GA 10',
    title: 'GA 10',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: '',
        path: '',
        icon: '',
      },
    
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Freshfromgoa.com',
    title: 'Freshfromgoa.com',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: '',
        path: '',
        icon: '',
      },
    
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: `Fe's Deli`,
    title: `Fe's Deli`,
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: '',
        path: '',
        icon: '',
      },
    
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'GA 10',
    title: 'GA 10',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: '',
        path: '',
        icon: '',
      },
   
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Freshfromgoa.com',
    title: 'Freshfromgoa.com',
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: '',
        path: '',
        icon: '',
      },
     
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: `Fe's Deli`,
    title: `Fe's Deli`,
    designation: '',
    socialProfile: [
      {
        id: 1,
        name: '',
        path: '',
        icon: '',
      },
     
    ],
  },
  
];

export default function Work() {
  return (
  <section>
    <Container>
      <SectionHeader slogan="Our Work"
      title="Some of our partners"/>
  
    <Grid sx={styles.grid}>
      {data.map((item)=>(
        <WorkCard 
         key={item.id}
         src={item.imgSrc}
         alt={item.altText}
         title={item.title}
         designation={item.designation}
         social={item.socialProfile}
        />
      ))}
    </Grid>
    </Container>


  </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
