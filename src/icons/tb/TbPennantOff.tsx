

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPennantOff = (props: IconProps) => {

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
          <Path  d="M8 21h4" />
          <Path  d="M10 21v-11m0 -4v-3" />
          <Path  d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

