

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaUndoSolid = (props: IconProps) => {

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
          <Path  d="M 12.78125 5.28125 L 4.78125 13.28125 L 4.09375 14 L 4.78125 14.71875 L 12.78125 22.71875 L 14.21875 21.28125 L 7.9375 15 L 21 15 C 23.753906 15 26 17.246094 26 20 L 26 27 L 28 27 L 28 20 C 28 16.15625 24.84375 13 21 13 L 7.9375 13 L 14.21875 6.71875 Z" />
        </G>
      </Svg>
    );
  }

