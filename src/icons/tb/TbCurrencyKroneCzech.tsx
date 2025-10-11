

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyKroneCzech = (props: IconProps) => {

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
          <Path d="M5 6v12" />
          <Path d="M5 12c3.5 0 6 -3 6 -6" />
          <Path d="M5 12c3.5 0 6 3 6 6" />
          <Path d="M19 6l-2 2l-2 -2" />
          <Path d="M19 12h-2a3 3 0 0 0 0 6h2" />
        </G>
      </Svg>
    );
  }

