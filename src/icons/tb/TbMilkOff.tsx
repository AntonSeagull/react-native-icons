

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMilkOff = (props: IconProps) => {

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
          <Path  d="M10 6h6v-2a1 1 0 0 0 -1 -1h-6a1 1 0 0 0 -1 1" />
          <Path  d="M16 6l1.094 1.759a6 6 0 0 1 .906 3.17v3.071m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8.071a6 6 0 0 1 .906 -3.17l.327 -.525" />
          <Path  d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

