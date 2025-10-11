

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDeviceAirtag = (props: IconProps) => {

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
          <Path d="M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" />
          <Path d="M9 15v.01" />
          <Path d="M15 15a6 6 0 0 0 -6 -6" />
          <Path d="M12 15a3 3 0 0 0 -3 -3" />
        </G>
      </Svg>
    );
  }

