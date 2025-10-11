

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiStockx = (props: IconProps) => {

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
          <Path d="M13.74 16.5 22.5 24v-6l-7-6 7-6V0L10.26 10.5v-3L1.5 0v6l7 6-7 6v6l12.24-10.5Z" />
        </G>
      </Svg>
    );
  }

