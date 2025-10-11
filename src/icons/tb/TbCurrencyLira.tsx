

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyLira = (props: IconProps) => {

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
          <Path d="M10 5v15a7 7 0 0 0 7 -7" />
          <Path d="M6 15l8 -4" />
          <Path d="M14 7l-8 4" />
        </G>
      </Svg>
    );
  }

