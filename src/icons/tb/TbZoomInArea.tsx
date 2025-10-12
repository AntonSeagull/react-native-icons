

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZoomInArea = (props: IconProps) => {

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
          <Path  d="M15 13v4" />
          <Path  d="M13 15h4" />
          <Path  d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path  d="M22 22l-3 -3" />
          <Path  d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
          <Path  d="M3 11v-1" />
          <Path  d="M3 6v-1a2 2 0 0 1 2 -2h1" />
          <Path  d="M10 3h1" />
          <Path  d="M15 3h1a2 2 0 0 1 2 2v1" />
        </G>
      </Svg>
    );
  }

