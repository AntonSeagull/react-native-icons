

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSteam = (props: IconProps) => {

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
          <Path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M4 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M20 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M5.5 5.5l3 3" />
          <Path d="M15.5 15.5l3 3" />
          <Path d="M18.5 5.5l-3 3" />
          <Path d="M8.5 15.5l-3 3" />
        </G>
      </Svg>
    );
  }

