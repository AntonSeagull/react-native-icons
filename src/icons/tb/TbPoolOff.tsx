

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPoolOff = (props: IconProps) => {

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
          <Path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.303 0 .6 -.045 .876 -.146" />
          <Path d="M2 16a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1.13 -.856m5.727 1.717a2.4 2.4 0 0 0 1.143 -.861" />
          <Path d="M15 11v-6.5a1.5 1.5 0 0 1 3 0" />
          <Path d="M9 12v-3m0 -4v-.5a1.5 1.5 0 0 0 -1.936 -1.436" />
          <Path d="M15 5h-6" />
          <Path d="M9 10h1m4 0h1" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

