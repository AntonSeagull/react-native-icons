

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSTurnUp = (props: IconProps) => {

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
          <Path d="M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
          <Path d="M16 6l3 -3l3 3" />
        </G>
      </Svg>
    );
  }

