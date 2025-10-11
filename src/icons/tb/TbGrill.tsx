

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGrill = (props: IconProps) => {

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
          <Path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225z" />
          <Path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
          <Path d="M15 14l1 2" />
          <Path d="M9 14l-3 6" />
          <Path d="M15 18h-8" />
          <Path d="M15 5v-1" />
          <Path d="M12 5v-1" />
          <Path d="M9 5v-1" />
        </G>
      </Svg>
    );
  }

