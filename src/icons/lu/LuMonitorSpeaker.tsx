

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMonitorSpeaker = (props: IconProps) => {

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
          <Path d="M5.5 20H8" />
          <Path d="M17 9h.01" />
          <Path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
        </G>
      </Svg>
    );
  }

