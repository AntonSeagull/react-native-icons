

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbStairsUp = (props: IconProps) => {

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
          <Path d="M22 6h-5v5h-5v5h-5v5h-5" />
          <Path d="M6 10v-7" />
          <Path d="M3 6l3 -3l3 3" />
        </G>
      </Svg>
    );
  }

