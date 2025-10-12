

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaCrossSolid = (props: IconProps) => {

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
          <Path  d="M 13 3 L 13 9 L 7 9 L 7 15 L 13 15 L 13 29 L 19 29 L 19 15 L 25 15 L 25 9 L 19 9 L 19 3 Z M 15 5 L 17 5 L 17 11 L 23 11 L 23 13 L 17 13 L 17 27 L 15 27 L 15 13 L 9 13 L 9 11 L 15 11 Z" />
        </G>
      </Svg>
    );
  }

