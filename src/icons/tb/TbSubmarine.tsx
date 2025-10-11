

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSubmarine = (props: IconProps) => {

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
          <Path d="M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10h0l-3 1.5l-1 -1.5h-2z" />
          <Path d="M17 11l-1 -3h-5l-1 3" />
          <Path d="M13 8v-2a1 1 0 0 1 1 -1h1" />
        </G>
      </Svg>
    );
  }

