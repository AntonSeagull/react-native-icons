

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiText = (props: IconProps) => {

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
          <Path d="M14 2v3h-1v-2h-4v12h1.643v1h-4.286v-1h1.643v-12h-4v2h-1v-3h11z" fill="#000000" />
        </G>
      </Svg>
    );
  }

