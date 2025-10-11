

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDesk = (props: IconProps) => {

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
          <Path d="M3 6h18" />
          <Path d="M4 6v13" />
          <Path d="M20 19v-13" />
          <Path d="M4 10h16" />
          <Path d="M15 6v8a2 2 0 0 0 2 2h3" />
        </G>
      </Svg>
    );
  }

