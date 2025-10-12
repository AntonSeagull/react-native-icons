

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWifiLowThin = (props: IconProps) => {

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
          <Path  d="M136,204a8,8,0,1,1-8-8A8,8,0,0,1,136,204Zm34.35-42.23a72,72,0,0,0-84.7,0,4,4,0,1,0,4.71,6.46,64,64,0,0,1,75.28,0,4,4,0,1,0,4.71-6.46Z" />
        </G>
      </Svg>
    );
  }

