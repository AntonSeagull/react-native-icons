

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSouthAfricaFlag = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M18 18v104.324L222.445 256 18 389.676V494h55.553l273.765-179H494V197H347.318L73.553 18zm88.447 0l246.235 161H494V18zm246.235 315L106.447 494H494V333z" fill="#000" />
        </G>
      </Svg>
    );
  }

