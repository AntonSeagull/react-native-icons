

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiListMinus = (props: IconProps) => {

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
          <Path d="M21.063 15H13v2h9v-2zM4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4z" />
        </G>
      </Svg>
    );
  }

