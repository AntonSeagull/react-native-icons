

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoResizeSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Polyline  points="304 96 416 96 416 208" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Polyline  points="208 416 96 416 96 304" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="405.77" y1="106.2" x2="111.98" y2="400.02" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

