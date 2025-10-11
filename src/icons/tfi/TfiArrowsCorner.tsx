

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowsCorner = (props: IconProps) => {

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
          <Path d="M15 9.5v5.5h-5.5v-1h3.803l-10.303-10.303v3.803h-1v-5.5h5.5v1h-3.783l10.283 10.283v-3.783h1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

