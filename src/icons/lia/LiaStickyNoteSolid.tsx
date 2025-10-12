

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaStickyNoteSolid = (props: IconProps) => {

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
          <Path  d="M 5 5 L 5 27 L 20.40625 27 L 20.71875 26.71875 L 26.71875 20.71875 L 27 20.40625 L 27 5 Z M 7 7 L 25 7 L 25 19 L 19 19 L 19 25 L 7 25 Z M 21 21 L 23.5625 21 L 21 23.5625 Z" />
        </G>
      </Svg>
    );
  }

