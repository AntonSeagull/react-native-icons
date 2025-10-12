

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocumentZip = (props: IconProps) => {

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
          <Path  fill="none" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M2,13 L7,13 L7,14 L3,18 L3,19 L8,19 M11,12 L11,20 L11,12 Z M15,13 L15,20 L15,13 Z M20,15 C20,13.895 19.105,13 18,13 L15,13 L15,17 L18,17 C19.105,17 20,16.105 20,15 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

