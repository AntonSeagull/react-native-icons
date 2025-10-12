

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScreenshot = (props: IconProps) => {

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
          <Path  d="M7 19a2 2 0 0 1 -2 -2" />
          <Path  d="M5 13v-2" />
          <Path  d="M5 7a2 2 0 0 1 2 -2" />
          <Path  d="M11 5h2" />
          <Path  d="M17 5a2 2 0 0 1 2 2" />
          <Path  d="M19 11v2" />
          <Path  d="M19 17v4" />
          <Path  d="M21 19h-4" />
          <Path  d="M13 19h-2" />
        </G>
      </Svg>
    );
  }

