

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrBladesHorizontal = (props: IconProps) => {

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
          <Path d="M3 17h4m3 0h4m3 0h4M4 21h2a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v16a1 1 0 001 1zm7 0h2a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v16a1 1 0 001 1zm7 0h2a1 1 0 001-1V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </G>
      </Svg>
    );
  }

