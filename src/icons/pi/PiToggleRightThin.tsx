

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiToggleRightThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M176,60H80a68,68,0,0,0,0,136h96a68,68,0,0,0,0-136Zm0,128H80A60,60,0,0,1,80,68h96a60,60,0,0,1,0,120Zm0-96a36,36,0,1,0,36,36A36,36,0,0,0,176,92Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,176,156Z" />
        </G>
      </Svg>
    );
  }

