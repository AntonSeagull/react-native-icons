

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSocial = (props: IconProps) => {

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
          <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M12 7l0 4" />
          <Path d="M6.7 17.8l2.8 -2" />
          <Path d="M17.3 17.8l-2.8 -2" />
        </G>
      </Svg>
    );
  }

