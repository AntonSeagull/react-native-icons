

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZoomPan = (props: IconProps) => {

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
          <Path  d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path  d="M17 17l-2.5 -2.5" />
          <Path  d="M10 4l2 -2l2 2" />
          <Path  d="M20 10l2 2l-2 2" />
          <Path  d="M4 10l-2 2l2 2" />
          <Path  d="M10 20l2 2l2 -2" />
        </G>
      </Svg>
    );
  }

