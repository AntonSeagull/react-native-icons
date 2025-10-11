

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandXamarin = (props: IconProps) => {

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
          <Path d="M15.958 21h-7.917a2 2 0 0 1 -1.732 -1l-4.041 -7a2 2 0 0 1 0 -2l4.041 -7a2 2 0 0 1 1.732 -1h7.917a2 2 0 0 1 1.732 1l4.042 7a2 2 0 0 1 0 2l-4.041 7a2 2 0 0 1 -1.733 1z" />
          <Path d="M15 16l-6 -8" />
          <Path d="M9 16l6 -8" />
        </G>
      </Svg>
    );
  }

