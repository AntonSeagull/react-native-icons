

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMarqueeOff = (props: IconProps) => {

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
          <Path d="M4 6c0 -.556 .227 -1.059 .593 -1.421" />
          <Path d="M9 4h1.5" />
          <Path d="M13.5 4h1.5" />
          <Path d="M18 4a2 2 0 0 1 2 2" />
          <Path d="M20 9v1.5" />
          <Path d="M20 13.5v1.5" />
          <Path d="M19.402 19.426a1.993 1.993 0 0 1 -1.402 .574" />
          <Path d="M15 20h-1.5" />
          <Path d="M10.5 20h-1.5" />
          <Path d="M6 20a2 2 0 0 1 -2 -2" />
          <Path d="M4 15v-1.5" />
          <Path d="M4 10.5v-1.5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

