

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrLocationPin = (props: IconProps) => {

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
          <Path d="M12,10 C14.209139,10 16,8.209139 16,6 C16,3.790861 14.209139,2 12,2 C9.790861,2 8,3.790861 8,6 C8,8.209139 9.790861,10 12,10 Z M12,10 L12,22" fill="none" />
        </G>
      </Svg>
    );
  }

