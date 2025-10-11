

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceTabletShare = (props: IconProps) => {

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
          <Path d="M12 21h-6a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9" />
          <Path d="M12.57 16.178a1 1 0 1 0 .016 1.633" />
          <Path d="M16 22l5 -5" />
          <Path d="M21 21.5v-4.5h-4.5" />
        </G>
      </Svg>
    );
  }

