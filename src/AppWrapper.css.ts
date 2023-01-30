import styled from 'styled-components';

const AppWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
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

export default AppWrapper;
