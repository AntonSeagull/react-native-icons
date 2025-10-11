

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPhysotherapist = (props: IconProps) => {

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
          <Path d="M9 15l-1 -3l4 -2l4 1h3.5" />
          <Path d="M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 6m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 17v-7" />
          <Path d="M8 20h7l1 -4l4 -2" />
          <Path d="M18 20h3" />
        </G>
      </Svg>
    );
  }

