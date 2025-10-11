

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCpu = (props: IconProps) => {

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
          <Path d="M12 20v2" />
          <Path d="M12 2v2" />
          <Path d="M17 20v2" />
          <Path d="M17 2v2" />
          <Path d="M2 12h2" />
          <Path d="M2 17h2" />
          <Path d="M2 7h2" />
          <Path d="M20 12h2" />
          <Path d="M20 17h2" />
          <Path d="M20 7h2" />
          <Path d="M7 20v2" />
          <Path d="M7 2v2" />
        </G>
      </Svg>
    );
  }

