

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTouchpadOff = (props: IconProps) => {

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
          <Path d="M12 20v-6" />
          <Path d="M19.656 14H22" />
          <Path d="M2 14h12" />
          <Path d="m2 2 20 20" />
          <Path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
          <Path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />
        </G>
      </Svg>
    );
  }

