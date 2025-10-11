

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscPlug = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M7 1H6v3H4.5l-.5.5V8a4 4 0 0 0 3.5 3.969V15h1v-3.031A4 4 0 0 0 12 8V4.5l-.5-.5H10V1H9v3H7V1zm3.121 9.121A3 3 0 0 1 5 8V5h6v3a3 3 0 0 1-.879 2.121z" />
        </G>
      </Svg>
    );
  }

