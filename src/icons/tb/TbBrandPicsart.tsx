

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandPicsart = (props: IconProps) => {

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
          <Path d="M12 9m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <Path d="M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
        </G>
      </Svg>
    );
  }

