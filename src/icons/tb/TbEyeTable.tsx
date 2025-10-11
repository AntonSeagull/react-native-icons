

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEyeTable = (props: IconProps) => {

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
          <Path d="M8 18h-.011" />
          <Path d="M12 18h-.011" />
          <Path d="M16 18h-.011" />
          <Path d="M4 3h16" />
          <Path d="M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17" />
          <Path d="M14 7h-4" />
          <Path d="M9 15h1" />
          <Path d="M14 15h1" />
          <Path d="M12 11v-4" />
        </G>
      </Svg>
    );
  }

