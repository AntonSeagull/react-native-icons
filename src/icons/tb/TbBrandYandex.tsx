

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandYandex = (props: IconProps) => {

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
          <Path d="M15 20v-16h-2a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4h2" />
          <Path d="M9 20l3 -7" />
        </G>
      </Svg>
    );
  }

