

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrafficConeLight = (props: IconProps) => {

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
          <Path  d="M232,210H212.27L151.54,35.4A14,14,0,0,0,138.31,26H117.69a14,14,0,0,0-13.23,9.4L43.73,210H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM94,102h68l18.08,52H75.92Zm21.8-62.66A2,2,0,0,1,117.69,38h20.62a2,2,0,0,1,1.89,1.34L157.82,90H98.18ZM71.74,166H184.26l15.3,44H56.44Z" />
        </G>
      </Svg>
    );
  }

