

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretDoubleRightDuotone = (props: IconProps) => {

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
          <Path d="M136,128,56,208V48Z" />
          <Path d="M141.66,122.34l-80-80A8,8,0,0,0,48,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,141.66,122.34ZM64,188.69V67.31L124.69,128Zm157.66-55-80,80a8,8,0,0,1-11.32-11.32L204.69,128,130.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,221.66,133.66Z" />
        </G>
      </Svg>
    );
  }

