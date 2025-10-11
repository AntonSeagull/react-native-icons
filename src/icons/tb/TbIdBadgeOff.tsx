

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIdBadgeOff = (props: IconProps) => {

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
          <Path d="M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3 3 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869" />
          <Path d="M11.179 11.176a2 2 0 1 0 2.635 2.667" />
          <Path d="M10 6h4" />
          <Path d="M9 18h6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

