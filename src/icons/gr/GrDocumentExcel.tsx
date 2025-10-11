

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocumentExcel = (props: IconProps) => {

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
          <Path  fill="none" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M9.25,12 L7.25,15.25 L5.25,12 L5,12 L7.25,15.5 L4.75,19 L5,19 L7.25,15.75 L9.5,19 L9.75,19 L7.25,15.5 L9.5,12 L9.25,12 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

