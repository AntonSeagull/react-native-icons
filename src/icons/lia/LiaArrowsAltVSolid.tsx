

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaArrowsAltVSolid = (props: IconProps) => {

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
          <Path  d="M 16 2.09375 L 15.28125 2.78125 L 7.28125 10.78125 L 8.71875 12.21875 L 15 5.9375 L 15 26.0625 L 8.71875 19.78125 L 7.28125 21.21875 L 15.28125 29.21875 L 16 29.90625 L 16.71875 29.21875 L 24.71875 21.21875 L 23.28125 19.78125 L 17 26.0625 L 17 5.9375 L 23.28125 12.21875 L 24.71875 10.78125 L 16.71875 2.78125 Z" />
        </G>
      </Svg>
    );
  }

