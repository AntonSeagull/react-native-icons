

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignTopBold = (props: IconProps) => {

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
          <Path  d="M228,40a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40ZM212,88v88a20,20,0,0,1-20,20H156a20,20,0,0,1-20-20V88a20,20,0,0,1,20-20h36A20,20,0,0,1,212,88Zm-24,4H160v80h28Zm-68-4V216a20,20,0,0,1-20,20H64a20,20,0,0,1-20-20V88A20,20,0,0,1,64,68h36A20,20,0,0,1,120,88ZM96,92H68V212H96Z" />
        </G>
      </Svg>
    );
  }

