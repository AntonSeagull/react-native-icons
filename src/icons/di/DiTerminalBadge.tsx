

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiTerminalBadge = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14.392 17.894h6.432v1.608h-6.432v-1.608zM9.568 19.502l4.824-4.824-4.824-4.824-1.608 1.608 3.216 3.216-3.216 3.216z" fill="#444444" />
        </G>
      </Svg>
    );
  }

