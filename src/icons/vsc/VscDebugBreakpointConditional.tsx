

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscDebugBreakpointConditional = (props: IconProps) => {

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
          <Path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm2 5v1H6V9h4zm0-3v1H6V6h4z" />
        </G>
      </Svg>
    );
  }

