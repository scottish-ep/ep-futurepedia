import Image from "next/image";
import Link from "next/link";

import classNames from "classnames";
import styles from "./ToolPanel.module.scss";
import { isArray } from "@/utils";

import CustomButton from "../CustomButton/CustomButton";

import { Tooltip } from "@mui/material";
import { TagEnum, FeatureEnum } from "@/enums";

import LockOpenIcon from '@mui/icons-material/LockOpen';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VerifiedIcon from '@mui/icons-material/Verified';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ExtensionIcon from '@mui/icons-material/Extension';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

type tagList =  keyof typeof TagEnum;
type featureList = keyof typeof FeatureEnum;

interface ChipInterface {
  text: string,
  icon: tagList | featureList
}

interface ToolPanelInterface{
  title: string,
  isVerified: boolean,
  isSponsor: boolean,
  pricePerMonth?: number,
  favoriteCount: number,
  description: string,
  tags?: ChipInterface[],
  thumbnailUrl: string,
  className?: string,
  toolHref?: string,
  hashtag?: string[],
  feature?: ChipInterface[],
  supportFeatures?: string[]
}

const ToolPanel = (props: ToolPanelInterface) => {
  const {
    title,
    isVerified,
    isSponsor,
    pricePerMonth,
    favoriteCount = 0,
    description,
    tags = [],
    feature = [],
    thumbnailUrl,
    className,
    toolHref,
    hashtag = []
  } = props;

  return (
    <div className={classNames(styles.panel, className)}>
      <Link className={styles.link_section} href={toolHref || "#"}>
        <div className={styles.thumbnail__container}>
          <div className={styles.thumbnail__wrapper}>
            <Image 
              className={styles.thumbnail}
              width={340}
              height={160}
              src={thumbnailUrl} 
              alt={title}
            />
          </div>
          
          {
            pricePerMonth && (
              <div className={styles.price_tag}>
                {pricePerMonth}$/mo
              </div>
            )
          }
          {
            isSponsor && (
              <div className={styles.sponsor_chip}>sponsor</div>
            )
          }
        </div>

        <div className={styles.panel_content}>
          <div className={styles.title_section}>
            <div className={styles.title__wrapper}>
              <span className={styles.title}>{title}</span>
              {isVerified && (
                <Tooltip title="The Futurepedia team has used this tools and recommends it" placement="top">
                  <VerifiedIcon sx={{color:'#0EA5E9'}}/>
                </Tooltip>
              )}
            </div>

            <Tooltip className={styles.favorite_count} title={ favoriteCount + " people favorited this tool"} placement="top">
              <div className="">
                <Image src={require('../../public/svg/love-bookmark.svg')} alt=""/>
                <span>{favoriteCount}</span>
              </div>
            </Tooltip>
          </div>

          <div className={styles.description}>
            {description}
          </div>


        </div>
      </Link>
      

      <div className={styles.bottom_section}>
        <div className={styles.tags_section}>
          <div className={styles.chips__wrapper}>
            {isArray(tags) && tags.map((item:any, index: number) => (
              <div className={styles.chip} key={index}>
                {item.icon == "Lock" && <LockOpenIcon fontSize="small"/>}
                {item.icon == "Tag" && <LocalOfferIcon fontSize="small"/>}
                {item.icon == "Tick" && <CheckCircleOutlineIcon fontSize="small"/>}
                {item.icon == "Coin" && <MonetizationOnIcon fontSize="small"/>}
                {item.text}
              </div>
            ))}
          </div>

          {isArray(feature) && (
            <Tooltip
              placement="top"
              className={styles.feature_count}
              title={
                (<div>
                  {feature.map((item: any, index: number) => (
                    <div className={styles.tag} key={index}>
                      {item.icon == "API" && <Image src={require('../../public/svg/plug.svg')} alt=""/>}
                      {item.icon == "Extension" && <ExtensionIcon/>}
                      {item.icon == "Discord" && <Image src={require('../../public/svg/discord.svg')} alt=""/>}
                      {item.icon == "Mobile" && <PhoneIphoneIcon/>}
                      {item.icon == "Pointer" && <Image src={require('../../public/svg/hand-point.svg')} alt=""/>}
                      {item.icon == "Letter" && <EmailIcon/>}
                      {item.icon == "GitHub" && <GitHubIcon/>}
                      {item.text}
                    </div>
                  ))}
                </div>
                )}
            >
              <div className={styles.counter}>
                <AutoAwesomeIcon/>
                <span>{feature.length}</span>
              </div>
            </Tooltip>
          )}
        </div>


        <div className={styles.hashtag_section}>
          {isArray(hashtag) && hashtag.map((item: any, index: number) => (
            <div className={styles.hashtag} key={index}>
              #{item}
            </div>
          ))}
        </div>

        <div className={styles.btn_section}>
          <Tooltip placement="top" title="Visit the website">
            <div className={styles.btn__wrapper}>
              <CustomButton
                btnUrl="#"
                bgColor="#38BDF8"
                hoverBgColor="#55CEFA"
              >
                <OpenInNewIcon />
              </CustomButton>
            </div>
          </Tooltip>

          <Tooltip placement="top" title="Add to favorites">
            <div className={styles.btn__wrapper}>
              <CustomButton
                bgColor="transparent"
                hoverBgColor="rgba(14, 165, 233, 0.08)"
                borderColor="#38BDF8"
                hoverBorderColor="#55CEFA"
              >
                <Image className={styles.btn_text} src={require("../../public/svg/love-bookmark.svg")} alt=""/>
              </CustomButton>
            </div>
          </Tooltip>
        </div>
      </div>
      
    </div>
  )
}

export default ToolPanel;