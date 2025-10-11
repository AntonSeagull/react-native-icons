

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCallBellThin = (props: IconProps) => {

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
          <Path  d="M24,180H232a4,4,0,0,0,0-8H220V152a92.11,92.11,0,0,0-88-91.91V36h20a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8h20V60.09A92.11,92.11,0,0,0,36,152v20H24a4,4,0,0,0,0,8Zm20-28a84,84,0,0,1,168,0v20H44Zm192,56a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H232A4,4,0,0,1,236,208Z" />
        </G>
      </Svg>
    );
  }

