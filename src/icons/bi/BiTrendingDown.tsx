

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiTrendingDown = (props: IconProps) => {

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
          <Path d="m14 9.586-4 4-6.293-6.293-1.414 1.414L10 16.414l4-4 4.293 4.293L16 19h6v-6l-2.293 2.293z" />
        </G>
      </Svg>
    );
  }

