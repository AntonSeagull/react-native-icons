

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbToolsKitchen3 = (props: IconProps) => {

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
          <Path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
          <Path d="M17 8m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
          <Path d="M17 12v9" />
        </G>
      </Svg>
    );
  }

