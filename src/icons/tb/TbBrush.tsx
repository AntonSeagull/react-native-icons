

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrush = (props: IconProps) => {

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
          <Path  d="M3 21v-4a4 4 0 1 1 4 4h-4" />
          <Path  d="M21 3a16 16 0 0 0 -12.8 10.2" />
          <Path  d="M21 3a16 16 0 0 1 -10.2 12.8" />
          <Path  d="M10.6 9a9 9 0 0 1 4.4 4.4" />
        </G>
      </Svg>
    );
  }

