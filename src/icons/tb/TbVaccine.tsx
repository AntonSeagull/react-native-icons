

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVaccine = (props: IconProps) => {

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
          <Path  d="M17 3l4 4" />
          <Path  d="M19 5l-4.5 4.5" />
          <Path  d="M11.5 6.5l6 6" />
          <Path  d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
          <Path  d="M7.5 12.5l1.5 1.5" />
          <Path  d="M10.5 9.5l1.5 1.5" />
          <Path  d="M3 21l3 -3" />
        </G>
      </Svg>
    );
  }

