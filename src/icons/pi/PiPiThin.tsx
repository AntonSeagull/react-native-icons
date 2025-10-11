

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPiThin = (props: IconProps) => {

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
          <Path  d="M228,172a32,32,0,0,1-64,0V68H92V200a4,4,0,0,1-8,0V68H72a44.05,44.05,0,0,0-44,44,4,4,0,0,1-8,0A52.06,52.06,0,0,1,72,60H224a4,4,0,0,1,0,8H172V172a24,24,0,0,0,48,0,4,4,0,0,1,8,0Z" />
        </G>
      </Svg>
    );
  }

