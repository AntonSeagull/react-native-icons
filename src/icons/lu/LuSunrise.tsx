

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSunrise = (props: IconProps) => {

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
          <Path d="M12 2v8" />
          <Path d="m4.93 10.93 1.41 1.41" />
          <Path d="M2 18h2" />
          <Path d="M20 18h2" />
          <Path d="m19.07 10.93-1.41 1.41" />
          <Path d="M22 22H2" />
          <Path d="m8 6 4-4 4 4" />
          <Path d="M16 18a4 4 0 0 0-8 0" />
        </G>
      </Svg>
    );
  }

