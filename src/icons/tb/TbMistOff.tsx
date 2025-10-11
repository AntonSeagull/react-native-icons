

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMistOff = (props: IconProps) => {

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
          <Path d="M12 5h9" />
          <Path d="M3 10h7" />
          <Path d="M18 10h1" />
          <Path d="M5 15h5" />
          <Path d="M14 15h1m4 0h2" />
          <Path d="M3 20h9m4 0h3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

