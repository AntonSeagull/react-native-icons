

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDocumentWindows = (props: IconProps) => {

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
          <Path  fill="none" d="M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M14.25,11.5 L8.25,18.5 M8.25,11.5 L14.25,18.5 M20.5,12 L16.5,12 L16.5,18 L20.5,18 M19.5,15 L16.5,15 M7,12 L3,12 L3,18 L7,18 M6,15 L3,15" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

