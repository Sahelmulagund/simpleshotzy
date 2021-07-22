/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/mem3.jpg';
import Member2 from 'assets/team/mem1.jpg';
import Member3 from 'assets/team/mem2.jpg';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Yash Maramangallam',
    title: 'Yash Maramangallam',
    designation: 'Co-Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/yash.mangallam',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/yashmangallam',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/yashmaramangallam/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Ushank Parab',
    title: 'Ushank Parab',
    designation: 'Co-Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/ushank.parab/',
        icon: <FaFacebookF />,
      },
      // {
      //   id: 2,
      //   name: 'twitter',
      //   path: '',
      //   icon: <FaTwitter />,
      // },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/ushankparab/',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Sahel Mulagund',
    title: 'Sahel Mulagund',
    designation: 'Co-Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/sahil.mulagund.3',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://twitter.com/MulagundSahel',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/sahel.web/',
        icon: <FaInstagram />,
      },
    ],
  },
  
  
];

export default function TeamSection() {
  return (
  <section>
    <Container>
      <SectionHeader slogan="Founders"
      title="The most qualified and talented individuals"/>
  
    <Grid sx={styles.grid}>
      {data.map((item)=>(
        <TeamCard 
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
