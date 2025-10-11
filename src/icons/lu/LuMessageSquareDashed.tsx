

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMessageSquareDashed = (props: IconProps) => {

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
          <Path d="M12 19h.01" />
          <Path d="M12 3h.01" />
          <Path d="M16 19h.01" />
          <Path d="M16 3h.01" />
          <Path d="M2 13h.01" />
          <Path d="M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8" />
          <Path d="M2 5a2 2 0 0 1 2-2" />
          <Path d="M2 9h.01" />
          <Path d="M20 3a2 2 0 0 1 2 2" />
          <Path d="M22 13h.01" />
          <Path d="M22 17a2 2 0 0 1-2 2" />
          <Path d="M22 9h.01" />
          <Path d="M8 3h.01" />
        </G>
      </Svg>
    );
  }

