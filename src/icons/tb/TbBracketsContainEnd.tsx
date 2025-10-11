

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBracketsContainEnd = (props: IconProps) => {

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
          <Path d="M14 4h4v16h-4" />
          <Path d="M5 16h.01" />
          <Path d="M9 16h.01" />
          <Path d="M13 16h.01" />
        </G>
      </Svg>
    );
  }

