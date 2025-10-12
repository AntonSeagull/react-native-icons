

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRampRight = (props: IconProps) => {

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
          <Path  d="M7 3l0 8.707" />
          <Path  d="M11 7l-4 -4l-4 4" />
          <Path  d="M17 14l4 -4l-4 -4" />
          <Path  d="M7 21a11 11 0 0 1 11 -11h3" />
        </G>
      </Svg>
    );
  }

