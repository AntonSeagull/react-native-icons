

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiFacebookgaming = (props: IconProps) => {

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
          <Path d="M0 0v24h15.67v-7.35H7.35v-9.3H24V0zm8.33 15.68h8.32V24H24V8.32H8.33Z" />
        </G>
      </Svg>
    );
  }

