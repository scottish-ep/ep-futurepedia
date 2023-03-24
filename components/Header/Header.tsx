import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import {useState} from 'react';

import styles from './Header.module.scss';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import HandymanIcon from '@mui/icons-material/Handyman';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface HeaderInterface{
  darkLogoSrc?: string,
  mbDarkLogoSrc?: string,
  linkedInLink?: string,
  twitterLink?: string,
  youtubeLink?: string,
  discordLink?: string
}

const Header = (props: HeaderInterface) => {
  const {darkLogoSrc, mbDarkLogoSrc, twitterLink, linkedInLink, discordLink, youtubeLink} = props;

  const [submitHover, setSubmitHover] = useState(false);
  const [communityHover, setCommunityHover] = useState(false); 

  return (
    <div className={styles.header__container}>
      <div className={styles.header__wrapper}>
        <div className={styles.right_side__wrapper}>
          <ul className={styles.nav_bar}>
            <li className={styles.logo__wrapper}>
              <Link href="/">
                <Image
                  className={styles.desktop_logo}
                  src={darkLogoSrc || require('../../public/svg/dark-logo.svg')}
                  width={200}
                  height={80}
                  alt=""
                />
                <Image
                  className={styles.mb_logo}
                  src={mbDarkLogoSrc || require('../../public/svg/mb-dark-logo.svg')}
                  width={90}
                  height={50}
                  alt=""
                />
              </Link>
            </li>

            <li className={styles.nav_btn}>
              <Link href="#">
                Favourites
              </Link>
            </li>

            <li className={classNames(styles.icon_attach_nav, styles.nav_btn)}>
              <Link href='#'>
                <Image
                  src={require('../../public/svg/blue-dice.svg')}
                  width={22}
                  height={22}
                  alt=""
                />
                Discover
              </Link>
              
              <div>

              </div>
            </li>

            <li 
              className={classNames(styles.nav_btn, submitHover ? styles.active : "")} 
              onMouseEnter={() => setSubmitHover(true)} 
              onMouseLeave={() => setSubmitHover(false)}
            >
              <Link href="#">
                Submit
              </Link>
              <div className={styles.nav_popup}>
                <ul>
                  <li>
                    <Link href="#">
                      <HandymanIcon style={{color: "#424242" }}/>
                      Submit Tool
                    </Link>
                    
                  </li>

                  <li>
                    <Link href="#">
                      <ArticleIcon style={{color: "#424242" }}/>
                      Submit News
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li 
              className={classNames(styles.nav_btn, communityHover ? styles.active : "")} 
              onMouseEnter={() => setCommunityHover(true)} 
              onMouseLeave={() => setCommunityHover(false)}
            >
              <Link href="#">
                Community
              </Link>
              <div className={styles.nav_popup}>
                <ul>
                  <li>
                    <Link href="#">
                      Newsletter Issues
                    </Link>
                  </li>

                  <li>
                    <Link href="#">
                      Latest AI News
                    </Link>
                  </li>

                  <li>
                    <Link href={discordLink || "#"}>
                      Join Discord
                      <Image src={require('../../public/svg/discord.svg')} width={40} height={22} alt=""/>
                    </Link>
                  </li>

                  <li className={styles.socials}>
                    <Link href={linkedInLink || "#"}>
                      <LinkedInIcon fontSize="large" style={{color: "#0077B5" }}/>
                    </Link>

                    <Link href={twitterLink || "#"}>
                      <TwitterIcon fontSize="large" style={{color: "#0077B5" }}/>
                    </Link>

                    <Link href={youtubeLink || "#"}>
                      <YouTubeIcon fontSize="large" style={{color: "#FF0000" }}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          

        </div>

        <div className={styles.left_side__wrapper}>
          <Brightness7Icon />
          
          <div className={styles.google_login__wrapper}>
            <Image
              src={require('../../public/svg/google-logo.svg')}
              alt=""
            />
            Login
            <MenuIcon className={styles.mb_menu}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header;