

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaRubleSignSolid = (props: IconProps) => {

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
          <Path  d="M 11 6 L 11 16 L 9 16 L 9 18 L 11 18 L 11 20 L 9 20 L 9 22 L 11 22 L 11 26 L 13 26 L 13 22 L 18 22 L 18 20 L 13 20 L 13 18 L 19 18 C 22.300781 18 25 15.300781 25 12 C 25 8.699219 22.300781 6 19 6 Z M 13 8 L 19 8 C 21.21875 8 23 9.78125 23 12 C 23 14.21875 21.21875 16 19 16 L 13 16 Z" />
        </G>
      </Svg>
    );
  }

