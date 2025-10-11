

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBugOutline = (props: IconProps) => {

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
          <Path d="M370,378c28.89,23.52,46,46.07,46,86" />
          <Path d="M142,378c-28.89,23.52-46,46.06-46,86" />
          <Path d="M384,208c28.89-23.52,32-56.07,32-96" />
          <Path d="M128,206c-28.89-23.52-32-54.06-32-94" />
          <Path d="M256,448h0c-70.4,0-128-57.6-128-128V223.93c0-65.07,57.6-96,128-96h0c70.4,0,128,25.6,128,96V320C384,390.4,326.4,448,256,448Z" />
          <Path d="M179.43,143.52A49.08,49.08,0,0,1,176,127.79,80,80,0,0,1,255.79,48h.42A80,80,0,0,1,336,127.79a41.91,41.91,0,0,1-3.12,14.3" />
        </G>
      </Svg>
    );
  }

