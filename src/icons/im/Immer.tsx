

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Immer = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M15.781 12.953l-4.712-4.712c-0.292-0.292-0.769-0.292-1.061 0l-0.354 0.354-2.875-2.875 4.72-4.72h-5l-2.22 2.22-0.22-0.22h-1.061v1.061l0.22 0.22-3.22 3.22 2.5 2.5 3.22-3.22 2.875 2.875-0.354 0.354c-0.292 0.292-0.292 0.769 0 1.061l4.712 4.712c0.292 0.292 0.769 0.292 1.061 0l1.768-1.768c0.292-0.292 0.292-0.769 0-1.061z" fill="#000000" />
        </G>
      </Svg>
    );
  }

