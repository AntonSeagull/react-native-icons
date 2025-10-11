

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiZotero = (props: IconProps) => {

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
          <Path d="M21.231 2.462 7.18 20.923h14.564V24H2.256v-2.462L16.308 3.076H2.975V0h18.256v2.462z" />
        </G>
      </Svg>
    );
  }

