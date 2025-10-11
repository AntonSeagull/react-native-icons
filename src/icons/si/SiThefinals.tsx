

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiThefinals = (props: IconProps) => {

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
          <Path d="M18.523 19.319H24L14.965 6.295c-.626-.904-1.51-1.614-2.847-1.614-1.38 0-2.264.775-2.889 1.614L0 19.319h5.261l3.372-4.759 3.256 4.759h5.478l-5.934-8.712.599-.846 6.491 9.558Zm0 0" />
        </G>
      </Svg>
    );
  }

