

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRewindForward60 = (props: IconProps) => {

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
          <Path d="M5.007 16.478a6 6 0 0 1 3.993 -10.478h11" />
          <Path d="M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
          <Path d="M17 9l3 -3l-3 -3" />
          <Path d="M12 14h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2" />
        </G>
      </Svg>
    );
  }

