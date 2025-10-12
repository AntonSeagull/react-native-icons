

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPiLight = (props: IconProps) => {

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
          <Path  d="M230,172a34,34,0,0,1-68,0V70H94V200a6,6,0,0,1-12,0V70H72a42,42,0,0,0-42,42,6,6,0,0,1-12,0A54.06,54.06,0,0,1,72,58H224a6,6,0,0,1,0,12H174V172a22,22,0,0,0,44,0,6,6,0,0,1,12,0Z" />
        </G>
      </Svg>
    );
  }

