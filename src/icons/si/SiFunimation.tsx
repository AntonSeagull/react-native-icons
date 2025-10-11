

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiFunimation = (props: IconProps) => {

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
          <Path d="M12 0a12 12 0 1 0 12 12A12.001 12.001 0 0 0 12 0ZM7.428 16.06h9.188s-.449 3.278-4.601 3.278c-4.15 0-4.587-3.278-4.587-3.278z" />
        </G>
      </Svg>
    );
  }

