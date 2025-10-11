

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTeePipe = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M25 115v154h30V115zm432 0v154h30V115zM73 128v128h103.8l40-53.4 14.4 10.8-39.2 52.3V439h128V265.7l-39.2-52.3 14.4-10.8 40 53.4H439V128zm23 23h320v18H96zm119 137h18v128h-18zm-36 169v30h154v-30z" fill="#000" />
        </G>
      </Svg>
    );
  }

