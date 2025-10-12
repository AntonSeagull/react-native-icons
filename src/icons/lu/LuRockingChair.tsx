

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRockingChair = (props: IconProps) => {

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
          <Polyline  points="3.5 2 6.5 12.5 18 12.5" />
          <Line  x1="9.5" x2="5.5" y1="12.5" y2="20" />
          <Line  x1="15" x2="18.5" y1="12.5" y2="20" />
          <Path  d="M2.75 18a13 13 0 0 0 18.5 0" />
        </G>
      </Svg>
    );
  }

