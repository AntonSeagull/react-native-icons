

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbViewfinderOff = (props: IconProps) => {

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
          <Path  d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684 -2.328a9 9 0 0 0 -12.094 -12.08" />
          <Path  d="M12 3v4" />
          <Path  d="M12 21v-3" />
          <Path  d="M3 12h4" />
          <Path  d="M21 12h-3" />
          <Path  d="M12 12v.01" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

