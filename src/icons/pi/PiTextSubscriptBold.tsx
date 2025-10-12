

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextSubscriptBold = (props: IconProps) => {

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
          <Path  d="M252,208a12,12,0,0,1-12,12H192a12,12,0,0,1-9.6-19.2l43.17-57.56a12,12,0,0,0-2.35-16.82A12,12,0,0,0,204.68,132a12,12,0,0,1-22.63-8,36.3,36.3,0,0,1,5.2-9.67,36,36,0,0,1,57.5,43.34L216,196h24A12,12,0,0,1,252,208ZM151.86,46.93a12,12,0,0,0-16.93,1.21L92,97.68,49.07,48.14A12,12,0,0,0,30.93,63.86L76.12,116,30.93,168.14a12,12,0,0,0,18.14,15.72L92,134.32l42.93,49.54a12,12,0,1,0,18.14-15.72L107.88,116l45.19-52.14A12,12,0,0,0,151.86,46.93Z" />
        </G>
      </Svg>
    );
  }

