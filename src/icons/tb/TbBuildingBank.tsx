

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingBank = (props: IconProps) => {

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
          <Path d="M3 10l18 0" />
          <Path d="M5 6l7 -3l7 3" />
          <Path d="M4 10l0 11" />
          <Path d="M20 10l0 11" />
          <Path d="M8 14l0 3" />
          <Path d="M12 14l0 3" />
          <Path d="M16 14l0 3" />
        </G>
      </Svg>
    );
  }

