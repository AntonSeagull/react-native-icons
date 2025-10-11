

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChatsTeardropThin = (props: IconProps) => {

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
          <Path  d="M166.76,76.32A76,76,0,0,0,20,104v64a12,12,0,0,0,12,12H89.33A76.13,76.13,0,0,0,160,228h64a12,12,0,0,0,12-12V152A76,76,0,0,0,166.76,76.32ZM28,168V104a68,68,0,1,1,68,68H32A4,4,0,0,1,28,168Zm200,48a4,4,0,0,1-4,4H160A68.16,68.16,0,0,1,98,180,76,76,0,0,0,169.5,84.67,68,68,0,0,1,228,152Z" />
        </G>
      </Svg>
    );
  }

