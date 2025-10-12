

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberSquareThreeBold = (props: IconProps) => {

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
          <Path  d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM92,80a12,12,0,0,1,12-12h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,1,1,95.43,176a12,12,0,1,1,17.14-16.79A16,16,0,1,0,124,132a12,12,0,0,1-9.83-18.88L129,92H104A12,12,0,0,1,92,80Z" />
        </G>
      </Svg>
    );
  }

