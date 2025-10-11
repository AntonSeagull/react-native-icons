

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZodiacVirgo = (props: IconProps) => {

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
          <Path d="M3 4a2 2 0 0 1 2 2v9" />
          <Path d="M5 6a2 2 0 0 1 4 0v9" />
          <Path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
          <Path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" />
        </G>
      </Svg>
    );
  }

