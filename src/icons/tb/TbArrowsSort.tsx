

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsSort = (props: IconProps) => {

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
          <Path d="M3 9l4 -4l4 4m-4 -4v14" />
          <Path d="M21 15l-4 4l-4 -4m4 4v-14" />
        </G>
      </Svg>
    );
  }

