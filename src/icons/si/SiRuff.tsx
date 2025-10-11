

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiRuff = (props: IconProps) => {

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
          <Path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3Zm4.2 7.2h8.641c.53 0 .959.43.959.959v3.266c0 .53-.43.959-.959.959h-.961v.768h1.92V16.8h-4.416v-2.88h-.768v2.88H7.2Zm3.648 3.648v.768h2.304v-.768z" />
        </G>
      </Svg>
    );
  }

