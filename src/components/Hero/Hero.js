import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
      Welcome to <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      Freelance Web Designer and Developer based in Karachi, Pakistan. <br /> Highly experienced in designing and developing custom React Application.  
    </SectionText>
    <Button onclick={()=> window.location = ''}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;