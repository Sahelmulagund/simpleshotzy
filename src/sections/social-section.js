/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

import Member1 from 'assets/youtube (1).png';
import Member2 from 'assets/facebook.png';
import Member3 from 'assets/instagram.png';
import Member4 from 'assets/linkedin.png';
import Member5 from 'assets/twitter.png';
import Member6 from 'assets/gmail (1).png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'SimpleShotz',
    title: 'SimpleShotz',
    designation: 'Youtube',
    socialProfile: [
      {
        id: 1,
        name: 'youtbe',
        path: 'https://www.youtube.com/channel/UCfRikOxvhtmaWl1W_Hrk2dg',
        icon: <FaYoutube/>,
      },
    
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Simpleshots',
    title: 'SimpleShotz',
    designation: 'Facebook',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/SimpleShotz-106677004402607',
        icon: <FaFacebookF />,
      },
    
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Instagram',
    title: 'simpleshotz_',
    designation: 'Instagram',
    socialProfile: [
      {
        id: 1,
        name: 'instagram',
        path: 'https://www.instagram.com/simpleshotz_/',
        icon: <FaInstagram/>,
      },
    
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'simpleshotz media',
    title: 'SimpleShotz Media',
    designation: 'LinkedIn',
    socialProfile: [
      {
        id: 1,
        name: 'linkedIn',
        path: 'https://www.linkedin.com/in/simpleshotz-media-129417216/',
        icon: <FaLinkedinIn/>,
      },
   
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Simpleshotz',
    title: 'SimpleShotz',
    designation: 'Twitter',
    socialProfile: [
      {
        id: 1,
        name: 'twitter',
        path: 'https://twitter.com/Simpleshotz_',
        icon: <FaTwitter/>,
      },
     
    ],
  },
 
  
];

export default function SocialSection() {
  return (
  <section>
    <Container>
      <SectionHeader slogan="Social Accounts"
      title="Our social presence"/>
  
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
