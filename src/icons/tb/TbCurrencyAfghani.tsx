

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyAfghani = (props: IconProps) => {

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
          <Path d="M15 13h-3.5a3.5 3.5 0 1 1 3.5 -3.5v6.5h-7" />
          <Path d="M12 3v.01" />
          <Path d="M12 19v2" />
        </G>
      </Svg>
    );
  }

