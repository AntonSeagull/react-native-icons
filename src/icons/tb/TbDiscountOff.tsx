

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDiscountOff = (props: IconProps) => {

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
          <Path  d="M9 15l3 -3m2 -2l1 -1" />
          <Path  d="M9.148 9.145a.498 .498 0 0 0 .352 .855a.5 .5 0 0 0 .35 -.142" />
          <Path  d="M14.148 14.145a.498 .498 0 0 0 .352 .855a.5 .5 0 0 0 .35 -.142" />
          <Path  d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

