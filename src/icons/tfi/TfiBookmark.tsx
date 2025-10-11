

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiBookmark = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3.562 1v15.459l4.686-3.27 4.752 3.26v-15.449h-9.438zM12 14.551l-3.756-2.578-3.681 2.568v-12.541h7.437v12.551z" fill="#000000" />
        </G>
      </Svg>
    );
  }

