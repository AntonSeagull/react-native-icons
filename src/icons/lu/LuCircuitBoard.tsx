

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCircuitBoard = (props: IconProps) => {

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
          <Circle  cx="9" cy="9" r="2" />
          <Circle  cx="15" cy="15" r="2" />
          <Path  d="M11 9h4a2 2 0 0 0 2-2V3" />
          <Path  d="M7 21v-4a2 2 0 0 1 2-2h4" />
        </G>
      </Svg>
    );
  }

