

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMenuOutline = (props: IconProps) => {

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
          <Line  x1="80" y1="160" x2="432" y2="160" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="80" y1="256" x2="432" y2="256" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="80" y1="352" x2="432" y2="352" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

