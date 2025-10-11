

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceDesktopFilled = (props: IconProps) => {

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
          <Path d="M7 21a1 1 0 0 1 0 -2h1v-2h-4a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-4v2h1a1 1 0 0 1 0 2zm7 -4h-4v2h4z" />
        </G>
      </Svg>
    );
  }

