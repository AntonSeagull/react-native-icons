

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCurrency = (props: IconProps) => {

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
          <Circle  cx="12" cy="12" r="8" />
          <Line  x1="3" x2="6" y1="3" y2="6" />
          <Line  x1="21" x2="18" y1="3" y2="6" />
          <Line  x1="3" x2="6" y1="21" y2="18" />
          <Line  x1="21" x2="18" y1="21" y2="18" />
        </G>
      </Svg>
    );
  }

