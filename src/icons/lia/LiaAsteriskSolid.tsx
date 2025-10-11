

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaAsteriskSolid = (props: IconProps) => {

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
          <Path  d="M 17.699219 17 L 23.898438 25.398438 L 21.5 27 L 16 18.300781 L 10.5 27 L 8.199219 25.398438 L 14.398438 17 L 5.101563 14.601563 L 6 12 L 15.101563 15.199219 L 14.5 5 L 17.5 5 L 17 15.199219 L 26 12 L 26.800781 14.699219 Z" />
        </G>
      </Svg>
    );
  }

