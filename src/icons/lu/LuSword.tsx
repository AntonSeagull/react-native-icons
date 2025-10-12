

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSword = (props: IconProps) => {

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
          <Polyline  points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
          <Line  x1="13" x2="19" y1="19" y2="13" />
          <Line  x1="16" x2="20" y1="16" y2="20" />
          <Line  x1="19" x2="21" y1="21" y2="19" />
        </G>
      </Svg>
    );
  }

