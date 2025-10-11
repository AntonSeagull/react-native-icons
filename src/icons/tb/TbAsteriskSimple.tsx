

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAsteriskSimple = (props: IconProps) => {

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
          <Path d="M12 12v-9" />
          <Path d="M12 12l-9 -2.5" />
          <Path d="M12 12l9 -2.5" />
          <Path d="M12 12l6 8.5" />
          <Path d="M12 12l-6 8.5" />
        </G>
      </Svg>
    );
  }

