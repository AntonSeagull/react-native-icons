

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBookUp2 = (props: IconProps) => {

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
          <Path d="M12 13V7" />
          <Path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
          <Path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
          <Path d="m9 10 3-3 3 3" />
          <Path d="m9 5 3-3 3 3" />
        </G>
      </Svg>
    );
  }

