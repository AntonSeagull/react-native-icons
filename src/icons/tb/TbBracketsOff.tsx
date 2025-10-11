

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBracketsOff = (props: IconProps) => {

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
          <Path d="M5 5v15h3" />
          <Path d="M16 4h3v11m0 4v1h-3" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

