

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextWrapDisabled = (props: IconProps) => {

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
          <Path d="M4 6l10 0" />
          <Path d="M4 18l10 0" />
          <Path d="M4 12h17l-3 -3m0 6l3 -3" />
        </G>
      </Svg>
    );
  }

