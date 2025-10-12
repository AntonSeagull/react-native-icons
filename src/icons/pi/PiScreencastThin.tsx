

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiScreencastThin = (props: IconProps) => {

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
          <Path  d="M228,56V200a12,12,0,0,1-12,12H144a4,4,0,0,1,0-8h72a4,4,0,0,0,4-4V56a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V96a4,4,0,0,1-8,0V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56ZM32,188a4,4,0,0,0,0,8,12,12,0,0,1,12,12,4,4,0,0,0,8,0A20,20,0,0,0,32,188Zm0-32a4,4,0,0,0,0,8,44.05,44.05,0,0,1,44,44,4,4,0,0,0,8,0A52.06,52.06,0,0,0,32,156Zm0-32a4,4,0,0,0,0,8,76.08,76.08,0,0,1,76,76,4,4,0,0,0,8,0A84.09,84.09,0,0,0,32,124Z" />
        </G>
      </Svg>
    );
  }

