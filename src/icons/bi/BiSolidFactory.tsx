

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidFactory = (props: IconProps) => {

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
          <Path d="M17 10V6l-5 4V6l-5 4V4H2v16h20V6l-5 4zm-8 7H7v-3h2v3zm5 0h-2v-3h2v3zm5 0h-2v-3h2v3z" />
        </G>
      </Svg>
    );
  }

