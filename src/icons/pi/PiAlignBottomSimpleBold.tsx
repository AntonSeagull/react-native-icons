

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignBottomSimpleBold = (props: IconProps) => {

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
          <Path d="M212,232a12,12,0,0,1-12,12H56a12,12,0,0,1,0-24H200A12,12,0,0,1,212,232ZM76,184V40A20,20,0,0,1,96,20h64a20,20,0,0,1,20,20V184a20,20,0,0,1-20,20H96A20,20,0,0,1,76,184Zm24-4h56V44H100Z" />
        </G>
      </Svg>
    );
  }

