

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLifeBuoy = (props: IconProps) => {

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
          <Path d="m4.93 4.93 4.24 4.24" />
          <Path d="m14.83 9.17 4.24-4.24" />
          <Path d="m14.83 14.83 4.24 4.24" />
          <Path d="m9.17 14.83-4.24 4.24" />
        </G>
      </Svg>
    );
  }

