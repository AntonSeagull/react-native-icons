

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCpuOff = (props: IconProps) => {

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
          <Path  d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698" />
          <Path  d="M13 9h2v2m0 4h-6v-6" />
          <Path  d="M3 10h2" />
          <Path  d="M3 14h2" />
          <Path  d="M10 3v2" />
          <Path  d="M14 3v2" />
          <Path  d="M21 10h-2" />
          <Path  d="M21 14h-2" />
          <Path  d="M14 21v-2" />
          <Path  d="M10 21v-2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

