

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowUpSharp = (props: IconProps) => {

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
          <Polyline  points="112 244 256 100 400 244" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48px" />
          <Line  x1="256" y1="120" x2="256" y2="412" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48px" />
        </G>
      </Svg>
    );
  }

