

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFlipHorizontal2 = (props: IconProps) => {

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
          <Path d="m3 7 5 5-5 5V7" />
          <Path d="m21 7-5 5 5 5V7" />
          <Path d="M12 20v2" />
          <Path d="M12 14v2" />
          <Path d="M12 8v2" />
          <Path d="M12 2v2" />
        </G>
      </Svg>
    );
  }

