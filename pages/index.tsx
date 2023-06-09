import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import styles from '@/styles/Home.module.scss'

import { headerMenu, homepageData, categoryData, tagData } from '@/constants'
import Header from '@/components/Header/Header'
import IterateChip from '@/components/IterateChip/IterateChip'
import CustomButton from '@/components/CustomButton/CustomButton'
import SearchBar from '@/components/SearchBar/SearchBar'
import ChipSwiper from '@/components/ChipSwiper/ChipSwiper'
import FilterDropdown from '@/components/FilterDropdown/FilterDropdown'
import ToolPanel from '@/components/ToolPanel/ToolPanel'

import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SellIcon from '@mui/icons-material/Sell';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Handyman from '@mui/icons-material/Handyman';
import Article from '@mui/icons-material/Article'
import FilterAltIcon from '@mui/icons-material/FilterAlt';


export default function Home() {
  

  return (
    <>
      <Head>
        <title>Futurepedia</title>
      </Head>
      <main>
        <Header 
          darkLogoSrc={headerMenu.darkLogoSrc}
          mbDarkLogoSrc={headerMenu.mbDarkLogoSrc}
        />

        <div className={styles.main__wrapper}>
          <div className={styles.title__wrapper}>
            <div className={styles.stats}>
              <div className={styles.chip}>
                <PeopleIcon width={16} height={16} style={{color: "#BDBDBD"}}/>
                {homepageData.memberCount}
              </div>
              
              <div className={styles.chip}>
                <Image 
                  src={require('../public/svg/bookmark-tick.svg')}
                  alt=""
                />
                {homepageData.verifiedToolCount}
              </div>

              <div>
                <IterateChip>
                  <div className={classNames(styles.chip, styles.iterate)} {...{'dataindex': 0}}>
                    <Link href="#">
                      <SellIcon fontSize='small' style={{color: "rgb(56, 189, 248)" }}/>
                      <span>Exclusive Deals</span> 
                    </Link>
                  </div>
                  

                  <div className={classNames(styles.chip, styles.iterate)} {...{'dataindex': 1}}>
                    <Link href="#">
                      <FavoriteIcon fontSize='small' style={{color: "rgb(56, 189, 248)" }}/>
                      <span style={{color: "rgb(56, 189, 248)" }}>Sponsor Us</span> 
                    </Link>
                  </div>
                

                  <div className={classNames(styles.chip, styles.iterate)} {...{'dataindex': 2}}>
                    <Link href={headerMenu.linkedInLink || "#"}>
                      <LinkedInIcon width={20} height={20} style={{color: "#0077B5" }}/>
                    </Link>

                    <Link href={headerMenu.twitterLink || "#"}>
                      <TwitterIcon width={20} height={20}  style={{color: "#0077B5" }}/>
                    </Link>

                    <Link href={headerMenu.youtubeLink || "#"}>
                      <YouTubeIcon width={20} height={20} style={{color: "#FF0000" }}/>
                    </Link>
                  </div>
                </IterateChip>
              </div>
            </div>
            <h1>FUTUREPEDIA</h1>
            <p>THE LARGEST AI TOOLS FOR DIRECTORY, UPDATED DAILY</p>

            <div className={styles.btn_section__wrapper}>
              <CustomButton
                textColor='rgb(12, 74, 110)'
                hoverTextColor='white'
                bgColor='white'
                hoverBgColor='rgb(3, 105, 161)'
                notiCount={10}
                className={styles.btn__wrapper}
              > 
                <Handyman />
                Tools Added Today
              </CustomButton>

              <CustomButton
                textColor='rgb(56, 189, 248)'
                hoverTextColor='rgb(56, 189, 248)'
                bgColor='transparent'
                hoverBgColor='white'
                borderColor='rgb(56, 189, 248)'
                className={styles.btn__wrapper}
              > 
                <Article />
                News Added Today
              </CustomButton>
            </div>
          </div>

          <div className={styles.content__wrapper}>
            <div className={styles.filter_section}>
              <SearchBar 
                categoryData={categoryData}
                searchPlaceholder={'Search ' + (homepageData.countAI || '0') + ' AI tools and ' + (homepageData.countCat || '0') + ' categories'}
              />

              <div className={styles.filter_menu}>
                <div className={styles.btn__wrapper}>
                  <CustomButton
                    bgColor='transparent'
                    hoverBgColor='#333333'
                    borderColor='#656D79'
                  >
                    Filter
                    <FilterAltIcon/>
                  </CustomButton>
                </div>
                

                <ChipSwiper className={styles.swiper__wrapper} tags={tagData} />

                <div className={styles.select}>
                  <FilterDropdown/>
                </div>
              </div>

              
            </div>

            <div className={styles.tool_listing}>
              <ToolPanel
                className={styles.panel}
                title='test'
                pricePerMonth={16}
                isVerified={true}
                isSponsor={true}
                favoriteCount={23}
                description='Build websites including copy & images in 30 seconds. Fill in the form and have an AI generate website built and ready at your disposal complete with text, images and styling. '
                tags={[
                  {
                    text: "Free",
                    icon: "Tick"
                  },
                  {
                    text: "Free",
                    icon: "Tick"
                  }
                ]}
                feature={[
                  {
                    text: "API",
                    icon: "Discord"
                  },
                  {
                    text: "Browser",
                    icon: "API"
                  }
                ]}

                hashtag={
                  [
                    "human resources", "test"
                  ]
                }
                thumbnailUrl="https://picsum.photos/340/160"
              />
              <ToolPanel
                className={styles.panel}
                title='test'
                pricePerMonth={16}
                isVerified={true}
                isSponsor={true}
                favoriteCount={23}
                description='Build websites including copy & images in 30 seconds. Fill in the form and have an AI generate website built and ready at your disposal complete with text, images and styling. '
                tags={[
                  {
                    text: "Free",
                    icon: "Tick"
                  },
                  {
                    text: "Free",
                    icon: "Tick"
                  }
                ]}
                feature={[
                  {
                    text: "API",
                    icon: "Discord"
                  },
                  {
                    text: "Browser",
                    icon: "API"
                  }
                ]}

                hashtag={
                  [
                    "human resources", "test"
                  ]
                }
                thumbnailUrl="https://picsum.photos/340/160"
              />
              <ToolPanel
                className={styles.panel}
                title='test'
                pricePerMonth={16}
                isVerified={true}
                isSponsor={true}
                favoriteCount={23}
                description='Build websites including copy & images in 30 seconds. Fill in the form and have an AI generate website built and ready at your disposal complete with text, images and styling. '
                tags={[
                  {
                    text: "Free",
                    icon: "Tick"
                  },
                  {
                    text: "Free",
                    icon: "Tick"
                  }
                ]}
                feature={[
                  {
                    text: "API",
                    icon: "Discord"
                  },
                  {
                    text: "Browser",
                    icon: "API"
                  }
                ]}

                hashtag={
                  [
                    "human resources", "test"
                  ]
                }
                thumbnailUrl="https://picsum.photos/340/160"
              />
            </div>
          </div>
        </div>
        
      </main>
    </>
  )
}
