

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaYenSignSolid = (props: IconProps) => {

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
          <Path  d="M 7.1875 5 L 14.0625 16 L 10 16 L 10 18 L 15 18 L 15 20 L 10 20 L 10 22 L 15 22 L 15 27 L 17 27 L 17 22 L 22 22 L 22 20 L 17 20 L 17 18 L 22 18 L 22 16 L 17.9375 16 L 24.8125 5 L 22.4375 5 L 16 15.34375 L 9.5625 5 Z" />
        </G>
      </Svg>
    );
  }

