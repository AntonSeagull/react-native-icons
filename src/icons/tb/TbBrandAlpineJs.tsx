

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandAlpineJs = (props: IconProps) => {

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
          <Path d="M3 11.5l4.5 4.5h9l-9 -9z" />
          <Path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" />
        </G>
      </Svg>
    );
  }

