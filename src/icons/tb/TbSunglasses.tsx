

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSunglasses = (props: IconProps) => {

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
          <Path  d="M8 4h-2l-3 10" />
          <Path  d="M16 4h2l3 10" />
          <Path  d="M10 16h4" />
          <Path  d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
          <Path  d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
          <Path  d="M4 14l4.5 4.5" />
          <Path  d="M15 14l4.5 4.5" />
        </G>
      </Svg>
    );
  }

