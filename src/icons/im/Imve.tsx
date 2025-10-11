

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imve = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 14h10c1.657 0 3-1.343 3-3h-16c0 1.657 1.343 3 3 3zM13 12h1v1h-1v-1zM15 2h-14l-1 8h16z" fill="#000000" />
        </G>
      </Svg>
    );
  }

