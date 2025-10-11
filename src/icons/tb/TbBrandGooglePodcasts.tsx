

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandGooglePodcasts = (props: IconProps) => {

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
          <Path d="M12 3v2" />
          <Path d="M12 19v2" />
          <Path d="M12 8v8" />
          <Path d="M8 17v2" />
          <Path d="M4 11v2" />
          <Path d="M20 11v2" />
          <Path d="M8 5v8" />
          <Path d="M16 7v-2" />
          <Path d="M16 19v-8" />
        </G>
      </Svg>
    );
  }

