

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlPlay = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 2.692v11.618l11.618-5.837-11.618-5.781zM4 4.308l8.382 4.17-8.382 4.211v-8.381z" fill="#000000" />
        </G>
      </Svg>
    );
  }

