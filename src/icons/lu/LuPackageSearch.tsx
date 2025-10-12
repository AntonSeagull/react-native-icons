

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPackageSearch = (props: IconProps) => {

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
          <Circle  cx="18.5" cy="15.5" r="2.5" />
          <Polyline  points="3.29 7 12 12 20.71 7" />
          <Line  x1="12" x2="12" y1="22" y2="12" />
          <Path  d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
          <Path  d="m7.5 4.27 9 5.15" />
          <Path  d="M20.27 17.27 22 19" />
        </G>
      </Svg>
    );
  }

