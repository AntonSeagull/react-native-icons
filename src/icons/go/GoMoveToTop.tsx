

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoMoveToTop = (props: IconProps) => {

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
          <Path d="M4.75 3.5a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 0 1.5H4.75Zm.47 9.47a.749.749 0 1 0 1.06 1.06l4.97-4.969V21.25a.75.75 0 0 0 1.5 0V9.061l4.97 4.969a.749.749 0 1 0 1.06-1.06l-6.25-6.25a.749.749 0 0 0-1.06 0l-6.25 6.25Z" />
        </G>
      </Svg>
    );
  }

