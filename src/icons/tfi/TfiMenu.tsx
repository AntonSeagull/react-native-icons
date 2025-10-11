

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiMenu = (props: IconProps) => {

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
          <Path d="M16 3v2h-15v-2h15zM1 10h15v-2h-15v2zM1 15h15v-2h-15v2z" fill="#000000" />
        </G>
      </Svg>
    );
  }

