

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBrushSharp = (props: IconProps) => {

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
          <Path  d="M480,96,416,32,172,292l64,64Z" />
          <Path  d="M142,320c-36.52,0-66,30.63-66,68.57,0,25.43-31,45.72-44,45.72C52.24,462.17,86.78,480,120,480c48.62,0,88-40.91,88-91.43C208,350.63,178.52,320,142,320Z" />
        </G>
      </Svg>
    );
  }

