import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FooterWrapper from './FooterWrapper.css';

function Footer() {
  return (
    <FooterWrapper>
      <div className='info'>Made by David Hernandez</div>
      <div className='links'>
        <a href='https://github.com/Vsjee' target='_blank'>
          <GitHubIcon />
        </a>
        <a href='https://www.linkedin.com/in/david-felipe-hernandez-547109205/' target='_blank'>
          <LinkedInIcon />
        </a>
      </div>
    </FooterWrapper>
  );
}
export default Footer;
