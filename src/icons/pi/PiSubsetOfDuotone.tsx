

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSubsetOfDuotone = (props: IconProps) => {

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
          <Path d="M200,56V168H104a56,56,0,0,1,0-112Z" />
          <Path d="M208,208a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H200A8,8,0,0,1,208,208Zm-8-48H104a48,48,0,0,1,0-96h96a8,8,0,0,0,0-16H104a64,64,0,0,0,0,128h96a8,8,0,0,0,0-16Z" />
        </G>
      </Svg>
    );
  }

