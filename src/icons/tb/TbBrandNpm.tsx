

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandNpm = (props: IconProps) => {

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
          <Path d="M1 8h22v7h-12v2h-4v-2h-6z" />
          <Path d="M7 8v7" />
          <Path d="M14 8v7" />
          <Path d="M17 11v4" />
          <Path d="M4 11v4" />
          <Path d="M11 11v1" />
          <Path d="M20 11v4" />
        </G>
      </Svg>
    );
  }

