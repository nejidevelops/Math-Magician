import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 2rem;
  margin-top: 1rem;
  text-align: left;
  min-height: 93vh;
  background-color: #f5f5f5;
`;

const HomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const HomeParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to our page!</HomeTitle>
      <HomeParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem, doloremque perferendis. Eos porro harum
        libero voluptatem magnam? Alias voluptatem porro quas
        ullam. Voluptates vel ad incidunt illo ducimus explicabo
        beatae!
        Ex neque distinctio, rem earum nam optio molestias.
        Facilis odit quidem est recusandae numquam nemo totam
        alias voluptatem, minima minus, eaque, repellat
        perspiciatis! Tenetur totam veniam reprehenderit, dignissimos rem quia!
      </HomeParagraph>
      <HomeParagraph>
        Debitis, cumque nobis possimus reprehenderit dolorem
        nostrum aut odio libero ipsa, consequuntur nisi vitae
        incidunt voluptates repellat dolor. Corrupti obcaecati
        eveniet est pariatur eos esse animi ut explicabo dicta earum.
        Mollitia enim dolore delectus, ipsum, esse tempora, sunt
        commodi consectetur nobis cum at rerum praesentium
        asperiores nihil voluptate saepe est accusamus maxime
        ducimus! Nemo debitis fugiat provident, reprehenderit quaerat ratione.
      </HomeParagraph>
    </HomeContainer>
  );
}

export default Home;
