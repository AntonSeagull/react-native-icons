

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuEqualNot = (props: IconProps) => {

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
          <Line  x1="5" x2="19" y1="9" y2="9" />
          <Line  x1="5" x2="19" y1="15" y2="15" />
          <Line  x1="19" x2="5" y1="5" y2="19" />
        </G>
      </Svg>
    );
  }

