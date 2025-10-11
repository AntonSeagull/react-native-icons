

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWallpaper = (props: IconProps) => {

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
          <Path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12" />
          <Path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M8 18v-12a2 2 0 1 0 -4 0v12" />
        </G>
      </Svg>
    );
  }

