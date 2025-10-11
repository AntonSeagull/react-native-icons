

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiTransfer = (props: IconProps) => {

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
          <Path d="m15 12 5-4-5-4v2.999H2v2h13zm7 3H9v-3l-5 4 5 4v-3h13z" />
        </G>
      </Svg>
    );
  }

