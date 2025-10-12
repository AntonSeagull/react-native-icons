

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaWindowRestoreSolid = (props: IconProps) => {

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
          <Path  d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 12 9 L 12 13 L 9 13 L 9 23 L 20 23 L 20 19 L 23 19 L 23 9 Z M 14 11 L 21 11 L 21 12 L 14 12 Z M 14 14 L 21 14 L 21 17 L 14 17 Z M 11 15 L 12 15 L 12 16.03125 L 11 16.03125 Z M 11 18.03125 L 12 18.03125 L 12 19 L 18 19 L 18 21 L 11 21 Z" />
        </G>
      </Svg>
    );
  }

