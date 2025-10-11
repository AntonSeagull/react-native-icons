

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMartiniThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M234.83,42.83A4,4,0,0,0,232,36H24a4,4,0,0,0-2.83,6.83L124,145.66V212H88a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8H132V145.66ZM33.66,44H222.34l-24,24H57.66ZM128,138.34,65.66,76H190.34Z" />
        </G>
      </Svg>
    );
  }

