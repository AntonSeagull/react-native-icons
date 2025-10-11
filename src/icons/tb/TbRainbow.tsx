

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRainbow = (props: IconProps) => {

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
          <Path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
          <Path d="M18 17a6 6 0 1 0 -12 0" />
          <Path d="M14 17a2 2 0 1 0 -4 0" />
        </G>
      </Svg>
    );
  }

