

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDesktopThin = (props: IconProps) => {

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
          <Path  d="M208,44H48A20,20,0,0,0,28,64V176a20,20,0,0,0,20,20h76v24H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V196h76a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44ZM48,52H208a12,12,0,0,1,12,12v84H36V64A12,12,0,0,1,48,52ZM208,188H48a12,12,0,0,1-12-12V156H220v20A12,12,0,0,1,208,188Z" />
        </G>
      </Svg>
    );
  }

