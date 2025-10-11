

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLoadBalancer = (props: IconProps) => {

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
          <Path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 16v3" />
          <Path d="M12 10v-7" />
          <Path d="M9 6l3 -3l3 3" />
          <Path d="M12 10v-7" />
          <Path d="M9 6l3 -3l3 3" />
          <Path d="M14.894 12.227l6.11 -2.224" />
          <Path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
          <Path d="M9.101 12.214l-6.075 -2.211" />
          <Path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
        </G>
      </Svg>
    );
  }

