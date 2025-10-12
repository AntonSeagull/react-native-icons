

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiStampThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M220,224a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,224Zm0-80v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V144a12,12,0,0,1,12-12h61.37L92.63,53.87A28,28,0,0,1,120,20h16a28,28,0,0,1,27.38,33.87L146.63,132H208A12,12,0,0,1,220,144ZM117.55,132h20.9l17.1-79.81A20,20,0,0,0,136,28H120a20,20,0,0,0-19.56,24.19ZM212,144a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z" />
        </G>
      </Svg>
    );
  }

