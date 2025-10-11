

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaRedoSolid = (props: IconProps) => {

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
          <Path  d="M 19.21875 5.28125 L 17.78125 6.71875 L 24.0625 13 L 11 13 C 7.15625 13 4 16.15625 4 20 L 4 27 L 6 27 L 6 20 C 6 17.246094 8.246094 15 11 15 L 24.0625 15 L 17.78125 21.28125 L 19.21875 22.71875 L 27.21875 14.71875 L 27.90625 14 L 27.21875 13.28125 Z" />
        </G>
      </Svg>
    );
  }

