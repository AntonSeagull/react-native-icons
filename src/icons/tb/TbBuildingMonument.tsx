

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingMonument = (props: IconProps) => {

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
          <Path d="M8 18l2 -13l2 -2l2 2l2 13" />
          <Path d="M5 21v-3h14v3" />
          <Path d="M3 21l18 0" />
        </G>
      </Svg>
    );
  }

