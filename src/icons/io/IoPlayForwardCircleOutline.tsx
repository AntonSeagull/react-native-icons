

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPlayForwardCircleOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M394.77,246.7,280.32,177.56A10.78,10.78,0,0,0,264,186.87v53.32L160.32,177.56A10.78,10.78,0,0,0,144,186.87V325.13a10.78,10.78,0,0,0,16.32,9.31L264,271.81v53.32a10.78,10.78,0,0,0,16.32,9.31L394.77,265.3A10.89,10.89,0,0,0,394.77,246.7Z" />
        </G>
      </Svg>
    );
  }

