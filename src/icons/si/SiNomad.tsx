

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiNomad = (props: IconProps) => {

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
          <Path d="m12.004 0-10.4 6v12l10.392 6 10.4-6V6L12.004 0zm4.639 13.204-2.77 1.6-3.347-1.832v3.826l-3.144 1.995V10.8L9.88 9.272l3.462 1.823V7.191l3.301-1.984v7.997z" />
        </G>
      </Svg>
    );
  }

