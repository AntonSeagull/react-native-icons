

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiThLargeOutline = (props: IconProps) => {

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
          <Path d="M9 2h-5c-1.103 0-2 .896-2 2v5c0 1.104.897 2 2 2h5c1.103 0 2-.896 2-2v-5c0-1.104-.897-2-2-2zm0 7h-5v-5h5v5zM20 2h-5c-1.104 0-2 .896-2 2v5c0 1.104.896 2 2 2h5c1.104 0 2-.896 2-2v-5c0-1.104-.896-2-2-2zm0 7h-5v-5h5v5zM9 13h-5c-1.103 0-2 .896-2 2v5c0 1.104.897 2 2 2h5c1.103 0 2-.896 2-2v-5c0-1.104-.897-2-2-2zm0 7h-5v-5h5v5zM20 13h-5c-1.104 0-2 .896-2 2v5c0 1.104.896 2 2 2h5c1.104 0 2-.896 2-2v-5c0-1.104-.896-2-2-2zm0 7h-5v-5h5v5z" />
        </G>
      </Svg>
    );
  }

