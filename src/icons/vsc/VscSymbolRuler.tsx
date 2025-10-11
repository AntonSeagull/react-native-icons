

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscSymbolRuler = (props: IconProps) => {

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
          <Path d="M4 1L3 2v12l1 1h8l1-1V2l-1-1H4zm0 2V2h8v12H4v-1h2v-1H4v-2h4V9H4V7h2V6H4V4h4V3H4z" />
        </G>
      </Svg>
    );
  }

