

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceImacUp = (props: IconProps) => {

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
          <Path d="M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
          <Path d="M3 13h13" />
          <Path d="M8 21h4.5" />
          <Path d="M10 17l-.5 4" />
          <Path d="M19 22v-6" />
          <Path d="M22 19l-3 -3l-3 3" />
        </G>
      </Svg>
    );
  }

