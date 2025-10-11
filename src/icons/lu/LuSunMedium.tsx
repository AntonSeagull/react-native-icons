

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSunMedium = (props: IconProps) => {

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
          <Path d="M12 3v1" />
          <Path d="M12 20v1" />
          <Path d="M3 12h1" />
          <Path d="M20 12h1" />
          <Path d="m18.364 5.636-.707.707" />
          <Path d="m6.343 17.657-.707.707" />
          <Path d="m5.636 5.636.707.707" />
          <Path d="m17.657 17.657.707.707" />
        </G>
      </Svg>
    );
  }

