

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAd = (props: IconProps) => {

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
          <Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <Path d="M7 15v-4a2 2 0 0 1 4 0v4" />
          <Path d="M7 13l4 0" />
          <Path d="M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5" />
        </G>
      </Svg>
    );
  }

