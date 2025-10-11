

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowArcLeftDuotone = (props: IconProps) => {

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
          <Path d="M88,152H24V88Z" />
          <Path d="M201.54,110.46a104,104,0,0,0-145.4-1.63L29.66,82.34A8,8,0,0,0,16,88v64a8,8,0,0,0,8,8H88a8,8,0,0,0,5.66-13.66L67.47,120.16A88,88,0,0,1,216,184a8,8,0,0,0,16,0A103.33,103.33,0,0,0,201.54,110.46ZM32,144V107.31L68.69,144Z" />
        </G>
      </Svg>
    );
  }

