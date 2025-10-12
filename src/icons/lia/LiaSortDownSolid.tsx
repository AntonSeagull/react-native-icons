

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaSortDownSolid = (props: IconProps) => {

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
          <Path  d="M 3.59375 12 L 5.28125 13.71875 L 15.28125 23.71875 L 16 24.40625 L 16.71875 23.71875 L 26.71875 13.71875 L 28.40625 12 Z M 8.4375 14 L 23.5625 14 L 16 21.5625 Z" />
        </G>
      </Svg>
    );
  }

