

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbOld = (props: IconProps) => {

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
          <Path  d="M11 21l-1 -4l-2 -3v-6" />
          <Path  d="M5 14l-1 -3l4 -3l3 2l3 .5" />
          <Path  d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M7 17l-2 4" />
          <Path  d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
        </G>
      </Svg>
    );
  }

