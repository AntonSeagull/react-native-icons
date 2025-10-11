

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTextInitial = (props: IconProps) => {

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
          <Path d="M15 5h6" />
          <Path d="M15 12h6" />
          <Path d="M3 19h18" />
          <Path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" />
          <Path d="M3.92 10h6.16" />
        </G>
      </Svg>
    );
  }

