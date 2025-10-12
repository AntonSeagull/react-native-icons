

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrightnessDown = (props: IconProps) => {

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
          <Path  d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path  d="M12 5l0 .01" />
          <Path  d="M17 7l0 .01" />
          <Path  d="M19 12l0 .01" />
          <Path  d="M17 17l0 .01" />
          <Path  d="M12 19l0 .01" />
          <Path  d="M7 17l0 .01" />
          <Path  d="M5 12l0 .01" />
          <Path  d="M7 7l0 .01" />
        </G>
      </Svg>
    );
  }

