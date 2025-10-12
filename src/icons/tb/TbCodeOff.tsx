

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCodeOff = (props: IconProps) => {

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
          <Path  d="M7 8l-4 4l4 4" />
          <Path  d="M17 8l4 4l-2.5 2.5" />
          <Path  d="M14 4l-1.201 4.805m-.802 3.207l-2 7.988" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

