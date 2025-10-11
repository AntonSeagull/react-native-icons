

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowUpCircle = (props: IconProps) => {

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
          <Path d="M12 17v-14" />
          <Path d="M15 6l-3 -3l-3 3" />
          <Path d="M12 17a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />
        </G>
      </Svg>
    );
  }

