

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingBurjAlArab = (props: IconProps) => {

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
          <Path d="M3 21h18" />
          <Path d="M7 21v-18" />
          <Path d="M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72" />
          <Path d="M5 9h12" />
          <Path d="M7 13h4" />
          <Path d="M7 17h4" />
        </G>
      </Svg>
    );
  }

