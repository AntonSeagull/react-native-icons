

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiSpectrum = (props: IconProps) => {

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
          <Path d="M0 10.2A1.8 1.8 0 001.8 12h1.8a8.4 8.4 0 018.4 8.4v1.8a1.8 1.8 0 001.8 1.8h8.4a1.8 1.8 0 001.8-1.8v-1.8C24 9.133 14.867 0 3.6 0H1.8A1.8 1.8 0 000 1.8v8.4z" />
        </G>
      </Svg>
    );
  }

