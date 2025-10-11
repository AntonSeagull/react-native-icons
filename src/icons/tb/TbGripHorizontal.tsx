

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGripHorizontal = (props: IconProps) => {

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
          <Path d="M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </G>
      </Svg>
    );
  }

