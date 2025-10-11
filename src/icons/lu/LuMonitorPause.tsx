

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMonitorPause = (props: IconProps) => {

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
          <Path d="M10 13V7" />
          <Path d="M14 13V7" />
          <Path d="M12 17v4" />
          <Path d="M8 21h8" />
        </G>
      </Svg>
    );
  }

