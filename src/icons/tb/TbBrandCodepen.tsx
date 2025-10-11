

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandCodepen = (props: IconProps) => {

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
          <Path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
          <Path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
          <Path d="M3 9l0 6" />
          <Path d="M21 9l0 6" />
          <Path d="M12 3l0 6" />
          <Path d="M12 15l0 6" />
        </G>
      </Svg>
    );
  }

