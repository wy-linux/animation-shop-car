import React from 'react'
import { useAnimationCar } from './hook'
import carImg from '../../assets/car.png'
import styles from './index.module.css'
const Car: React.FC = () =>{
  const {carRef, carHandleAdd, count} = useAnimationCar<HTMLDivElement>()
  return (
    <div className={styles['car-container']}>
      <div className={styles['car-box']} >
        <span>商品</span>
        <button onClick={carHandleAdd}>+</button>
      </div>
      <div className={styles['shop-car']} ref={carRef}>
        <img src={carImg} />
        <span>{count}</span>
      </div>
    </div>
  )
}
export default Car