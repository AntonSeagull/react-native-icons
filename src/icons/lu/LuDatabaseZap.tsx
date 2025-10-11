

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDatabaseZap = (props: IconProps) => {

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
          <Path d="M3 5V19A9 3 0 0 0 15 21.84" />
          <Path d="M21 5V8" />
          <Path d="M21 12L18 17H22L19 22" />
          <Path d="M3 12A9 3 0 0 0 14.59 14.87" />
        </G>
      </Svg>
    );
  }

