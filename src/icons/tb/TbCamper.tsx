

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCamper = (props: IconProps) => {

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
          <Path  d="M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path  d="M5 18h-1a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2h12a4 4 0 0 1 4 4h-18" />
          <Path  d="M9 18h6" />
          <Path  d="M19 18h1a1 1 0 0 0 1 -1v-4l-3 -5" />
          <Path  d="M21 13h-7" />
          <Path  d="M14 8v10" />
        </G>
      </Svg>
    );
  }

