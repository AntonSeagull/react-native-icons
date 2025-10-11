

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWaveformFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,152a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,32a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32-16a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32-16a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,8a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

