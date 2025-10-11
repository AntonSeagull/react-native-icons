

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiBorderLeft = (props: IconProps) => {

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
          <Path d="M11 3h2v2h-2zm4 0h2v2h-2zM7 3h2v2H7zm12 0h2v2h-2zm0 8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm0 12h2v2h-2zm-4 0h2v2h-2zm-8 0h2v2H7zm4 0h2v2h-2zm0-4h2v2h-2zm0-8h2v2h-2zm4 4h2v2h-2zm-8 0h2v2H7zm4 0h2v2h-2zM3 5v16h2V3H3z" />
        </G>
      </Svg>
    );
  }

