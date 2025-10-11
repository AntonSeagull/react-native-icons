

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlSkipBackward = (props: IconProps) => {

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
          <Path d="M6.719 8.526l7.281 6.038v-12.135l-7.281 6.097zM13 12.436l-4.719-3.914 4.719-3.951v7.865zM3 2h1v13h-1v-13z" fill="#000000" />
        </G>
      </Svg>
    );
  }

