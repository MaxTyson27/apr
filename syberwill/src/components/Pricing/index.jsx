import React from 'react'
import styles from './Pricing.module.sass'
import icon1 from '../../images/pricing/money.svg'
import icon2 from '../../images/pricing/form.svg'
import icon3 from '../../images/pricing/plus.svg'
import PricingItem from './PricingItem'

const items = [
 {
  icon: icon3,
  isForm: false,
  title: 'Additional Pay Services',
  price: 'Price update',
  border: false,
 },
 {
  icon: icon1,
  isForm: false,
  title: 'Subscription',
  price: 'XXX USDT/monthly',
  border: true,
 },
 {
  icon: icon2,
  isForm: true,
  title: 'We are open to offers',
  border: true,
 },
];

const Pricing = () => {
  return (
    <div className={ styles.root }>
      <div className="container">
        <h2 className="title">Pricing</h2>
        <div className={styles.inner}>
          { items.map(item => <PricingItem { ...item } key={item.title}/>) }
        </div>
      </div>
    </div>
  )
}

export default Pricing
