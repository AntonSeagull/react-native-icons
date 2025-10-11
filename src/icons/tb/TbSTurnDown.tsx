

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSTurnDown = (props: IconProps) => {

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
          <Path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
          <Path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5" />
          <Path d="M16 18l3 3l3 -3" />
        </G>
      </Svg>
    );
  }

