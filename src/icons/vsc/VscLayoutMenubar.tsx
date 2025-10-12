

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscLayoutMenubar = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M1 2.00085L2 1.00085H14L15 2.00085V14.0009L14 15.0009H2L1 14.0009V2.00085ZM2 2.00085V14.0009H14V2.00085H2ZM3 3.00085H5V4.00085H3V3.00085ZM6 3.00085H8V4.00085H6V3.00085ZM11 3.00085H9V4.00085H11V3.00085Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

