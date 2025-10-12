

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaBarcodeSolid = (props: IconProps) => {

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
          <Path  d="M 2 7 L 2 25 L 4 25 L 4 7 Z M 6 7 L 6 25 L 12 25 L 12 7 Z M 14 7 L 14 25 L 16 25 L 16 7 Z M 18 7 L 18 25 L 22 25 L 22 7 Z M 24 7 L 24 25 L 26 25 L 26 7 Z M 28 7 L 28 25 L 30 25 L 30 7 Z" />
        </G>
      </Svg>
    );
  }

