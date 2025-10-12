

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiObelisk = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256 22.127L238.562 57h34.875L256 22.127zM233 75v268h46V75h-46zm-16 286v14h78v-14h-78zm-17.193 32l-13.43 94h139.246l-13.428-94H199.807z" />
        </G>
      </Svg>
    );
  }

