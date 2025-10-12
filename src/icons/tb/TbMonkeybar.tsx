

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMonkeybar = (props: IconProps) => {

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
          <Path  d="M3 21v-15l5 -3l5 3v15" />
          <Path  d="M8 21v-7" />
          <Path  d="M3 14h10" />
          <Path  d="M6 10a2 2 0 1 1 4 0" />
          <Path  d="M13 13c6 0 3 8 8 8" />
        </G>
      </Svg>
    );
  }

