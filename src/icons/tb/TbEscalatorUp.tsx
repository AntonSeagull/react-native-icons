

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEscalatorUp = (props: IconProps) => {

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
          <Path d="M19.5 7h-2.672a2 2 0 0 0 -1.414 .586l-8.414 8.414h-2.5a2.5 2.5 0 1 0 0 5h3.672a2 2 0 0 0 1.414 -.586l8.414 -8.414h1.5a2.5 2.5 0 1 0 0 -5z" />
          <Path d="M6 10v-7" />
          <Path d="M3 6l3 -3l3 3" />
        </G>
      </Svg>
    );
  }

