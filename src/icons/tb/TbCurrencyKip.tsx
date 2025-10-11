

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyKip = (props: IconProps) => {

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
          <Path d="M6 12h12" />
          <Path d="M9 5v14" />
          <Path d="M16 19a7 7 0 0 0 -7 -7a7 7 0 0 0 7 -7" />
        </G>
      </Svg>
    );
  }

