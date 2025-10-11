

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBusFront = (props: IconProps) => {

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
          <Path d="M4 6 2 7" />
          <Path d="M10 6h4" />
          <Path d="m22 7-2-1" />
          <Path d="M4 11h16" />
          <Path d="M8 15h.01" />
          <Path d="M16 15h.01" />
          <Path d="M6 19v2" />
          <Path d="M18 21v-2" />
        </G>
      </Svg>
    );
  }

