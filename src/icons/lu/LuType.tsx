

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuType = (props: IconProps) => {

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
          <Path d="M12 4v16" />
          <Path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
          <Path d="M9 20h6" />
        </G>
      </Svg>
    );
  }

