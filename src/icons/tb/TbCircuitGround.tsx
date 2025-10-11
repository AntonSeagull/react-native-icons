

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitGround = (props: IconProps) => {

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
          <Path d="M12 13v-8" />
          <Path d="M4 13h16" />
          <Path d="M7 16h10" />
          <Path d="M10 19h4" />
        </G>
      </Svg>
    );
  }

