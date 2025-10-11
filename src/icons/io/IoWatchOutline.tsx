

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoWatchOutline = (props: IconProps) => {

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
          <Path d="M176,112V40a8,8,0,0,1,8-8H328a8,8,0,0,1,8,8v72" />
          <Path d="M336,400v72a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V400" />
        </G>
      </Svg>
    );
  }

