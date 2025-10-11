

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPanelLeftDashed = (props: IconProps) => {

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
          <Path d="M9 14v1" />
          <Path d="M9 19v2" />
          <Path d="M9 3v2" />
          <Path d="M9 9v1" />
        </G>
      </Svg>
    );
  }

