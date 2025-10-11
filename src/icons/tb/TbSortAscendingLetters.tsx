

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSortAscendingLetters = (props: IconProps) => {

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
          <Path d="M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4" />
          <Path d="M19 21h-4l4 -7h-4" />
          <Path d="M4 15l3 3l3 -3" />
          <Path d="M7 6v12" />
        </G>
      </Svg>
    );
  }

