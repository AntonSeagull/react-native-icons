

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaFastBackwardSolid = (props: IconProps) => {

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
          <Path  d="M 17 5 L 15.40625 6.1875 L 3.40625 15.1875 L 2.34375 16 L 3.40625 16.8125 L 15.40625 25.8125 L 17 27 L 17 19.625 L 25.40625 25.8125 L 27 26.96875 L 27 5.03125 L 25.40625 6.1875 L 17 12.375 Z M 25 8.96875 L 25 23.03125 L 16.59375 16.84375 L 15.46875 16 L 16.59375 15.15625 Z M 15 9 L 15 23 L 5.6875 16 Z" />
        </G>
      </Svg>
    );
  }

