

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCropSolid = (props: IconProps) => {

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
          <Path  d="M 8 4 L 8 8 L 4 8 L 4 10 L 8 10 L 8 24 L 22 24 L 22 28 L 24 28 L 24 24 L 28 24 L 28 22 L 11.4375 22 L 22 11.4375 L 22 21 L 24 21 L 24 9.4375 L 27.71875 5.71875 L 26.28125 4.28125 L 22.5625 8 L 11 8 L 11 10 L 20.5625 10 L 10 20.5625 L 10 4 Z" />
        </G>
      </Svg>
    );
  }

