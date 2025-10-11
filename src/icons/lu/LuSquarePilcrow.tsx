

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSquarePilcrow = (props: IconProps) => {

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
          <Path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
          <Path d="M12 7v10" />
          <Path d="M16 7v10" />
        </G>
      </Svg>
    );
  }

