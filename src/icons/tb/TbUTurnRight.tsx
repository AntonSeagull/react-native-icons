

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUTurnRight = (props: IconProps) => {

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
          <Path d="M7 20v-11.5a4.5 4.5 0 0 1 9 0v8.5" />
          <Path d="M13 14l3 3l3 -3" />
        </G>
      </Svg>
    );
  }

