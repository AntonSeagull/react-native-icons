

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBan = (props: IconProps) => {

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
          <Circle  fill="none" cx="256" cy="256" r="200" strokeMiterlimit="10" strokeWidth="48" />
          <Line  x1="114.58" y1="114.58" x2="397.42" y2="397.42" strokeMiterlimit="10" strokeWidth="48" />
        </G>
      </Svg>
    );
  }

