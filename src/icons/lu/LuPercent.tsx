

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPercent = (props: IconProps) => {

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
          <Circle  cx="6.5" cy="6.5" r="2.5" />
          <Circle  cx="17.5" cy="17.5" r="2.5" />
          <Line  x1="19" x2="5" y1="5" y2="19" />
        </G>
      </Svg>
    );
  }

