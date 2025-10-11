

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocumentPpt = (props: IconProps) => {

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
          <Path  fill="none" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M4,12 L4.24999995,12 L5.49999995,12 C7.5,12 9,12.5 8.99999995,14.25 C8.9999999,16 7.5,16.5 5.49999995,16.5 L4.24999995,16.5 L4.24999995,19 L4,18.9999999 L4,12 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

