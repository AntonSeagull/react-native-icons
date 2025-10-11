

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyTugrik = (props: IconProps) => {

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
          <Path d="M7 6h10" />
          <Path d="M12 6v13" />
          <Path d="M8 17l8 -3" />
          <Path d="M16 10l-8 3" />
        </G>
      </Svg>
    );
  }

