

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbQuotes = (props: IconProps) => {

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
          <Path d="M4 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
          <Path d="M8 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
          <Path d="M16 18c1.333 -1.854 1.333 -4.146 0 -6" />
          <Path d="M20 18c1.333 -1.854 1.333 -4.146 0 -6" />
        </G>
      </Svg>
    );
  }

