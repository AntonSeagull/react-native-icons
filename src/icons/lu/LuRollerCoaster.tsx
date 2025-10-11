

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRollerCoaster = (props: IconProps) => {

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
          <Path d="M6 19V5" />
          <Path d="M10 19V6.8" />
          <Path d="M14 19v-7.8" />
          <Path d="M18 5v4" />
          <Path d="M18 19v-6" />
          <Path d="M22 19V9" />
          <Path d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" />
        </G>
      </Svg>
    );
  }

