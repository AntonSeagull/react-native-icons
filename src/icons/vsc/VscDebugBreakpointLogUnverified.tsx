

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugBreakpointLogUnverified = (props: IconProps) => {

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
          <Path d="M3.02 7.98L8 3l4.98 4.98L8 12.96 3.02 7.98zM8 10.77l2.79-2.79L8 5.19 5.21 7.98 8 10.77z" />
        </G>
      </Svg>
    );
  }

