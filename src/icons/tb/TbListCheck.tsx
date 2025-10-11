

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbListCheck = (props: IconProps) => {

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
          <Path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
          <Path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
          <Path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
          <Path d="M11 6l9 0" />
          <Path d="M11 12l9 0" />
          <Path d="M11 18l9 0" />
        </G>
      </Svg>
    );
  }

