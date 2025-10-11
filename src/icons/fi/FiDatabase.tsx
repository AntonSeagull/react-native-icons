

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiDatabase = (props: IconProps) => {

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
          <Path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <Path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </G>
      </Svg>
    );
  }

