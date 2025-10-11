

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcPodiumWithSpeaker = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M36,26.1c0,0-3.3-7.1-12-7.1s-12,7.1-12,7.1V30h24V26.1z" fill="#607D8B" />
        </G>
      </Svg>
    );
  }

