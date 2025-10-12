

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowUpRight = (props: IconProps) => {

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
          <Path  d="M221.66,85.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,88H80V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8H196.69L162.34,37.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,85.66Z" />
        </G>
      </Svg>
    );
  }

