

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsMinimize = (props: IconProps) => {

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
          <Path  d="M5 9l4 0l0 -4" />
          <Path  d="M3 3l6 6" />
          <Path  d="M5 15l4 0l0 4" />
          <Path  d="M3 21l6 -6" />
          <Path  d="M19 9l-4 0l0 -4" />
          <Path  d="M15 9l6 -6" />
          <Path  d="M19 15l-4 0l0 4" />
          <Path  d="M15 15l6 6" />
        </G>
      </Svg>
    );
  }

