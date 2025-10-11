

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTurkishLira = (props: IconProps) => {

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
          <Path d="M15 4 5 9" />
          <Path d="m15 8.5-10 5" />
          <Path d="M18 12a9 9 0 0 1-9 9V3" />
        </G>
      </Svg>
    );
  }

