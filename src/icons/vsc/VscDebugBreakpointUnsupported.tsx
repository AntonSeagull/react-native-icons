

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugBreakpointUnsupported = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11.326 10.222a4 4 0 1 0-6.653-4.444 4 4 0 0 0 6.653 4.444zM8.65 10H7.4v1h1.25v-1zM7.4 9V5h1.25v4H7.4z" />
        </G>
      </Svg>
    );
  }

