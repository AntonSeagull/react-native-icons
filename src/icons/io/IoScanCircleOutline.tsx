

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoScanCircleOutline = (props: IconProps) => {

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
          <Path d="M296,352h28a28,28,0,0,0,28-28V296" />
          <Path d="M352,216V188a28,28,0,0,0-28-28H296" />
          <Path d="M216,352H188a28,28,0,0,1-28-28V296" />
          <Path d="M160,216V188a28,28,0,0,1,28-28h28" />
        </G>
      </Svg>
    );
  }

