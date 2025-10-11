

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTentOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11 14l4 6h5m-2.863 -6.868l-5.137 -9.132l-1.44 2.559m-1.44 2.563l-6.12 10.878h6l4 -6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

