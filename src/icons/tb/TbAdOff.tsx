

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAdOff = (props: IconProps) => {

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
          <Path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
          <Path d="M7 15v-4a2 2 0 0 1 2 -2m2 2v4" />
          <Path d="M7 13h4" />
          <Path d="M17 9v4" />
          <Path d="M16.115 12.131c.33 .149 .595 .412 .747 .74" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

