

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAbacusOff = (props: IconProps) => {

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
          <Path  d="M5 5v16" />
          <Path  d="M19 21v-2m0 -4v-12" />
          <Path  d="M5 7h2m4 0h8" />
          <Path  d="M5 15h10" />
          <Path  d="M8 13v4" />
          <Path  d="M11 13v4" />
          <Path  d="M16 16v1" />
          <Path  d="M14 5v4" />
          <Path  d="M11 5v2" />
          <Path  d="M8 8v1" />
          <Path  d="M3 21h18" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

