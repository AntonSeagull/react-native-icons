

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAbacus = (props: IconProps) => {

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
          <Path  d="M5 3v18" />
          <Path  d="M19 21v-18" />
          <Path  d="M5 7h14" />
          <Path  d="M5 15h14" />
          <Path  d="M8 13v4" />
          <Path  d="M11 13v4" />
          <Path  d="M16 13v4" />
          <Path  d="M14 5v4" />
          <Path  d="M11 5v4" />
          <Path  d="M8 5v4" />
          <Path  d="M3 21h18" />
        </G>
      </Svg>
    );
  }

