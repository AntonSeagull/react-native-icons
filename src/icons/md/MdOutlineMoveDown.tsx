

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineMoveDown = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3,11c0,2.45,1.76,4.47,4.08,4.91l-1.49-1.49L7,13l4,4.01L7,21l-1.41-1.41l1.58-1.58l0-0.06C3.7,17.54,1,14.58,1,11 c0-3.87,3.13-7,7-7h3v2H8C5.24,6,3,8.24,3,11z" />
          <Path  d="M22,11V4h-9v7H22z M20,9h-5V6h5V9z" />
        </G>
      </Svg>
    );
  }

