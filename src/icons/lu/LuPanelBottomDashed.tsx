

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPanelBottomDashed = (props: IconProps) => {

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
          <Path d="M14 15h1" />
          <Path d="M19 15h2" />
          <Path d="M3 15h2" />
          <Path d="M9 15h1" />
        </G>
      </Svg>
    );
  }

