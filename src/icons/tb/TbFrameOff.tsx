

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFrameOff = (props: IconProps) => {

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
          <Path d="M4 7h3m4 0h9" />
          <Path d="M4 17h13" />
          <Path d="M7 7v13" />
          <Path d="M17 4v9m0 4v3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

