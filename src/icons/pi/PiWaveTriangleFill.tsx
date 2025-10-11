

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWaveTriangleFill = (props: IconProps) => {

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
          <Path  d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-9.85,93.12-40,48A8,8,0,0,1,160,184h-.43a8,8,0,0,1-6.23-3.55l-58-87.09L62.15,133.12a8,8,0,0,1-12.3-10.24l40-48a8,8,0,0,1,12.81.68l58.05,87.09,33.14-39.77a8,8,0,1,1,12.3,10.24Z" />
        </G>
      </Svg>
    );
  }

