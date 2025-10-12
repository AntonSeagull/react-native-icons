

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandLaravel = (props: IconProps) => {

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
          <Path  d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
          <Path  d="M11 18v4" />
          <Path  d="M7 15.5l7 -4" />
          <Path  d="M14 7.5v4" />
          <Path  d="M14 11.5l4 2.5" />
          <Path  d="M11 13v-7.5l-4 -2.5l-4 2.5" />
          <Path  d="M7 8l4 -2.5" />
          <Path  d="M18 10l4 -2.5" />
        </G>
      </Svg>
    );
  }

