

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMapSearch = (props: IconProps) => {

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
          <Path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5" />
          <Path d="M9 4v13" />
          <Path d="M15 7v5" />
          <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M20.2 20.2l1.8 1.8" />
        </G>
      </Svg>
    );
  }

