

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMonitorUp = (props: IconProps) => {

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
          <Path d="m9 10 3-3 3 3" />
          <Path d="M12 13V7" />
          <Path d="M12 17v4" />
          <Path d="M8 21h8" />
        </G>
      </Svg>
    );
  }

