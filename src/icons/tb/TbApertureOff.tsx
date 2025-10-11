

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbApertureOff = (props: IconProps) => {

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
          <Path  d="M3.6 15h10.55" />
          <Path  d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
          <Path  d="M7.395 7.534l2.416 7.438" />
          <Path  d="M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98" />
          <Path  d="M20.559 14.51l-8.535 -6.201" />
          <Path  d="M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

