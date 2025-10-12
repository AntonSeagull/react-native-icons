

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMaximize = (props: IconProps) => {

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
          <Path  d="M8 3H5a2 2 0 0 0-2 2v3" />
          <Path  d="M21 8V5a2 2 0 0 0-2-2h-3" />
          <Path  d="M3 16v3a2 2 0 0 0 2 2h3" />
          <Path  d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </G>
      </Svg>
    );
  }

