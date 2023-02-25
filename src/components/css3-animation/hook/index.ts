import { useRef, MouseEvent, useState} from 'react'
import styles from './index.module.css'
// type T = HTMLDivElement
// type K = React.MouseEventHandler<HTMLButtonElement>
export function useAnimationCar<T extends HTMLElement>() {
  const carRef = useRef<T>(null)
  const [count, setCount] = useState<number>(0)
  const carHandleAdd = (event: MouseEvent) => {
    const ICON_SIZE = 20;
    //创建icon
    // const div = React.createElement(
    //   'div', 
    //   {className: 'circle'}, 
    //   React.createElement('span', {className: 'circle-icon'}, '+')
    // )
    const div = document.createElement('div');
    div.className = styles['circle'];
    const spanAddChild = document.createElement('div')
    spanAddChild.className = styles['circle-icon']
    spanAddChild.innerText = '+'
    div.appendChild(spanAddChild)
    // 点击按键并获取icon初始化位置
    const bntRect = (event?.target as HTMLElement).getBoundingClientRect();
    const left: number = bntRect.left + bntRect.width / 2 - ICON_SIZE / 2;
    const top: number = bntRect.top - ICON_SIZE;
    div.style.setProperty('--left', `${left}px`);
    div.style.setProperty('--top', `${top}px`);
    // 获取icon的结束位置
    const carRect = carRef.current!.getBoundingClientRect();
    const x = carRect.left + carRect.width / 2 - ICON_SIZE / 2 - left;
    const y = carRect.top - ICON_SIZE - top;
    div.style.setProperty('--x', `${x}px`);
    div.style.setProperty('--y', `${y}px`);
    // 动画结束时移除
    div.addEventListener('animationend', () => {
      div.remove();
    })
    // 添加icon到界面
    document.body.appendChild(div);
    setCount(count + 1)
    // setCount(count => count + 1)
  } 
  return {carRef, carHandleAdd, count}
}
