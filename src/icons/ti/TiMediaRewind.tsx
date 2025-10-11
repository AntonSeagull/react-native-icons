

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiMediaRewind = (props: IconProps) => {

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
          <Path d="M10.2 6.4c-.488 0-.931.197-1.253.512-2.381 2.315-5.947 5.789-5.947 5.789l5.944 5.789c.326.315.768.51 1.256.51.994 0 1.8-.805 1.8-1.799v-9c0-.994-.806-1.801-1.8-1.801zM19.2 6.4c-.488 0-.931.197-1.253.512-2.381 2.315-5.947 5.789-5.947 5.789l5.944 5.789c.326.315.768.51 1.256.51.994 0 1.8-.805 1.8-1.799v-9c0-.994-.806-1.801-1.8-1.801z" />
        </G>
      </Svg>
    );
  }

