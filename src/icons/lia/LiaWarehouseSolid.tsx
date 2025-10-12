

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaWarehouseSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 16 4.90625 L 3.625 10.0625 L 3 10.34375 L 3 27 L 29 27 L 29 10.34375 L 28.375 10.0625 Z M 16 7.09375 L 27 11.6875 L 27 25 L 25 25 L 25 14 L 7 14 L 7 25 L 5 25 L 5 11.6875 Z M 9 16 L 23 16 L 23 25 L 9 25 Z" />
        </G>
      </Svg>
    );
  }

