

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbKerning = (props: IconProps) => {

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
          <Path  d="M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5" />
          <Path  d="M3 9l3 6l3 -6" />
          <Path  d="M9 20l6 -16" />
        </G>
      </Svg>
    );
  }

