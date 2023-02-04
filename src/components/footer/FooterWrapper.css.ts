import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: auto;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  border-top: 1px solid black;

  .info {
    font-size: 0.9rem;
  }

  .links {
    display: inline-flex;
    gap: 0.5rem;

    a {
      color: #000;
      transition: 0.3s ease-in-out;

      &:hover {
        color: rgb(37, 150, 190);
      }
    }
  }
`;

export default FooterWrapper;
