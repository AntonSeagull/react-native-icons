

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCrosshair = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="10" />
          <Line  x1="22" x2="18" y1="12" y2="12" />
          <Line  x1="6" x2="2" y1="12" y2="12" />
          <Line  x1="12" x2="12" y1="6" y2="2" />
          <Line  x1="12" x2="12" y1="22" y2="18" />
        </G>
      </Svg>
    );
  }

