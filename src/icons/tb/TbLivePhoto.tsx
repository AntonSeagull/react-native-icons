

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLivePhoto = (props: IconProps) => {

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
          <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path d="M15.9 20.11l0 .01" />
          <Path d="M19.04 17.61l0 .01" />
          <Path d="M20.77 14l0 .01" />
          <Path d="M20.77 10l0 .01" />
          <Path d="M19.04 6.39l0 .01" />
          <Path d="M15.9 3.89l0 .01" />
          <Path d="M12 3l0 .01" />
          <Path d="M8.1 3.89l0 .01" />
          <Path d="M4.96 6.39l0 .01" />
          <Path d="M3.23 10l0 .01" />
          <Path d="M3.23 14l0 .01" />
          <Path d="M4.96 17.61l0 .01" />
          <Path d="M8.1 20.11l0 .01" />
          <Path d="M12 21l0 .01" />
        </G>
      </Svg>
    );
  }

