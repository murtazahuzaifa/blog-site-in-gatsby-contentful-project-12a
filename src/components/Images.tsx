import React, { FC, CSSProperties } from 'react';
import { useStaticQuery, graphql } from "gatsby";
const logo = require('../images/logo.svg');
import { StaticQueryType } from '../typedefs';

interface Props {
  className?: string
  width?: string
  style?: CSSProperties
}

export const Logo: FC<Props> = ({ className, width="150px", style }) => {
  
  return <img className={className} src={logo} style={{...style, width}} />
}