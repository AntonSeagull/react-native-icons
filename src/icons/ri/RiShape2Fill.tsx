

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiShape2Fill = (props: IconProps) => {

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
          <Path d="M2 2H7V7H2V2ZM2 17H7V22H2V17ZM17 2H22V7H17V2ZM17 17H22V22H17V17ZM8 4H16V6H8V4ZM4 8H6V16H4V8ZM18 8H20V16H18V8ZM8 18H16V20H8V18Z" />
        </G>
      </Svg>
    );
  }

