

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMushroomOff = (props: IconProps) => {

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
          <Path d="M5.874 5.89a8.128 8.128 0 0 0 -1.874 5.21a.9 .9 0 0 0 .9 .9h7.1m4 0h3.1a.9 .9 0 0 0 .9 -.9c0 -4.474 -3.582 -8.1 -8 -8.1c-1.43 0 -2.774 .38 -3.936 1.047" />
          <Path d="M10 12v7a2 2 0 1 0 4 0v-5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

