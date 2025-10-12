

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRadicalLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M246,80v24a6,6,0,0,1-12,0V86H132.16L85.62,210.11a6,6,0,0,1-11.24,0l-48-128a6,6,0,1,1,11.24-4.22L80,190.91l42.38-113A6,6,0,0,1,128,74H240A6,6,0,0,1,246,80Z" />
        </G>
      </Svg>
    );
  }

