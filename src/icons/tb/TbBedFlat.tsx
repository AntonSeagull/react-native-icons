

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBedFlat = (props: IconProps) => {

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
          <Path d="M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M10 13h11v-2a3 3 0 0 0 -3 -3h-8v5z" />
          <Path d="M3 16h18" />
        </G>
      </Svg>
    );
  }

