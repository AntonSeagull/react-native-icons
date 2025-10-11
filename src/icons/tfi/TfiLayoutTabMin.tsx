

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutTabMin = (props: IconProps) => {

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
          <Path d="M7 2v-1h-7v3.997h1v-2.997h5v3h11v-3h-10zM7 3h4v1h-4v-1zM12 4v-1h4v1h-4z" fill="#000000" />
        </G>
      </Svg>
    );
  }

