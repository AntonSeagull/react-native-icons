

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartArrowsVertical = (props: IconProps) => {

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
          <Path d="M18 21v-14" />
          <Path d="M9 15l3 -3l3 3" />
          <Path d="M15 10l3 -3l3 3" />
          <Path d="M3 21l18 0" />
          <Path d="M12 21l0 -9" />
          <Path d="M3 6l3 -3l3 3" />
          <Path d="M6 21v-18" />
        </G>
      </Svg>
    );
  }

