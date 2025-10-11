

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiHorizontalFlip = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M387.02 278.627v67.883L477.53 256l-90.51-90.51v67.883H124.98V165.49L34.47 256l90.51 90.51v-67.883h262.04z" fill="#000" />
        </G>
      </Svg>
    );
  }

