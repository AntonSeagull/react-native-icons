

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLifebuoy = (props: IconProps) => {

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
          <Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M15 15l3.35 3.35" />
          <Path d="M9 15l-3.35 3.35" />
          <Path d="M5.65 5.65l3.35 3.35" />
          <Path d="M18.35 5.65l-3.35 3.35" />
        </G>
      </Svg>
    );
  }

