

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyYen = (props: IconProps) => {

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
          <Path d="M12 19v-7l-5 -7m10 0l-5 7" />
          <Path d="M8 17l8 0" />
          <Path d="M8 13l8 0" />
        </G>
      </Svg>
    );
  }

