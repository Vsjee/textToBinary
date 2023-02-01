import styled from 'styled-components';

const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  padding: 7rem 0%;
  gap: 5rem;

  .inputText,
  .outputText {
    width: 500px;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;

    .inputText,
    .outputText {
      width: 90%;
    }
  }
`;

export default HomeWrapper;
