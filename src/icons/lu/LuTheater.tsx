

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTheater = (props: IconProps) => {

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
          <Path  d="M2 10s3-3 3-8" />
          <Path  d="M22 10s-3-3-3-8" />
          <Path  d="M10 2c0 4.4-3.6 8-8 8" />
          <Path  d="M14 2c0 4.4 3.6 8 8 8" />
          <Path  d="M2 10s2 2 2 5" />
          <Path  d="M22 10s-2 2-2 5" />
          <Path  d="M8 15h8" />
          <Path  d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
          <Path  d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
        </G>
      </Svg>
    );
  }

