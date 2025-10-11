

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVersionsOff = (props: IconProps) => {

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
          <Path d="M10.184 6.162a2 2 0 0 1 1.816 -1.162h6a2 2 0 0 1 2 2v9m-1.185 2.827a1.993 1.993 0 0 1 -.815 .173h-6a2 2 0 0 1 -2 -2v-7" />
          <Path d="M7 7v10" />
          <Path d="M4 8v8" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

