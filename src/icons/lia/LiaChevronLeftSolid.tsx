

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaChevronLeftSolid = (props: IconProps) => {

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
          <Path  d="M 19.75 2.59375 L 19.03125 3.28125 L 7.03125 15.28125 L 6.34375 16 L 7.03125 16.71875 L 19.03125 28.71875 L 19.75 29.40625 L 20.46875 28.71875 L 24.0625 25.09375 L 24.75 24.40625 L 24.0625 23.6875 L 16.375 16 L 24.0625 8.3125 L 24.75 7.59375 L 24.0625 6.90625 L 20.46875 3.28125 Z M 19.75 5.4375 L 21.9375 7.625 L 14.25 15.28125 L 13.53125 16 L 14.25 16.71875 L 21.9375 24.375 L 19.75 26.5625 L 9.1875 16 Z" />
        </G>
      </Svg>
    );
  }

