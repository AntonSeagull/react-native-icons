

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapCode = (props: IconProps) => {

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
          <Path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9" />
          <Path d="M9 4v13" />
          <Path d="M15 7v6.5" />
          <Path d="M20 21l2 -2l-2 -2" />
          <Path d="M17 17l-2 2l2 2" />
        </G>
      </Svg>
    );
  }

