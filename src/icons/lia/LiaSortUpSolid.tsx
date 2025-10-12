

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaSortUpSolid = (props: IconProps) => {

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
          <Path  d="M 16 8.59375 L 15.28125 9.28125 L 5.28125 19.28125 L 3.59375 21 L 28.40625 21 L 26.71875 19.28125 L 16.71875 9.28125 Z M 16 11.4375 L 23.5625 19 L 8.4375 19 Z" />
        </G>
      </Svg>
    );
  }

