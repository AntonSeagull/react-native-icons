

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiShiftRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8.354 3.646l4.853 4.854-4.854 4.854-0.707-0.707 3.647-3.647h-11.293v-1h11.292l-3.646-3.646 0.708-0.708zM16 0v17h1v-17h-1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

