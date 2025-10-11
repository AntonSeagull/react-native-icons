

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidTrafficBarrier = (props: IconProps) => {

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
          <Path d="M21 6h-2V3h-2v3H7V3H5v3H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v6h2v-6h10v6h2v-6h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM4.42 13l2.857-5H9.58l-2.857 5H4.42zm7.857-5h2.303l-2.857 5H9.42l2.857-5zm5 0h2.303l-2.857 5H14.42l2.857-5z" />
        </G>
      </Svg>
    );
  }

