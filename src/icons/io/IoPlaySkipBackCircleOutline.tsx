

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPlaySkipBackCircleOutline = (props: IconProps) => {

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
          <Path d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z" />
          <Path d="M192,176a16,16,0,0,1,16,16v53l111.68-67.46A10.78,10.78,0,0,1,336,186.87V325.13a10.78,10.78,0,0,1-16.32,9.31L208,267v53a16,16,0,0,1-32,0V192A16,16,0,0,1,192,176Z" />
        </G>
      </Svg>
    );
  }

