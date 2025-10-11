

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCardSharp = (props: IconProps) => {

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
          <Path d="M32,416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V222H32ZM98,278a8,8,0,0,1,8-8h92a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H106a8,8,0,0,1-8-8Z" />
          <Path d="M464,80H48A16,16,0,0,0,32,96v66H480V96A16,16,0,0,0,464,80Z" />
        </G>
      </Svg>
    );
  }

