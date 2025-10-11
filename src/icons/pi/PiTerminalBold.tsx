

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTerminalBold = (props: IconProps) => {

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
          <Path  d="M120,137,48,201A12,12,0,1,1,32,183l61.91-55L32,73A12,12,0,1,1,48,55l72,64A12,12,0,0,1,120,137Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

