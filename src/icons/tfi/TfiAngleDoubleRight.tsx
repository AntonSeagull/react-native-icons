

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiAngleDoubleRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9.644 8.5l-6.854 6.854-0.707-0.707 6.146-6.147-6.146-6.146 0.707-0.708 6.854 6.854zM7.634 1.646l-0.707 0.708 6.146 6.146-6.146 6.146 0.707 0.707 6.853-6.853-6.853-6.854z" fill="#000000" />
        </G>
      </Svg>
    );
  }

