

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBanOutline = (props: IconProps) => {

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
          <Circle  cx="256" cy="256" r="208" fill="none" strokeMiterlimit="10" strokeWidth="32" />
          <Line  x1="108.92" y1="108.92" x2="403.08" y2="403.08" fill="none" strokeMiterlimit="10" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

