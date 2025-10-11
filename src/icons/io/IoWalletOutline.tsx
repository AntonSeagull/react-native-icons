

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWalletOutline = (props: IconProps) => {

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
          <Path d="M411.36,144V114A50,50,0,0,0,352,64.9L88.64,109.85A50,50,0,0,0,48,159v49" />
          <Path d="M368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" />
        </G>
      </Svg>
    );
  }

