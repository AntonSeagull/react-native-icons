

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineDownRightThin = (props: IconProps) => {

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
          <Path  d="M220,40a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Zm-28,60a4,4,0,0,0-4,4v86.34L82.83,85.17a4,4,0,0,0-5.66,5.66L182.34,196H96a4,4,0,0,0,0,8h96a4,4,0,0,0,4-4V104A4,4,0,0,0,192,100Z" />
        </G>
      </Svg>
    );
  }

