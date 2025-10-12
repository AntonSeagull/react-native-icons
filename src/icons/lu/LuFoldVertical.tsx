

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFoldVertical = (props: IconProps) => {

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
          <Path  d="M12 22v-6" />
          <Path  d="M12 8V2" />
          <Path  d="M4 12H2" />
          <Path  d="M10 12H8" />
          <Path  d="M16 12h-2" />
          <Path  d="M22 12h-2" />
          <Path  d="m15 19-3-3-3 3" />
          <Path  d="m15 5-3 3-3-3" />
        </G>
      </Svg>
    );
  }

