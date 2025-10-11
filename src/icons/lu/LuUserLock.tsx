

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuUserLock = (props: IconProps) => {

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
          <Path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
          <Path d="M15 15.5V14a2 2 0 0 1 4 0v1.5" />
        </G>
      </Svg>
    );
  }

