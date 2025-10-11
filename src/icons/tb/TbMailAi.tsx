

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMailAi = (props: IconProps) => {

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
          <Path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
          <Path d="M3 7l8 5.345m4 -1.345l6 -4" />
          <Path d="M14 21v-4a2 2 0 1 1 4 0v4" />
          <Path d="M14 19h4" />
          <Path d="M21 15v6" />
        </G>
      </Svg>
    );
  }

