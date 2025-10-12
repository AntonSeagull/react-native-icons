

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiAlignJustify = (props: IconProps) => {

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
          <Line  x1="21" y1="10" x2="3" y2="10" />
          <Line  x1="21" y1="6" x2="3" y2="6" />
          <Line  x1="21" y1="14" x2="3" y2="14" />
          <Line  x1="21" y1="18" x2="3" y2="18" />
        </G>
      </Svg>
    );
  }

