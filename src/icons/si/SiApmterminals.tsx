

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiApmterminals = (props: IconProps) => {

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
          <Path d="M23.8 2.95 0 16.55v4.5L24 9.32V2.95zm.2 10.1-8.87 4.21v3.68l8.87-3.4Z" />
        </G>
      </Svg>
    );
  }

