

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuFileOutput = (props: IconProps) => {

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
          <Path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <Path d="M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" />
          <Path d="M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" />
          <Path d="m5 11-3 3" />
          <Path d="m5 17-3-3h10" />
        </G>
      </Svg>
    );
  }

