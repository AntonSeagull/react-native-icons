

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBedBold = (props: IconProps) => {

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
          <Path d="M212,68H36V48a12,12,0,0,0-24,0V208a12,12,0,0,0,24,0V180H232v28a12,12,0,0,0,24,0V112A44.05,44.05,0,0,0,212,68ZM100,156H36V92h64Zm132,0H124V92h88a20,20,0,0,1,20,20Z" />
        </G>
      </Svg>
    );
  }

