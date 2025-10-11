

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBorderCorners = (props: IconProps) => {

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
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M20 16v2a2 2 0 0 1 -2 2h-2" />
          <Path d="M8 20h-2a2 2 0 0 1 -2 -2v-2" />
          <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
        </G>
      </Svg>
    );
  }

