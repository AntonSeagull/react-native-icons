

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiAwesomewm = (props: IconProps) => {

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
          <Path d="M0 24V8.25h16.5V7.5H0V0h24v24h-7.5v-8.25h-9v.75h8.25V24z" />
        </G>
      </Svg>
    );
  }

