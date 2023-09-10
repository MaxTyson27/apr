import React from 'react'
import styles from './Learn.module.sass'

import icon1 from '../../images/learn/1.svg'
import icon2 from '../../images/learn/2.svg'
import icon3 from '../../images/learn/3.svg'

import dots1 from '../../images/learn/dots1.png'
import dots2 from '../../images/learn/dots2.png'
import dots3 from '../../images/learn/dots3.png'

import learnBg from '../../images/learn/borders.png'

import LearnContent from './LearnContent'
import LearnForm from './LearnForm'
import Figure from '../Figure'

const Learn = ({ setPopup }) => {

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setPopup(true);
  }

  return (
    <section className={ styles.root } style={{backgroundImage: `url(${learnBg})`}}>
      <div className="container">
        <div className={ styles.inner }>
          <h2 className="title">Learn</h2>
          <div className={styles.list}>
            <div className={styles.item} style={{paddingBottom: '15px', transform: `translateY(30px)`}}>
              <Figure
                width='80px'
                height='70px'
                coords={{ 
                  top: '-110px',
                  left: '60px',
                  transform: 'rotate(70deg)'
                }}
              />
              <LearnContent
                dots={ dots1 }
                icon={ icon1 }
                text='Help Desk'
              />
              <LearnForm/>
            </div>
            <div className={ styles.item_box }>
              <div className={styles.item} style={{paddingBottom: '55px'}}>
                <LearnContent
                  dots={ dots2 }
                  icon={ icon2 }
                  text='Blog FQ'
                />
                <p className={ styles.item_text }>
                  Latest releases and annoncment
                </p>
              </div>
              <Figure
                width='70px'
                height='60px'
                coords={{ 
                  top: '300px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />
              <a href="#" className={ styles.link } onClick={ handleOpenPopup }>
                <span>Contact US</span>
                <div className={ styles.hover_bg }></div>
              </a>
            </div>
            <div className={styles.item} style={{paddingBottom: '35px', transform: `translateY(90px)`}}>
              <Figure
                width='100px'
                height='90px'
                coords={{ 
                  top: '-200px',
                  right: '150px',
                  transform: 'rotate(-70deg)'
                }}
              />
              <LearnContent
                dots={ dots3 }
                icon={ icon3 }
                text='Live Support'
              />
              <a href="#" className={ styles.item_link }>
                <span>Go to Telegram</span>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5525 0.49691C18.3117 0.514427 18.0754 0.570911 17.8527 0.66416H17.8497C17.636 0.74891 16.6197 1.17641 15.0747 1.82441L9.53822 4.15616C5.56547 5.82866 1.66022 7.47566 1.66022 7.47566L1.70672 7.45766C1.70672 7.45766 1.43747 7.54616 1.15622 7.73891C0.982463 7.84948 0.832947 7.99414 0.716717 8.16416C0.578717 8.36666 0.467717 8.67641 0.508967 8.99666C0.576467 9.53816 0.927467 9.86291 1.17947 10.0422C1.43447 10.2237 1.67747 10.3084 1.67747 10.3084H1.68347L5.34572 11.5422C5.50997 12.0694 6.46172 15.1984 6.69047 15.9192C6.82547 16.3497 6.95672 16.6189 7.12097 16.8244C7.20047 16.9294 7.29347 17.0172 7.40522 17.0877C7.46331 17.1215 7.52526 17.1481 7.58972 17.1672L7.55222 17.1582C7.56347 17.1612 7.57247 17.1702 7.58072 17.1732C7.61072 17.1814 7.63097 17.1844 7.66922 17.1904C8.24897 17.3659 8.71472 17.0059 8.71472 17.0059L8.74097 16.9849L10.9032 15.0162L14.5272 17.7964L14.6097 17.8317C15.365 18.1632 16.13 17.9787 16.5342 17.6532C16.9415 17.3254 17.0997 16.9062 17.0997 16.9062L17.126 16.8387L19.9265 2.49191C20.006 2.13791 20.0262 1.80641 19.9385 1.48466C19.848 1.15903 19.639 0.878966 19.3527 0.69941C19.1123 0.553246 18.8335 0.482697 18.5525 0.49691ZM18.4767 2.03441C18.4737 2.08166 18.4827 2.07641 18.4617 2.16716V2.17541L15.6875 16.3729C15.6755 16.3932 15.6552 16.4374 15.5997 16.4817C15.5412 16.5282 15.4947 16.5574 15.251 16.4607L10.8185 13.0624L8.14097 15.5029L8.70347 11.9104L15.9455 5.16041C16.244 4.88291 16.1442 4.82441 16.1442 4.82441C16.1652 4.48391 15.6935 4.72466 15.6935 4.72466L6.56147 10.3819L6.55847 10.3669L2.18147 8.89316V8.89016L2.17022 8.88791C2.17789 8.88536 2.1854 8.88236 2.19272 8.87891L2.21672 8.86691L2.23997 8.85866C2.23997 8.85866 6.14822 7.21166 10.121 5.53916C12.11 4.70141 14.114 3.85766 15.6552 3.20666C16.5693 2.82191 17.4843 2.43941 18.4002 2.05916C18.4617 2.03516 18.4325 2.03441 18.4767 2.03441Z" fill="url(#paint0_linear_576_333)"/>
<defs>
<linearGradient id="paint0_linear_576_333" x1="4.72427" y1="0.495117" x2="14.373" y2="18.9098" gradientUnits="userSpaceOnUse">
<stop stop-color="#03E7D9"/>
<stop offset="1" stop-color="#C9C9C9"/>
</linearGradient>
</defs>
                </svg>
                <div className={ styles.hover_bg }></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learn
