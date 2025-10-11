

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRoad = (props: IconProps) => {

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
          <Path d="M4 19l4 -14" />
          <Path d="M16 5l4 14" />
          <Path d="M12 8v-2" />
          <Path d="M12 13v-2" />
          <Path d="M12 18v-2" />
        </G>
      </Svg>
    );
  }

