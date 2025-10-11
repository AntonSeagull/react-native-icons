

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiJoystickAlt = (props: IconProps) => {

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
          <Path d="M10 9H8v2H6v2h2v2h2v-2h2v-2h-2z" />
          <Path d="M15 5H9a7 7 0 0 0-7 7 7 7 0 0 0 7 7h6a7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 12H9A5 5 0 1 1 9 7h6a5 5 0 1 1 0 10z" />
        </G>
      </Svg>
    );
  }

