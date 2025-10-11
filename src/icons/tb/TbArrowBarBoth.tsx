

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBarBoth = (props: IconProps) => {

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
          <Path d="M8 12h-6" />
          <Path d="M5 15l-3 -3l3 -3" />
          <Path d="M22 12h-6" />
          <Path d="M19 15l3 -3l-3 -3" />
          <Path d="M12 4v16" />
        </G>
      </Svg>
    );
  }

