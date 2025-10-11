

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWiperWash = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
          <Path d="M12 20l0 -14" />
          <Path d="M4 6a4 4 0 0 1 .4 -1.8" />
          <Path d="M7 2.1a4 4 0 0 1 2 0" />
          <Path d="M12 6a4 4 0 0 0 -.4 -1.8" />
          <Path d="M12 6a4 4 0 0 1 .4 -1.8" />
          <Path d="M15 2.1a4 4 0 0 1 2 0" />
          <Path d="M20 6a4 4 0 0 0 -.4 -1.8" />
        </G>
      </Svg>
    );
  }

