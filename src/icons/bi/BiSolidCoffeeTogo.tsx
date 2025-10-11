

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiSolidCoffeeTogo = (props: IconProps) => {

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
          <Path d="m18.5 5-1.224-2.447A1 1 0 0 0 16.382 2H7.618a1 1 0 0 0-.894.553L5.5 5H3v2h18V5h-2.5zM6.734 21.142c.071.492.493.858.991.858h8.551a1 1 0 0 0 .99-.858L19 9H5l1.734 12.142zM16 12l-.714 5H8.714L8 12h8z" />
        </G>
      </Svg>
    );
  }

