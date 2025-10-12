

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaHouzz = (props: IconProps) => {

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
          <Path  d="M 16 2.28125 L 8 6.84375 L 8 16 L 16 11.4375 Z M 16 11.4375 L 24 16 L 24 6.84375 Z M 24 16 L 16 20.5625 L 16 29.71875 L 24 25.15625 Z M 16 20.5625 L 8 16 L 8 25.15625 Z" />
        </G>
      </Svg>
    );
  }

