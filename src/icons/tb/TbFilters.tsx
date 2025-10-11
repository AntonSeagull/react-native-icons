

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFilters = (props: IconProps) => {

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
          <Path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path d="M8 11a5 5 0 1 0 3.998 1.997" />
          <Path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003" />
        </G>
      </Svg>
    );
  }

