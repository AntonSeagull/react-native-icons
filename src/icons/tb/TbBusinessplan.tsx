

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBusinessplan = (props: IconProps) => {

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
          <Path  d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
          <Path  d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <Path  d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <Path  d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
          <Path  d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <Path  d="M5 15v1m0 -8v1" />
        </G>
      </Svg>
    );
  }

