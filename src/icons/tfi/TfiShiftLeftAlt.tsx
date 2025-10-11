

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiShiftLeftAlt = (props: IconProps) => {

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
          <Path d="M5.854 5.854l-2.647 2.646 2.646 2.646-0.707 0.707-3.353-3.353 3.354-3.354 0.707 0.708zM9 0v17h1v-17h-1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

