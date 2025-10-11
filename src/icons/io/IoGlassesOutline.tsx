

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGlassesOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M224,232a32,32,0,0,1,64,0" />
          <Path d="M64,200c0,96,16,128,80,128s80-32,80-128c0,0-16-16-80-16S64,200,64,200Z" />
          <Path d="M448,200c0,96-16,128-80,128s-80-32-80-128c0,0,16-16,80-16S448,200,448,200Z" />
        </G>
      </Svg>
    );
  }

