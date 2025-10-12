

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocumentRtf = (props: IconProps) => {

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
          <Path  fill="none" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M20.5,12 L16.5,12 L16.5,19 M19.5,15.5 L16.5,15.5 M8.5,12 L14.5,12 M11.5,12 L11.5,19 M3,19 L3,12 L4.5,12 C5,12 7,12 7,14 C7,16 5,16 4.5,16 C4,16 3,16 3,16 M5.25,16 L7.5,19" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

