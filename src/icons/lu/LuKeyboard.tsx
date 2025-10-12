

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuKeyboard = (props: IconProps) => {

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
          <Path  d="M10 8h.01" />
          <Path  d="M12 12h.01" />
          <Path  d="M14 8h.01" />
          <Path  d="M16 12h.01" />
          <Path  d="M18 8h.01" />
          <Path  d="M6 8h.01" />
          <Path  d="M7 16h10" />
          <Path  d="M8 12h.01" />
        </G>
      </Svg>
    );
  }

