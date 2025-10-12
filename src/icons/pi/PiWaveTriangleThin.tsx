

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWaveTriangleThin = (props: IconProps) => {

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
          <Path  d="M235.24,130.34l-52,72a4,4,0,0,1-6.48,0L76,62.83,27.24,130.34a4,4,0,1,1-6.48-4.68l52-72a4,4,0,0,1,6.48,0L180,193.17l48.76-67.51a4,4,0,0,1,6.48,4.68Z" />
        </G>
      </Svg>
    );
  }

