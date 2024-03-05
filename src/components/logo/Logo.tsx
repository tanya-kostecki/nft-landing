import React from 'react'
import sprite from '../../assets/images/sprite.svg'

type LogoPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string
}
export const Logo = (props: LogoPropsType) => {
  return (
    <svg width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill} xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${sprite}#${props.iconId}`}></use>
    </svg>
  )
}

