

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCalculator = (props: IconProps) => {

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
          <Line  x1="8" x2="16" y1="6" y2="6" />
          <Line  x1="16" x2="16" y1="14" y2="18" />
          <Path  d="M16 10h.01" />
          <Path  d="M12 10h.01" />
          <Path  d="M8 10h.01" />
          <Path  d="M12 14h.01" />
          <Path  d="M8 14h.01" />
          <Path  d="M12 18h.01" />
          <Path  d="M8 18h.01" />
        </G>
      </Svg>
    );
  }

