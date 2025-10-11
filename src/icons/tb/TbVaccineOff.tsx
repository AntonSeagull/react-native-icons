

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVaccineOff = (props: IconProps) => {

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
          <Path d="M17 3l4 4" />
          <Path d="M19 5l-4.5 4.5" />
          <Path d="M11.5 6.5l6 6" />
          <Path d="M16.5 11.5l-.5 .5m-2 2l-4 4h-4v-4l4 -4m2 -2l.5 -.5" />
          <Path d="M7.5 12.5l1.5 1.5" />
          <Path d="M3 21l3 -3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

