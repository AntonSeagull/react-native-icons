

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiVbulletin = (props: IconProps) => {

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
          <Path d="M1.09 10.316V24h21.82V0h-2.417l-5.461 19.613h-6.09l-3.134-9.246zm9.283-4.444l1.363 6.308L13.955 0H1.089v5.872Z" />
        </G>
      </Svg>
    );
  }

