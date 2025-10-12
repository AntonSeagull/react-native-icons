

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDoorClosedLocked = (props: IconProps) => {

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
          <Path  d="M10 12h.01" />
          <Path  d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
          <Path  d="M2 20h8" />
          <Path  d="M20 17v-2a2 2 0 1 0-4 0v2" />
        </G>
      </Svg>
    );
  }

