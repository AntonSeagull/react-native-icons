

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocumentTest = (props: IconProps) => {

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
          <Path  fill="none" d="M4.99787498,5.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L20,23 M18,1 L18,6 L23,6 M6,9 L14,9 M8,9 L8,13.5 L3,21.5 L3,23 L17,23 L17,21.4188612 L12,13.5 L12,9 M5.5,17.5 C5.5,17.5 7.5,19.0000002 10,17.5000001 C12.5,16 14.5,17.5000001 14.5,17.5000001" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

