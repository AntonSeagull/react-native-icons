

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCaretSquareUp = (props: IconProps) => {

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
          <Path  d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 16 11.09375 L 15.28125 11.78125 L 9.28125 17.78125 L 10.71875 19.21875 L 16 13.9375 L 21.28125 19.21875 L 22.71875 17.78125 L 16.71875 11.78125 Z" />
        </G>
      </Svg>
    );
  }

