

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBeta = (props: IconProps) => {

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
          <Path d="M8 22v-14a4 4 0 0 1 4 -4h.5a3.5 3.5 0 0 1 0 7h-.5h.5a4.5 4.5 0 1 1 -4.5 4.5v-.5" />
        </G>
      </Svg>
    );
  }

