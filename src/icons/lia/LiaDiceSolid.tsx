

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaDiceSolid = (props: IconProps) => {

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
          <Path  d="M 12 1 L 0 13 L 12 25 L 24 13 L 12 1 z M 12 3.8007812 L 21.199219 13 L 12 22.199219 L 2.8007812 13 L 12 3.8007812 z M 12 8 A 1 1 0 0 0 12 10 A 1 1 0 0 0 12 8 z M 8 12 A 1 1 0 0 0 8 14 A 1 1 0 0 0 8 12 z M 12 12 A 1 1 0 0 0 12 14 A 1 1 0 0 0 12 12 z M 16 12 A 1 1 0 0 0 16 14 A 1 1 0 0 0 16 12 z M 26.800781 13 L 24.800781 15 L 30 15 L 30 27 L 18 27 L 18 21.800781 L 16 23.800781 L 16 29 L 32 29 L 32 13 L 26.800781 13 z M 12 16 A 1 1 0 0 0 12 18 A 1 1 0 0 0 12 16 z M 24 20 A 1 1 0 0 0 24 22 A 1 1 0 0 0 24 20 z" />
        </G>
      </Svg>
    );
  }

