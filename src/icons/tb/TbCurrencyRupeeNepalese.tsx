

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyRupeeNepalese = (props: IconProps) => {

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
          <Path d="M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6" />
          <Path d="M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707" />
        </G>
      </Svg>
    );
  }

