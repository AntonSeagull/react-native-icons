

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCheckDoubleSolid = (props: IconProps) => {

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
          <Path  d="M 23.28125 7.28125 L 11.5 19.0625 L 8.71875 16.28125 L 7.28125 17.71875 L 10.0625 20.5 L 8 22.5625 L 1.71875 16.28125 L 0.28125 17.71875 L 7.28125 24.71875 L 8 25.40625 L 8.71875 24.71875 L 11.5 21.9375 L 14.28125 24.71875 L 15 25.40625 L 15.71875 24.71875 L 31.625 8.71875 L 30.1875 7.28125 L 15 22.5625 L 12.9375 20.5 L 24.71875 8.71875 Z" />
        </G>
      </Svg>
    );
  }

