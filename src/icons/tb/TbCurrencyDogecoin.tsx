

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyDogecoin = (props: IconProps) => {

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
          <Path d="M6 12h6" />
          <Path d="M9 6v12" />
          <Path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
        </G>
      </Svg>
    );
  }

