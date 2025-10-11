

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiMediaPlayReverse = (props: IconProps) => {

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
          <Path d="M14 19c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6-2.6 2.5-6.6 6.4-6.6 6.4s4 3.9 6.6 6.4c.4.4.9.6 1.4.6z" />
        </G>
      </Svg>
    );
  }

