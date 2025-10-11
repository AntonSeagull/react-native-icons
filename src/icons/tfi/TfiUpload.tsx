

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiUpload = (props: IconProps) => {

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
          <Path d="M17 16v1h-17v-1h17zM7.999 1.708v11.292h1v-11.294l3.647 3.647 0.707-0.707-4.853-4.853-4.854 4.853 0.707 0.707 3.646-3.645z" fill="#000000" />
        </G>
      </Svg>
    );
  }

