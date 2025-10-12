

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSlidersVertical = (props: IconProps) => {

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
          <Path  d="M10 8h4" />
          <Path  d="M12 21v-9" />
          <Path  d="M12 8V3" />
          <Path  d="M17 16h4" />
          <Path  d="M19 12V3" />
          <Path  d="M19 21v-5" />
          <Path  d="M3 14h4" />
          <Path  d="M5 10V3" />
          <Path  d="M5 21v-7" />
        </G>
      </Svg>
    );
  }

