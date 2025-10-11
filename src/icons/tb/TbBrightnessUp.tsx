

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrightnessUp = (props: IconProps) => {

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
          <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M12 5l0 -2" />
          <Path d="M17 7l1.4 -1.4" />
          <Path d="M19 12l2 0" />
          <Path d="M17 17l1.4 1.4" />
          <Path d="M12 19l0 2" />
          <Path d="M7 17l-1.4 1.4" />
          <Path d="M6 12l-2 0" />
          <Path d="M7 7l-1.4 -1.4" />
        </G>
      </Svg>
    );
  }

