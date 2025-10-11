

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowDown01 = (props: IconProps) => {

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
          <Path d="m3 16 4 4 4-4" />
          <Path d="M7 20V4" />
          <Path d="M17 20v-6h-2" />
          <Path d="M15 20h4" />
        </G>
      </Svg>
    );
  }

