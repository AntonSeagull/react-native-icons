

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiControlDuotone = (props: IconProps) => {

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
          <Path d="M200,120H56l72-72Z" />
          <Path d="M205.66,114.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,128H200a8,8,0,0,0,5.66-13.66ZM75.31,112,128,59.31,180.69,112Z" />
        </G>
      </Svg>
    );
  }

