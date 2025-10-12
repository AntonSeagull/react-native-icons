

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGpu = (props: IconProps) => {

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
          <Circle  cx="16" cy="11" r="2" />
          <Circle  cx="8" cy="11" r="2" />
          <Path  d="M2 21V3" />
          <Path  d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" />
          <Path  d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
        </G>
      </Svg>
    );
  }

