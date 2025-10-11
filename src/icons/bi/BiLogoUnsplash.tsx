

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoUnsplash = (props: IconProps) => {

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
          <Path d="M8.625 8.063V3h6.75v5.063h-6.75zm6.75 2.812H21V21H3V10.875h5.625v5.063h6.75v-5.063z" />
        </G>
      </Svg>
    );
  }

