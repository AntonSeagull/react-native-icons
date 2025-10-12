

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGlobeStand = (props: IconProps) => {

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
          <Path  d="M136,184a80,80,0,1,0-80-80A80.09,80.09,0,0,0,136,184Zm0-144a64,64,0,1,1-64,64A64.07,64.07,0,0,1,136,40Zm77.77,133.5a8,8,0,0,1-.23,11.32A111.24,111.24,0,0,1,144,215.72V232h24a8,8,0,0,1,0,16H104a8,8,0,0,1,0-16h24V215.71A112,112,0,0,1,55.18,26.46,8,8,0,1,1,66.72,37.54,96,96,0,0,0,202.46,173.28,8,8,0,0,1,213.77,173.5Z" />
        </G>
      </Svg>
    );
  }

