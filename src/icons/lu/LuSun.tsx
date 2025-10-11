

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSun = (props: IconProps) => {

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
          <Path d="M12 2v2" />
          <Path d="M12 20v2" />
          <Path d="m4.93 4.93 1.41 1.41" />
          <Path d="m17.66 17.66 1.41 1.41" />
          <Path d="M2 12h2" />
          <Path d="M20 12h2" />
          <Path d="m6.34 17.66-1.41 1.41" />
          <Path d="m19.07 4.93-1.41 1.41" />
        </G>
      </Svg>
    );
  }

