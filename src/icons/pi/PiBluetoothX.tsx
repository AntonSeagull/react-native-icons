

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBluetoothX = (props: IconProps) => {

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
          <Path  d="M180.8,169.6,125.33,128l23.47-17.6a8,8,0,0,0-9.6-12.8L120,112V48l19.2,14.4a8,8,0,1,0,9.6-12.8l-32-24A8,8,0,0,0,104,32v80L52.8,73.6a8,8,0,0,0-9.6,12.8L98.67,128,43.2,169.6a8,8,0,1,0,9.6,12.8L104,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM120,208V144l42.67,32ZM237.66,98.34a8,8,0,0,1-11.32,11.32L208,91.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L196.69,80,178.34,61.66a8,8,0,0,1,11.32-11.32L208,68.69l18.34-18.35a8,8,0,0,1,11.32,11.32L219.31,80Z" />
        </G>
      </Svg>
    );
  }

