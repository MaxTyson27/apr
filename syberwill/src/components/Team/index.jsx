import React from 'react'
import styles from './Team.module.sass'
import img1 from '../../images/team/1.png'
import img2 from '../../images/team/2.png'
import dots1 from '../../images/team/dots-left.png'
import dots2 from '../../images/team/dots-right.png'
import borderBg from '../../images/team/borders.png'
import TeamItem from './TeamItem'

const items = [
  {img: img1, name: 'Serg Ruden', prof: 'CEO and Founder', text: 'Serg is an investor and serial entrepreneur. Serg has more than 10 years of experience in international marketing agencies and in the fintech industry. Since 2015, he has been heavily engaged in private investment, development and strategic consulting of projects.', dots: { img: dots1, coords: { top: '-29px', left: '180px' } } },
  {img: img2, name: 'Ramin Mikailov', prof: 'CBDO and Co-Founder', text: 'Ramin is cybersecurity expert with more than 14 year of experience in many large companies. Since 2016 he has deeply immersed in business development and strategic management a lot of digital projects.', dots: { img: dots2, coords: { bottom: '-16px', right: '5px' } }}
]

const Team = () => {
  return (
    <section className={ styles.root } style={{ backgroundImage: `url(${borderBg})` }}>
      <div className="container">
        <h2 className='title'>Team</h2>
        <div className={ styles.inner }>
          { items.map(item => <TeamItem { ...item } key={item.name} />) }
        </div>
        <p className={styles.text}>
          Our team have led and delivered large-scale software and design <br /> projects in multiple startups and high-growth environments like CBG, Groupon, Kaspersky Lab and among others
        </p>
      </div>
    </section>
  )
}

export default Team
