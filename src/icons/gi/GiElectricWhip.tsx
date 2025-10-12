

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiElectricWhip = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M17.484 39.262c49.142 2.758 98.444 7.823 147.96 15.924l-6.188-37.095L298.61 124.75l8.177-41.976L421.17 255.672l32.39-29.328-4.658 171.826 45.943 6.657-128.062 62.762 28.438 25.59-234.395-2.697c405.34-23.83 225.85-392.453-143.335-451.22z" />
        </G>
      </Svg>
    );
  }

