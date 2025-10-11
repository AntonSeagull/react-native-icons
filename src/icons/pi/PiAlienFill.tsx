

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlienFill = (props: IconProps) => {

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
          <Path  d="M128,16a96.11,96.11,0,0,0-96,96c0,24,12.56,55.06,33.61,83,21.18,28.15,44.5,45,62.39,45s41.21-16.81,62.39-45c21.05-28,33.61-59,33.61-83A96.11,96.11,0,0,0,128,16ZM64,116a12,12,0,0,1,12-12,36,36,0,0,1,36,36,12,12,0,0,1-12,12A36,36,0,0,1,64,116Zm80,84H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm12-48a12,12,0,0,1-12-12,36,36,0,0,1,36-36,12,12,0,0,1,12,12A36,36,0,0,1,156,152Z" />
        </G>
      </Svg>
    );
  }

