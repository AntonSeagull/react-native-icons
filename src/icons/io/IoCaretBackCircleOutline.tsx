

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCaretBackCircleOutline = (props: IconProps) => {

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
          <Path d="M273.77,169.57,184.68,243.7a16,16,0,0,0,0,24.6l89.09,74.13A16,16,0,0,0,300,330.14V181.86A16,16,0,0,0,273.77,169.57Z" />
          <Path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" />
        </G>
      </Svg>
    );
  }

