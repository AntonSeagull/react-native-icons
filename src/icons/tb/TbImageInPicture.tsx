

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbImageInPicture = (props: IconProps) => {

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
          <Path d="M13 15c-2 0 -5 1 -5 5" />
          <Path d="M4 11m0 2a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2z" />
          <Path d="M4 7v-2a1 1 0 0 1 1 -1h2" />
          <Path d="M11 4h2" />
          <Path d="M17 4h2a1 1 0 0 1 1 1v2" />
          <Path d="M20 11v2" />
          <Path d="M20 17v2a1 1 0 0 1 -1 1h-2" />
        </G>
      </Svg>
    );
  }

