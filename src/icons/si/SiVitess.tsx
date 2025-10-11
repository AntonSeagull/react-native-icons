

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiVitess = (props: IconProps) => {

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
          <Path d="m19.206 1.045-7.217 13.186L4.817 1.045H0l11.904 21.91L24 1.045h-4.794Z" />
        </G>
      </Svg>
    );
  }

