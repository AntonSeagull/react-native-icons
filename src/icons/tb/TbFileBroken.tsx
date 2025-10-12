

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileBroken = (props: IconProps) => {

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
          <Path  d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path  d="M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2" />
          <Path  d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2" />
          <Path  d="M5 16h.01" />
          <Path  d="M5 13h.01" />
          <Path  d="M5 10h.01" />
          <Path  d="M19 13h.01" />
          <Path  d="M19 16h.01" />
        </G>
      </Svg>
    );
  }

