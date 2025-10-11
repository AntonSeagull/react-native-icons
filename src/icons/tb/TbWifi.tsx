

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbWifi = (props: IconProps) => {

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
          <Path d="M12 18l.01 0" />
          <Path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
          <Path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
          <Path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
        </G>
      </Svg>
    );
  }

