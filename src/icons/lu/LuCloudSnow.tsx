

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCloudSnow = (props: IconProps) => {

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
          <Path  d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <Path  d="M8 15h.01" />
          <Path  d="M8 19h.01" />
          <Path  d="M12 17h.01" />
          <Path  d="M12 21h.01" />
          <Path  d="M16 15h.01" />
          <Path  d="M16 19h.01" />
        </G>
      </Svg>
    );
  }

