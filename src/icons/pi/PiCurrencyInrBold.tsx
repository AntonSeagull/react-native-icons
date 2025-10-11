

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCurrencyInrBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M212,80a12,12,0,0,1-12,12H172a64.07,64.07,0,0,1-64,64h-5l65,59.12a12,12,0,1,1-16.14,17.76l-88-80A12,12,0,0,1,72,132h36a40,40,0,0,0,40-40H72a12,12,0,0,1,0-24h68a40,40,0,0,0-32-16H72a12,12,0,0,1,0-24H200a12,12,0,0,1,0,24H157.91a64,64,0,0,1,9.4,16H200A12,12,0,0,1,212,80Z" />
        </G>
      </Svg>
    );
  }

