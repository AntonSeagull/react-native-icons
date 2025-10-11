

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCloudDataConnection = (props: IconProps) => {

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
          <Path d="M5 9.897c0 -1.714 1.46 -3.104 3.26 -3.104c.275 -1.22 1.255 -2.215 2.572 -2.611c1.317 -.397 2.77 -.134 3.811 .69c1.042 .822 1.514 2.08 1.239 3.3h.693a2.42 2.42 0 0 1 2.425 2.414a2.42 2.42 0 0 1 -2.425 2.414h-8.315c-1.8 0 -3.26 -1.39 -3.26 -3.103z" />
          <Path d="M12 13v3" />
          <Path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M14 18h7" />
          <Path d="M3 18h7" />
        </G>
      </Svg>
    );
  }

