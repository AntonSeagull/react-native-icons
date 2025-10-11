

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiGoldenline = (props: IconProps) => {

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
          <Path  d="M11.997 24a11.995 11.995 0 0 0 11.949-13.04h-6.781v2.943h1.226a6.667 6.667 0 1 1-.114-4.156h5.509A11.995 11.995 0 1 0 12 23.991z" />
        </G>
      </Svg>
    );
  }

