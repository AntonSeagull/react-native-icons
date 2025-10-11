

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlaylistOff = (props: IconProps) => {

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
          <Path d="M14 14a3 3 0 1 0 3 3" />
          <Path d="M17 13v-9h4" />
          <Path d="M13 5h-4m-4 0h-2" />
          <Path d="M3 9h6" />
          <Path d="M9 13h-6" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

