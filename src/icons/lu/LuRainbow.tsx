

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRainbow = (props: IconProps) => {

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
          <Path d="M22 17a10 10 0 0 0-20 0" />
          <Path d="M6 17a6 6 0 0 1 12 0" />
          <Path d="M10 17a2 2 0 0 1 4 0" />
        </G>
      </Svg>
    );
  }

