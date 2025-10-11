

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayCard3 = (props: IconProps) => {

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
          <Path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" />
          <Path d="M8 6h.01" />
          <Path d="M16 18h.01" />
          <Path d="M10 9h2.5a1.5 1.5 0 0 1 0 3h-1.5h1.5a1.5 1.5 0 0 1 0 3h-2.5" />
        </G>
      </Svg>
    );
  }

