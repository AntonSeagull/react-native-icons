

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLockPassword = (props: IconProps) => {

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
          <Path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
          <Path d="M8 11v-4a4 4 0 1 1 8 0v4" />
          <Path d="M15 16h.01" />
          <Path d="M12.01 16h.01" />
          <Path d="M9.02 16h.01" />
        </G>
      </Svg>
    );
  }

