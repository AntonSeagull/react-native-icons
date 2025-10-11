

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoContrastSharp = (props: IconProps) => {

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
          <Path d="M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM128.72,383.28A180,180,0,0,1,256,76V436A178.82,178.82,0,0,1,128.72,383.28Z" />
        </G>
      </Svg>
    );
  }

