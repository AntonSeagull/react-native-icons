

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPi = (props: IconProps) => {

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
          <Path d="M4 7c0-1.7 1.3-3 3-3h13" />
          <Path d="M18 20c-1.7 0-3-1.3-3-3V4" />
        </G>
      </Svg>
    );
  }

