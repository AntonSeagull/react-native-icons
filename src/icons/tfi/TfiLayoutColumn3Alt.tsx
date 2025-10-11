

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutColumn3Alt = (props: IconProps) => {

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
          <Path d="M0 0h5v17h-5v-17zM6 17h5v-17h-5v17zM12 0v17h5v-17h-5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

