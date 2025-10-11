

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBot = (props: IconProps) => {

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
          <Path d="M12 8V4H8" />
          <Path d="M2 14h2" />
          <Path d="M20 14h2" />
          <Path d="M15 13v2" />
          <Path d="M9 13v2" />
        </G>
      </Svg>
    );
  }

