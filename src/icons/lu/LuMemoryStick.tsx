

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMemoryStick = (props: IconProps) => {

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
          <Path  d="M6 19v-3" />
          <Path  d="M10 19v-3" />
          <Path  d="M14 19v-3" />
          <Path  d="M18 19v-3" />
          <Path  d="M8 11V9" />
          <Path  d="M16 11V9" />
          <Path  d="M12 11V9" />
          <Path  d="M2 15h20" />
          <Path  d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" />
        </G>
      </Svg>
    );
  }

