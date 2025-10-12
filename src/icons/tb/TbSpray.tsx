

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSpray = (props: IconProps) => {

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
          <Path  d="M4 10m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
          <Path  d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" />
          <Path  d="M15 7h.01" />
          <Path  d="M18 9h.01" />
          <Path  d="M18 5h.01" />
          <Path  d="M21 3h.01" />
          <Path  d="M21 7h.01" />
          <Path  d="M21 11h.01" />
          <Path  d="M10 7h1" />
        </G>
      </Svg>
    );
  }

