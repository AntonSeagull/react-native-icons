

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSyncCircleOutline = (props: IconProps) => {

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
          <Path d="M351.82,271.87v-16A96.15,96.15,0,0,0,184.09,192m-24.2,48.17v16A96.22,96.22,0,0,0,327.81,320" />
        </G>
      </Svg>
    );
  }

