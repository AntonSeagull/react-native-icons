

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTooltip = (props: IconProps) => {

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
          <Path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707z" />
        </G>
      </Svg>
    );
  }

