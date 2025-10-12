

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuRefreshCwOff = (props: IconProps) => {

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
          <Path  d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" />
          <Path  d="M8 16H3v5" />
          <Path  d="M3 12C3 9.51 4 7.26 5.64 5.64" />
          <Path  d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" />
          <Path  d="M21 12c0 1-.16 1.97-.47 2.87" />
          <Path  d="M21 3v5h-5" />
          <Path  d="M22 22 2 2" />
        </G>
      </Svg>
    );
  }

