

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutMediaOverlayAlt2 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 9h-10v-1h10v1zM12 10h-10v1h10v-1zM17 1v15h-17v-15h17zM16 2h-15v13h15v-13z" fill="#000000" />
        </G>
      </Svg>
    );
  }

