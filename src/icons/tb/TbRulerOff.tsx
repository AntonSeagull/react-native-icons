

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRulerOff = (props: IconProps) => {

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
          <Path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a1 1 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722" />
          <Path d="M4 8h2" />
          <Path d="M4 12h3" />
          <Path d="M4 16h2" />
          <Path d="M12 4v3" />
          <Path d="M16 4v2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

