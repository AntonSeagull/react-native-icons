

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPagekit = (props: IconProps) => {

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
          <Path d="M2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0H2.401z" />
        </G>
      </Svg>
    );
  }

