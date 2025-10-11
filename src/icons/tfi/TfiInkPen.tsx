

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiInkPen = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 0v6.499l5.466 9.499 5.534-9.498v-6.5h-11zM8.471 14h0.002l-0.001 0.002-0.001-0.002zM8.5 6c-0.552 0-1-0.449-1-1s0.448-1 1-1 1 0.449 1 1-0.448 1-1 1zM13 6.23l-4 6.866v-6.167c0.86-0.223 1.5-1 1.5-1.929 0-1.103-0.897-2-2-2s-2 0.897-2 2c0 0.929 0.64 1.706 1.5 1.929v6.254l-4-6.952v-5.231h9v5.23z" />
        </G>
      </Svg>
    );
  }

