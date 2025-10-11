

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyNano = (props: IconProps) => {

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
          <Path d="M7 20l10 -16" />
          <Path d="M7 12h10" />
          <Path d="M7 16h10" />
          <Path d="M17 20l-10 -16" />
        </G>
      </Svg>
    );
  }

