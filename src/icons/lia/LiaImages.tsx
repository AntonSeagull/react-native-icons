

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaImages = (props: IconProps) => {

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
          <Path  d="M 2 5 L 2 23 L 6 23 L 6 27 L 30 27 L 30 9 L 26 9 L 26 5 Z M 4 7 L 24 7 L 24 21 L 4 21 Z M 6 9 L 6 19 L 22 19 L 22 9 Z M 8 11 L 20 11 L 20 17 L 8 17 Z M 26 11 L 28 11 L 28 25 L 8 25 L 8 23 L 26 23 Z" />
        </G>
      </Svg>
    );
  }

