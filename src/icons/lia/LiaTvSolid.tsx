

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaTvSolid = (props: IconProps) => {

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
          <Path  d="M 2 7 L 2 23 L 30 23 L 30 7 Z M 4 9 L 28 9 L 28 21 L 4 21 Z M 10 24 L 10 26 L 22 26 L 22 24 Z" />
        </G>
      </Svg>
    );
  }

