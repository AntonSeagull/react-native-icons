

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStackPop = (props: IconProps) => {

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
          <Path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" />
          <Path d="M4 15l8 4l8 -4" />
          <Path d="M12 11v-7" />
          <Path d="M9 7l3 -3l3 3" />
        </G>
      </Svg>
    );
  }

