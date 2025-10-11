

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPlayForwardCircleOutline = (props: IconProps) => {

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
          <Path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" />
          <Path d="M394.77,246.7,280.32,177.56A10.78,10.78,0,0,0,264,186.87v53.32L160.32,177.56A10.78,10.78,0,0,0,144,186.87V325.13a10.78,10.78,0,0,0,16.32,9.31L264,271.81v53.32a10.78,10.78,0,0,0,16.32,9.31L394.77,265.3A10.89,10.89,0,0,0,394.77,246.7Z" />
        </G>
      </Svg>
    );
  }

