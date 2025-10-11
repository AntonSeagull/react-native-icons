

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencySolana = (props: IconProps) => {

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
          <Path d="M4 18h12l4 -4h-12z" />
          <Path d="M8 14l-4 -4h12l4 4" />
          <Path d="M16 10l4 -4h-12l-4 4" />
        </G>
      </Svg>
    );
  }

