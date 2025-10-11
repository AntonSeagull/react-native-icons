

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingCottage = (props: IconProps) => {

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
          <Path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
          <Path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
        </G>
      </Svg>
    );
  }

