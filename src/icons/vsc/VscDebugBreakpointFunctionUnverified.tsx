

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugBreakpointFunctionUnverified = (props: IconProps) => {

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
          <Path d="M4 11h8L8 4l-4 7zm2.154-1.25h3.692L8 6.52 6.154 9.75z" />
        </G>
      </Svg>
    );
  }

