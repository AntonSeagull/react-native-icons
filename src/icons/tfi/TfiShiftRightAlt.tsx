

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiShiftRightAlt = (props: IconProps) => {

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
          <Path d="M15.207 8.5l-3.354 3.354-0.707-0.707 2.647-2.647-2.646-2.646 0.707-0.707 3.353 3.353zM7 17h1v-17h-1v17z" fill="#000000" />
        </G>
      </Svg>
    );
  }

