

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStretching2 = (props: IconProps) => {

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
          <Path  d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <Path  d="M6.5 21l3.5 -5" />
          <Path  d="M5 11l7 -2" />
          <Path  d="M16 21l-4 -7v-5l7 -4" />
        </G>
      </Svg>
    );
  }

