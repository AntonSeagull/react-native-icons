

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTimerFill = (props: IconProps) => {

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
          <Path  d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm45.66,61.66-40,40a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,11.32ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z" />
        </G>
      </Svg>
    );
  }

