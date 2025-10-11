

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuJapaneseYen = (props: IconProps) => {

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
          <Path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
          <Path d="M6 15h12" />
          <Path d="M6 11h12" />
        </G>
      </Svg>
    );
  }

