import React, { FC, CSSProperties } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import logo from '../images/logo.svg';
import { StaticQueryType } from '../typedefs';
import Img from "gatsby-image";

interface Props {
  className?: string
  width?: string
  style?: CSSProperties
}

export const Logo: FC<Props> = ({ className, width="150px", style }) => {
  
  return <img className={className} src={logo} style={{...style, width}} />
}