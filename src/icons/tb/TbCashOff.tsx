

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCashOff = (props: IconProps) => {

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
          <Path d="M13 9h6a2 2 0 0 1 2 2v6m-2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
          <Path d="M12.582 12.59a2 2 0 0 0 2.83 2.826" />
          <Path d="M17 9v-2a2 2 0 0 0 -2 -2h-6m-4 0a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

