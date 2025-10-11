

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imble = (props: IconProps) => {

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
          <Path d="M8 1c4.418 0 8 2.91 8 6.5s-3.582 6.5-8 6.5c-0.424 0-0.841-0.027-1.247-0.079-1.718 1.718-3.77 2.027-5.753 2.072v-0.421c1.071-0.525 2-1.48 2-2.572 0-0.152-0.012-0.302-0.034-0.448-1.809-1.192-2.966-3.012-2.966-5.052 0-3.59 3.582-6.5 8-6.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

