

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuClockArrowDown = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 6v6l2 1" />
          <Path  d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
          <Path  d="m14 18 4 4 4-4" />
          <Path  d="M18 14v8" />
        </G>
      </Svg>
    );
  }

