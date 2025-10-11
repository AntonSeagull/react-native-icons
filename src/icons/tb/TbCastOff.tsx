

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCastOff = (props: IconProps) => {

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
          <Path d="M3 19h.01" />
          <Path d="M7 19a4 4 0 0 0 -4 -4" />
          <Path d="M11 19a8 8 0 0 0 -8 -8" />
          <Path d="M15 19h3a3 3 0 0 0 .875 -.13m2 -2a3 3 0 0 0 .128 -.868v-8a3 3 0 0 0 -3 -3h-9m-3.865 .136a3 3 0 0 0 -1.935 1.864" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

