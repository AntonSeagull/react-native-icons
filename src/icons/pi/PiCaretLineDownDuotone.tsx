

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineDownDuotone = (props: IconProps) => {

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
          <Path d="M208,72l-80,80L48,72Z" />
          <Path d="M122.34,157.66a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,208,64H48a8,8,0,0,0-5.66,13.66ZM188.69,80,128,140.69,67.31,80ZM216,192a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,192Z" />
        </G>
      </Svg>
    );
  }

