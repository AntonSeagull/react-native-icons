

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTicketsPlane = (props: IconProps) => {

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
          <Path  d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
          <Path  d="m12 13.5 3.75.5" />
          <Path  d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
          <Path  d="M6 10V8" />
          <Path  d="M6 14v1" />
          <Path  d="M6 19v2" />
        </G>
      </Svg>
    );
  }

