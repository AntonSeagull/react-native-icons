

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceUnknownFilled = (props: IconProps) => {

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
          <Path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 13a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.526 1.292a.98 .98 0 0 1 1.195 -.239a1 1 0 0 1 -.455 1.892a1 1 0 0 0 -.006 2a3 3 0 0 0 1.371 -5.673" />
        </G>
      </Svg>
    );
  }

