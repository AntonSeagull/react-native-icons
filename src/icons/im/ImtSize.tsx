

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImtSize = (props: IconProps) => {

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
          <Path d="M1 8h6v2h-2v6h-2v-6h-2zM15 4h-3.934v12h-2.133v-12h-3.934v-2h10z" fill="#000000" />
        </G>
      </Svg>
    );
  }

