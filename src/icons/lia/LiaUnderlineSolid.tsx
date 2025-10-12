

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaUnderlineSolid = (props: IconProps) => {

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
          <Path  d="M 8 4 L 8 16 C 8 20.429688 11.570313 24 16 24 C 20.429688 24 24 20.429688 24 16 L 24 4 L 22 4 L 22 16 C 22 19.371094 19.371094 22 16 22 C 12.628906 22 10 19.371094 10 16 L 10 4 Z M 6 26 L 6 28 L 26 28 L 26 26 Z" />
        </G>
      </Svg>
    );
  }

