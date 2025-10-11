

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceDesktopCog = (props: IconProps) => {

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
          <Path d="M12 16h-8a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7" />
          <Path d="M7 20h5" />
          <Path d="M9 16v4" />
          <Path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M19.001 15.5v1.5" />
          <Path d="M19.001 21v1.5" />
          <Path d="M22.032 17.25l-1.299 .75" />
          <Path d="M17.27 20l-1.3 .75" />
          <Path d="M15.97 17.25l1.3 .75" />
          <Path d="M20.733 20l1.3 .75" />
        </G>
      </Svg>
    );
  }

