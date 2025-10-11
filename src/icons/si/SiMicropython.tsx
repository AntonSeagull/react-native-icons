

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMicropython = (props: IconProps) => {

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
          <Path d="M0 0h11.509v18.737h.982V0H24v24h-5.263V5.263h-.983V24H6.246V5.263l-.983.035V24H0zm22.246 19.509h-1.404v2.386h1.404z" />
        </G>
      </Svg>
    );
  }

