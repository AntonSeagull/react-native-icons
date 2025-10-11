

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSignalLte = (props: IconProps) => {

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
          <Path d="M21 8h-4v8h4" />
          <Path d="M17 12h2.5" />
          <Path d="M4 8v8h4" />
          <Path d="M10 8h4" />
          <Path d="M12 8v8" />
        </G>
      </Svg>
    );
  }

