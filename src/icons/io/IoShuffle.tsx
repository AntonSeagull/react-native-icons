

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoShuffle = (props: IconProps) => {

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
          <Path d="M64,352h85.19a80,80,0,0,0,66.56-35.62L256,256" />
          <Path d="M64,160h85.19a80,80,0,0,1,66.56,35.62l80.5,120.76A80,80,0,0,0,362.81,352H416" />
          <Path d="M416,160H362.81a80,80,0,0,0-66.56,35.62L288,208" />
        </G>
      </Svg>
    );
  }

