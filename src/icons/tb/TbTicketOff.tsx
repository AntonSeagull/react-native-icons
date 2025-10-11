

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTicketOff = (props: IconProps) => {

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
          <Path d="M15 5v2" />
          <Path d="M15 17v2" />
          <Path d="M9 5h10a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3m-2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 1 0 0 -4v-3a2 2 0 0 1 2 -2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

