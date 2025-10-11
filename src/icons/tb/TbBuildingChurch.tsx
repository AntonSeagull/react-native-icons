

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingChurch = (props: IconProps) => {

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
          <Path d="M3 21l18 0" />
          <Path d="M10 21v-4a2 2 0 0 1 4 0v4" />
          <Path d="M10 5l4 0" />
          <Path d="M12 3l0 5" />
          <Path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
        </G>
      </Svg>
    );
  }

