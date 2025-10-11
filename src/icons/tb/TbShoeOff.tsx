

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbShoeOff = (props: IconProps) => {

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
          <Path d="M13.846 9.868l4.08 .972a4 4 0 0 1 3.074 3.89v2.27m-3 1h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2" />
          <Path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
          <Path d="M10 12l.663 -1.327" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

