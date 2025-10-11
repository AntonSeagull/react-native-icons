

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuVibrateOff = (props: IconProps) => {

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
          <Path d="m2 8 2 2-2 2 2 2-2 2" />
          <Path d="m22 8-2 2 2 2-2 2 2 2" />
          <Path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
          <Path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
        </G>
      </Svg>
    );
  }

