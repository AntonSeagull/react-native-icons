

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaDoorClosedSolid = (props: IconProps) => {

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
          <Path  d="M 8 5 L 8 27 L 24 27 L 24 5 Z M 10 7 L 22 7 L 22 25 L 10 25 Z M 20 15 C 19.449219 15 19 15.449219 19 16 C 19 16.550781 19.449219 17 20 17 C 20.550781 17 21 16.550781 21 16 C 21 15.449219 20.550781 15 20 15 Z" />
        </G>
      </Svg>
    );
  }

