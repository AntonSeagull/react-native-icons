

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyRufiyaa = (props: IconProps) => {

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
          <Path d="M20 16h.01" />
          <Path d="M4 16c9.5 -4 11.5 -8 14 -9" />
          <Path d="M12 8l5 3" />
        </G>
      </Svg>
    );
  }

