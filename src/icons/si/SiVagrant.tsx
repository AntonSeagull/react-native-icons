

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiVagrant = (props: IconProps) => {

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
          <Path d="M3.556 0L.392 1.846V4.11l7.124 17.3L11.998 24l4.523-2.611 7.083-17.345V1.848l.004-.002L20.44 0l-5.274 3.087v2.111l-3.168 7.384-3.164-7.384V3.109l-.017-.008.017-.01z" />
        </G>
      </Svg>
    );
  }

