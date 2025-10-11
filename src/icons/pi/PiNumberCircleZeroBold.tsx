

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberCircleZeroBold = (props: IconProps) => {

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
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm0-144c-28.26,0-48,24.67-48,60s19.74,60,48,60,48-24.67,48-60S156.26,68,128,68Zm0,96c-23.33,0-24-32.32-24-36s.67-36,24-36,24,32.32,24,36S151.33,164,128,164Z" />
        </G>
      </Svg>
    );
  }

