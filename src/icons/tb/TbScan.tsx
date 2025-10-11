

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScan = (props: IconProps) => {

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
          <Path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
          <Path d="M4 17v1a2 2 0 0 0 2 2h2" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v1" />
          <Path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
          <Path d="M5 12l14 0" />
        </G>
      </Svg>
    );
  }

