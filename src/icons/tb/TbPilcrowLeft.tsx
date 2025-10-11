

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPilcrowLeft = (props: IconProps) => {

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
          <Path d="M11 9h-2a3 3 0 1 1 0 -6h7" />
          <Path d="M11 3v11" />
          <Path d="M15 3v11" />
          <Path d="M3 18h18" />
          <Path d="M6 15l-3 3l3 3" />
        </G>
      </Svg>
    );
  }

