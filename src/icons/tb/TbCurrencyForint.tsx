

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrencyForint = (props: IconProps) => {

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
          <Path d="M11 4h-4a3 3 0 0 0 -3 3v12" />
          <Path d="M10 11h-6" />
          <Path d="M16 4v13a2 2 0 0 0 2 2h2" />
          <Path d="M19 9h-5" />
        </G>
      </Svg>
    );
  }

