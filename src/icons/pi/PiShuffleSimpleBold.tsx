

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiShuffleSimpleBold = (props: IconProps) => {

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
          <Path  d="M220,48V88a12,12,0,0,1-24,0V77L164.77,108.2a12,12,0,0,1-17-17L179,60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM208,156a12,12,0,0,0-12,12v11L56.49,39.51a12,12,0,0,0-17,17L179,196H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM91.23,147.8,39.51,199.51a12,12,0,0,0,17,17l51.71-51.72a12,12,0,0,0-17-17Z" />
        </G>
      </Svg>
    );
  }

