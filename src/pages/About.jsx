import Creative from 'components/Sections/Creative/Creative';
import Main from 'components/Sections/Main/Main';
import ProductStories from 'components/Sections/ProrductStories/ProductStories';
import Services from 'components/Sections/Services/Services';
import WhatWeDo from 'components/Sections/WhatWeDo/WhatWeDo';
import Connection from 'components/Sections/Сonnection/Сonnection';

const About = () => {
  return (
    <>
      <Main />
      <Services />
      <WhatWeDo />
      <ProductStories />
      <Creative />
      <Connection />
    </>
  );
};

export default About;
